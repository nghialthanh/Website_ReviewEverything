import React, { Component} from 'react';
import './App.css';
import { useCookies } from 'react-cookie';

import { Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import ListMenu from './components/ListMenu';
import Header from './components/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import { Provider} from 'react-redux';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      stateBody: 1,
      acc: {
        ID: -1,
        username: '',
        password: '',
        chucvu: ''
      }   
    }
    this.handleShowBody2 = this.handleShowBody2.bind(this);
    this.handleAcc = this.handleAcc.bind(this);
    

  } 
  //------------------The Loai Tac Pham -------------------------//
  handleShowBody2 = (value) => {
    this.setState({
      stateBody: value
    })
  }
  handleAcc = (value) => {
   
    if (value==null)
      this.setState({
        acc: {ID: -1}
      })
    else{
      
      this.setState({
        acc: value
      })
    }
  }
  render(){

    return (
        <Switch>
          
          <Route path="/Login" component={() => <Login 
                                                  key={uuidv4()}
                                                  handleAcc={this.handleAcc}
                                                  
                                                />
          }/>
          <Route path="/SignUp" component={() => <SignUp
                                                  key={uuidv4()}
                                                  handleAcc={this.handleAcc}
                                                />
          }/>
          <Route path="/" render={({location}) => <div className="container">
                                                    <Header 
                                                      acc={this.state.acc}
                                                      handleAcc={this.handleAcc}
                                                      location={location} 
                                                    />
                                                    <ListMenu
                                                      handleShowBody2={this.handleShowBody2}
                                                      location={location}
                                                    />
                                                    <Body       
                                                      acc={this.state.acc}
                                                      stateBody={this.state.stateBody}
                                                      location={location}                                              
                                                    />
                                                    
                                                  </div>}
        />
        </Switch>

    );
  }
}

export default App;
