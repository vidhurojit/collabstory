import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class AddExistSnip extends Component {
  constructor() {
    super();
    this.state = {
      story: '',
      author:'',
      content:'',
      published_date:'',
	  snips:[]
    };
  }
    componentDidMount() {
    axios
     // .get('http://localhost:8082/api/all')
      .get('/api/all')
      .then(res => {
        this.setState({
          snips:res.data
		  
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
	
      })
	  
	  
	 
  
  };


  onChange = e => {
	  console.log(e.target.value)
	    console.log(e.target.name)
			
		
    this.setState({ [e.target.name]: e.target.value });
	
  };
  
 

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    const data = {
      story: this.state.story,
      author: this.state.author,
	  content: this.state.content,
      published_date: this.state.published_date,

    };

    axios
      //.post('http://localhost:8082/api/', data)
      .post('/api/', data)
      .then(res => {
        this.setState({
		story: '',
		author:'',
		content:'',
		published_date:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateBook!");
      })
  };

  render() {  
	   const snips = removeDuplicates(this.state.snips);
    console.log("PrintBook: " + snips);
    return (
      <div className="CreateBook">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Story List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add A Snippet</h1>
              <p className="lead text-center">
                  Join Hands to Create a Saga
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <select  className='form-control' name='story' value={this.state.story} onChange={this.onChange}>
				  <option>Select one of our stories</option>
				  {snips.map((item)=> <option key={item.story} value={item.story}>{item.story}</option>)}
                  </select>
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <textarea
                    placeholder='Type your story'
                    name='content' rows="6"
                    className='form-control'
                    value={this.state.content}
                    onChange={this.onChange}>
                 < /textarea>
                </div>

                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddExistSnip;

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
            //console.log(newArray); 
			return newArray;
        } 