import React, {Component} from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
// import { connect } from "react-redux"
// import store from "../js/store";
// import Action from "../js/action"
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          pass: '',
          ktr: false
        }
        
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFormClickSubmit = this.handleFormClickSubmit.bind(this);
    }
    handleFormChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        // if([name]=="user")
        //     store.dispatch(Action.setLogin1(value));
        // else
        //     store.dispatch(Action.setLogin2(value));
        this.setState({
            [name]: value
        });
    }
    handleFormClickSubmit = () => {
        let {user,pass} = this.state;
        axios   .get('/Account/?user='+user+'&pass='+pass)
                .then(response => {         
                    if(response.data!=null){   
                        this.setState({ ktr: true});  
                        this.props.handleAcc(response.data)
                        
                    }
                    else swal ( "Oops" ,  "Tên đăng nhập hoặc mật khẩu sai!" ,  "error" )
                })
                .catch(err => console.log(err));
                
    }
    render() {  
        if(this.state.ktr===true){    
            let str='/'+this.state.user;
            return(
                <Route >
                    <Redirect  to={{ pathname: str, state: {acc: this.state.acc}}}/>
                </Route>
            )
        }
        else{             
            return(
                <div className="LoginView">
                    <div className="container2">
                        <div className="d-flex justify-content-center h-100">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Đăng nhập</h3>
                                </div>
                                <div className="card-body">
                                <form onSubmit={this.handleFormClickSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <input type="text" className="form-control" name="user" placeholder="Tên đăng nhập"  value={this.state.user} onChange={this.handleFormChange}/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key" /></span>
                                        </div>
                                        <input type="password" className="form-control" name="pass" placeholder="Mật khẩu" value={this.state.pass} onChange={this.handleFormChange}/>
                                    </div>
                                    <div className="align-items-center remember">
                                        <input type="checkbox"/><p>Nhớ tài khoản</p>
                                    </div>
                                    <div className="form-group">
                                        <button type="button"  className="btn float-right login_btn" onClick={()=>this.handleFormClickSubmit()}>
                                            Đăng nhập
                                        </button>
                                        
                                    </div>
                                </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Bạn không có tài khoản?<Link to='/SignUp'>Đăng kí</Link>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Quên mật khẩu?</a>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
export default (Login);