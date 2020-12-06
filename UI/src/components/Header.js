import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Search from './Search';

class Header extends Component {
    renderitem = () =>{
        if(this.props.acc.ID>=0 ){
            if (this.props.acc.chucvu==='AD')
                return(
                    <div className="avt dropdown">
                            <img src="../assets/Nghia.jpg" alt="User image" className="dropdown-toggle" data-toggle="user-menu" />
                            <ul id="user-menu" className="dropdown-menu">
                            <li className="dropdown-menu-item">
                                <a className="dropdown-menu-link">
                                <div>
                                    <i className="far fa-id-card" />
                                </div>
                                <span>Profile</span>
                                </a>
                            </li>
                            <li className="dropdown-menu-item">
                                <a href="#" className="dropdown-menu-link">
                                <div>
                                    <i className="fas fa-users" />
                                </div>
                                <span>Manage members</span>
                                </a>
                            </li>
                            <li className="dropdown-menu-item">
                                <Link to="/Censorship" className="dropdown-menu-link">
                                <div>
                                    <i className="fas fa-tasks" />
                                </div>
                                <span>Censorship</span>
                                </Link>
                            </li>
                            <li className="dropdown-menu-item">
                                <Link to="/MyReview" className="dropdown-menu-link">
                                    <div>
                                        <i className="fas fa-feather-alt" />
                                    </div>
                                    <span>My Reviews</span>
                                </Link>
                            </li>
                            <li className="dropdown-menu-item">
                                <a href="#" className="dropdown-menu-link">
                                <div>
                                    <i className="fas fa-cog" />
                                </div>
                                <span>Settings</span>
                                </a>
                            </li>
                            <li className="dropdown-menu-item">
                                <Link to="/" className="dropdown-menu-link" onClick={()=>this.props.handleAcc(null)}>
                                <div>
                                    <i className="fas fa-sign-out-alt" />
                                </div>
                                <span>Logout</span>
                                </Link>
                            </li>
                            </ul>
                        </div>
                )
            else
                return(
                    <div className="avt dropdown">
                            <img src="../assets/Nghia.jpg" alt="User image" className="dropdown-toggle" data-toggle="user-menu" />
                            <ul id="user-menu" className="dropdown-menu">
                            <li className="dropdown-menu-item">
                                <a className="dropdown-menu-link">
                                    <div>
                                        <i className="far fa-id-card" />
                                    </div>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li className="dropdown-menu-item">
                                <Link to="/MyReview" className="dropdown-menu-link">
                                    <div>
                                        <i className="fas fa-feather-alt" />
                                    </div>
                                    <span>My Reviews</span>
                                </Link>
                            </li>
                            <li className="dropdown-menu-item">
                                <a href="#" className="dropdown-menu-link">
                                    <div>
                                        <i className="fas fa-cog" />
                                    </div>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li className="dropdown-menu-item">
                                <Link to="/" className="dropdown-menu-link" onClick={()=>this.props.handleAcc(null)}>
                                    <div>
                                        <i className="fas fa-sign-out-alt" />
                                    </div>
                                    <span>Logout</span>
                                </Link>
                            </li>
                            </ul>
                        </div>
                )
        }
        else 
            return(
                <Link to="/Login">
                    <button type="button" className="btn btn-default">Log in</button>
                </Link>
            )
    }
    render() {       
        return(
            <div className="navbar">
                    <Link to="/"><img src="../assets/review-logo.png" alt="ATPro logo" className="logo logo-light" /></Link> 
                    {/* onClick={()=>this.props.handleShowBody1()}        */}
                {/* form */}
                <Search/>
                {/* end form */}
                {/* nav right */}
                <ul className="navbar-nav nav-right">
                    <li className="nav-item dropdown">
                    <a className="nav-link">
                        <i className="fas fa-bell dropdown-toggle" data-toggle="notification-menu" />
                        <span className="navbar-badge">15</span>
                    </a>
                    <ul id="notification-menu" className="dropdown-menu notification-menu">
                        <div className="dropdown-menu-header">
                        <span>
                            Notifications
                        </span>
                        </div>
                        <div className="dropdown-menu-content overlay-scrollbar scrollbar-hover">
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-gift" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-tasks" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-gift" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-tasks" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-gift" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-tasks" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-gift" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-tasks" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-gift" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-tasks" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-gift" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        <li className="dropdown-menu-item">
                            <a href="#" className="dropdown-menu-link">
                            <div>
                                <i className="fas fa-tasks" />
                            </div>
                            <span>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br />
                                <span>
                                15/07/2020
                                </span>
                            </span>
                            </a>
                        </li>
                        </div>
                        <div className="dropdown-menu-footer">
                        <span>
                            View all notifications
                        </span>
                        </div>
                    </ul>
                    </li>
                    <li className="nav-item avt-wrapper">
                        {this.renderitem()}
                    </li>
                </ul>
                {/* end nav right */}
                </div>
        )
    }
}
export default Header;