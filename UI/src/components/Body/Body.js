import React, {Component} from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Route, Redirect, Switch } from "react-router-dom";

import SlideshowGallery from './slideshow-gallery';
import List from './listreview';
import Home from './HomePage';
import ReviewPage from './ReviewPage';
import Reviewlist from './Reviewlist';
import CensorshipReview from './censorshipReview';
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TacPham: [],
            name: '',
            dd: '',
            ngay: '',
            idreview: 0,
            statename: ''
        }
        this.handleShowBody3 = this.handleShowBody3.bind(this); 
    }
    //-----------------------lấy thông tin phim vào reviewPage----------------//
    handleShowBody3 = (v1,v2,v3,v4) => {
        this.setState({
            name: v1,
            dd: v2,
            ngay:v3,
            idreview: v4
        })
        console.log(v1,v2,v3,v4);
    }
    render() {     
        let n,m;
        if (this.props.stateBody==1)
            n="/Phim"
        else if (this.props.stateBody==2)
            n="/Sach-Truyen"
        else n="/Game";
        m=n+'/review';
        return(
            <Switch>
                <Route exact path="/" component={({location}) => <Home location={location} />}/>
                <Route path='/MyReview'  render={({location}) => <Reviewlist
                                                                    key={this.state.idreview}
                                                                    id={this.props.acc.ID}
                                                                    handleShowBody3 = {this.handleShowBody3}
                                                                    location={location}
                                                                />} 
                />
                <Route path='/Censorship'  render={({location}) => <CensorshipReview
                                                                    key={this.state.idreview}
                                                                    CV={this.props.acc.chucvu}
                                                                    name={this.props.acc.username}
                                                                    location={location}
                                                                    />} 
                />
                <Route path={m}  render={({location}) => <ReviewPage
                                                                key={this.state.idreview}
                                                                name={this.state.name}
                                                                dd={this.state.dd}
                                                                ngay={this.state.ngay}
                                                                id={this.state.idreview}
                                                                location={location}
                                                            />} 
                />
                
                <Route path={n} render={({location}) => <div className="body2">
                                                            <SlideshowGallery
                                                                stateBody={this.props.stateBody}
                                                                location={location}
                                                            />
                                                            <List
                                                                stateBody={this.props.stateBody}                                                               
                                                                handleShowBody3 = {this.handleShowBody3}
                                                                location={location}
                                                            />
                                                        </div>}
                />
                
            </Switch>
        )    
            
    }
}
export default Body;