import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Story from "./Story";


class ShowStoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snips: []
    };
  }

  componentDidMount() {
    axios
     // .get('http://localhost:8082/api/all')
      .get('/api/all')
      .then(res => {
        this.setState({
          snips: res.data
		 
        })
      })
      .catch(err =>{
        console.log('Error from ShowStoryList');
      })
  };


  render() {
    const snips = this.state.snips;
    console.log("PrintSnip: " + snips);
    let storyList;

    if(!snips) {
      storyList = "there is no snip record!";
	  console.log("no snips");
    } else {
		var uniqueSnips=removeDuplicates(snips);
      storyList = uniqueSnips.map((item,k) =>
     
        <Story item={item} key={k}/>
	 
	  
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Our Stories</h2>
            </div>

            <div className="col-md-11">
              <Link to="/add-snip" className=" add btn btn-outline-warning float-right">
                + Add New Story
              </Link>
              
           
              <Link to="/add-exist-snip" className=" add btn btn-outline-warning float-right">
                + Add New Snip
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
              {storyList}  
          </div>
        </div>
      </div>
    );
  }
}

export default ShowStoryList;
function removeDuplicates(snips) { 
      
            // Create an array of objects 
           
              
            // Display the list of array objects 
             
      
            // Declare a new array 
            let newArray = []; 
              
            // Declare an empty object 
            let uniqueObject = {}; 
              
            // Loop for the array elements 
            for (let i in snips) { 
      
                // Extract the title 
              var  objTitle = snips[i]['story']; 
      
                // Use the title as the index 
                uniqueObject[objTitle] =snips[i]; 
            } 
              
            // Loop to push unique object into array 
            for (var i in uniqueObject) { 
                newArray.push(uniqueObject[i]); 
            } 
              
            // Display the unique objects 
            console.log(newArray); 
			return newArray;
        } 