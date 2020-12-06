import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class Reviewchild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Reviewbody: []
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
    renderitem = ()=>{
        let c=0;
        const data = this.state.Reviewbody;
        data.forEach(e => {
            c=c+e.star;
        });
        c=c/this.state.Reviewbody.length;
        let n = parseFloat(c); 
        c = Math.round(n * 10)/10;
        if (isNaN(c))
            c=0
        return c;
    }
    render() { 
        let n;
        if (this.props.stateBody==1)
            n="/Phim/review"
        else if (this.props.stateBody==2)
            n="/Sach-Truyen/review"
        else n="/Game/review";
        if(this.props.id === null) {
            return (
                <tr>
                    <td colSpan="4" className="text-center">  
                        <h4>No Item</h4>
                    </td>
                </tr>
            )
        }      
        return(
            <tr>
                <td className="text-center">
                    {this.props.number}
                </td>
                <td className="text-center">
                        <Link to={n} onClick={()=>this.props.handleShowBody3(this.props.name,this.props.DD,this.props.dateCC,this.props.id)}>{this.props.name}</Link>
                </td>
                <td className="text-center">
                    {this.renderitem()}
                </td>
                <td className="text-center">
                    {this.state.Reviewbody.length}
                </td>
                <td className="text-center">
                    {this.props.DD}
                </td>
                <td className="text-center">
                    {this.props.dateCC}
                </td>
            </tr>
        )
    }
}
export default Reviewchild;