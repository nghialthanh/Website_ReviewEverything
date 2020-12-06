import React, {Component} from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';

class ReviewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Reviewbody: [],
            stt: 0,
            rating: 3, 
            ktr:1
        }
    }
    componentDidMount() {
        let str = '/Review/'+this.props.id;
            axios .get(str) 
                .then(response => {               
                    this.setState({ Reviewbody: response.data });               
                })
                .catch(err => console.log(err));
    }
    //------------------star rating---------------------------------//
    changeRating = (newRating) => {
        this.setState({
          rating: newRating
        });
    }
    renderstar = () => {
        let sta, count = -1;
        this.state.Reviewbody.forEach(e =>{
            count++;
            if(count=== this.state.Reviewbody.length)
                count=0;       
            if (count === this.state.stt){
                sta = e.star;
            }
        });
        if(this.state.ktr==1)
            this.setState({rating: sta,ktr: 2});
    }
    //------------------------------------content review ----------------------//
    handle = () => {
        let a = this.state.stt+1;
        if(a==this.state.Reviewbody.length)
            this.setState({ stt: 0})
        else this.setState({ stt: a})
    }
    //--------------------------------Back Next Button-----------------------
    handleback = () => {
            return <div className="backreview" onClick={()=>this.handle()}><i className="fas fa-chevron-circle-left"  /></div>
    }
    handlenext = () => {
            return <div className="nextreview" onClick={()=>this.handle()}><i className="fas fa-chevron-circle-right" /></div>
    }
    //-------------------------Body Review------------------------------
    renderitem = () => {
            let count = -1;
            const data = this.state.Reviewbody;
            return data.map(e => {        
                count++;
                if(count== this.state.Reviewbody.length)
                    count=0;       
                if (count == this.state.stt){
                    return (
                        <div className="Bodyreview">
                            <p>{e.Header}</p>
                            <p>{e.Body1}</p>
                            <p>{e.Footer}</p>
                        </div>
                    );
                }
            });
    }
    render() {       
        return(
        <div className="wrapper2"> 
            {this.handleback()}
            <div className="centerreview"><h1>{this.props.name}</h1></div> 
            {this.handlenext()}
            <div className="review">
                <div className="headerReview">
                    <p>Đạo diễn: {this.props.dd}</p>
                    <p>Ngày ra mắt: {this.props.ngay}</p>
                </div>
                <img src="../assets/p7-MatBiec.jpg" className="posterreview" /> 
                {this.renderitem()}                               
              
            </div>
            <div>
                <h3>Đánh Giá: </h3>
                <StarRatings
                    rating={this.state.rating}
                    starRatedColor="rgb(125, 177, 255)"
                    starHoverColor="rgb(125, 177, 255)"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                />
            </div>
        </div>
        )
    }
}
export default ReviewPage;



