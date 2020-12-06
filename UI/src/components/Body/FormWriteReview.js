import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class FormWriteReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Reviewbody: []
        }
    }
    render() {     
        return(
            <form className="form-inline" onSubmit={()=>this.props.handleFormClickSubmit()}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Item Name" 
                        value={this.props.valueItem} 
                        onChange={(event)=>this.props.handleFormNameChange(event.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <select className="form-control"
                        value={this.props.typeItem}
                        onChange={(event)=>this.props.handleFormTypeChange(event.target.value)} 
                    >
                        {this.renderLevel()}
                    </select>

                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Item price" 
                        value={this.props.priceItem} 
                        onChange={(event)=>this.props.handleFormPriceChange(event.target.value)} 
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>this.props.handleFormClickSubmit()}>Submit</button>
                <button type="button" className="btn btn-default" onClick={()=>this.props.handleFormClickClear()}>Clear</button>
            </form>
        )
    }
}
export default FormWriteReview;