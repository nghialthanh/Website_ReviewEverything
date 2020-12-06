import React, {Component} from 'react';
import {Link} from "react-router-dom";
class ListMenu extends Component {
    render() {       
        return(
            <div className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-item">
                    <Link className="sidebar-nav-link" to="/Phim" onClick={()=>this.props.handleShowBody2(1)}>
                        <div>
                        <i className="fas fa-film" />
                        </div>
                        <span>
                        Phim
                        </span>
                    </Link>
                    </li>
                    <li className="sidebar-nav-item">
                    <Link className="sidebar-nav-link" to="/Sach-Truyen" onClick={()=>this.props.handleShowBody2(2)}>
                        <div>
                        <i className="fas fa-book"/>
                        </div>
                        <span>Sách - Truyện</span>
                    </Link>
                    </li>
                    <li className="sidebar-nav-item">
                    <Link className="sidebar-nav-link" to="/Game" onClick={()=>this.props.handleShowBody2(3)}> 
                        <div>
                        <i className="fas fa-gamepad" />
                        </div>
                        <span>Game</span>
                    </Link>
                    </li>
                    <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                        <i className="fas fa-tshirt" />
                        </div>
                        <span>Thời trang</span>
                    </a>
                    </li>
                    <li className="sidebar-nav-item">
                    <a href="#" className="sidebar-nav-link">
                        <div>
                        <i className="fas fa-share-square" />
                        </div>
                        <span>Khác</span>
                    </a>
                    </li>
                    <li className="sidebar-nav-item" id="menulogo">
                    <div>
                        <img src="/assets/AT-pro-logo.png" alt="ATPro logo" className="logo logo-light" />
                    </div>
                    </li>
                </ul>
                
        </div>
        )
    }
}
export default ListMenu;