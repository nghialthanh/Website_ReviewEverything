import React, {Component} from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
// import { connect } from "react-redux"
// import store from "../js/store";
// import Action from "../js/action"
import './Login.css'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: '',
          pass: '',
          repass: '',
          email: '',
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
        let {user,pass,email,repass} = this.state;
        if(user.trim() == 0){
            swal("TÊN TRỐNG!",'', "error");
            return false;
        }
        else if(pass.trim() == 0 ){
            swal("MẬT KHẨU TRỐNG!",'', "error");
            return false;
        }
        else if(pass=== repass ){
            swal("MẬT KHẨU KHÔNG KHỚP!",'', "error");
            return false;
        }
        let id= uuidv4();
        axios   .post('/Account', {ID: id, username: user, password: pass, chucvu: 'NV'})
                .then(response => {         
                    if(response.data==true){   
                        this.setState({ ktr: true});
                        let acc = {
                            ID: id,
                            username: user,
                            password: pass,
                            chucvu: 'NV'
                          }  
                        this.props.handleAcc(acc)
                        
                    }
                    else swal ( "Oops" ,  "Tên đăng nhập hoặc mật khẩu sai!" ,  "error" )
                })
                .catch(err => console.log(err));
                
    }
    render() {  
        if(this.state.ktr==true){    
            let str='/'+this.state.user;
            return(
                <Route >
                    <Redirect  to={str}/>
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
                                    <h3>Sign In</h3>
                                </div>
                                <div className="card-body">
                                <form onSubmit={this.handleFormClickSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <input type="text" className="form-control" name="user" placeholder="Tên đăng nhập" value={this.state.user} onChange={this.handleFormChange}/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key" /></span>
                                        </div>
                                        <input type="password" className="form-control" name="pass" placeholder="Mật khẩu" value={this.state.pass} onChange={this.handleFormChange}/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key" /></span>
                                        </div>
                                        <input type="password" className="form-control" name="repass" placeholder="Xác nhận" value={this.state.repass} onChange={this.handleFormChange}/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-at" /></span>
                                        </div>
                                        <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleFormChange}/>
                                    </div>
                                    <div className="form-group">
                                        <button type="button"  className="btn float-right login_btn" onClick={()=>this.handleFormClickSubmit()}>
                                            Đăng kí
                                        </button>
                                        
                                    </div>
                                </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Bạn đã có tài khoản ?<Link to='/Login'>Đăng nhập</Link>
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
export default (SignUp);