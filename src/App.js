import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {

  NavLink,
  HashRouter
} from "react-router-dom";
import AddSnip from './components/AddSnip';
import ShowStoryList from './components/ShowStoryList';
//import ShowBookDetails from './components/ShowBookDetails';
//import UpdateBookInfo from './components/UpdateBookInfo';
import Story from './components/Story';
import Content from './components/Content';
import AddExistSnip from './components/AddExistSnip';
import Working from './components/Working';


class App extends Component {
  render() {
    return (
	
      <Router>
        <div>
		 <h1>Story Saga</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">How it Works</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
          <Route exact path='/' component={ShowStoryList} />
		   <Route exact path='/add-snip' component={AddSnip} />
		   <Route exact path='/story' component={Story} />
		   <Route exact path='/content/:story' component={Content} />
		   <Route exact path='/add-exist-snip' component={AddExistSnip} />
		    <Route exact path='/stuff' component={Working} />
		  <div>
         

        </div>
         
        </div>
      </Router>
    );
  }
}

export default App;