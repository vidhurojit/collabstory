import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Story from "./Story";


class Content extends Component {
 

  render() {


    return (
	<div className="CreateBook container-fluid">
        <div className="container">
          <div className="row">
				<div className="col-md-8 m-auto">
	<div>
	<div class=" border-warning border-bottom">
     <h1 class="story-title text-warning" >Welcome to Story Saga</h1> 
	 </div>
	 
	  <div className="col-md-11">
	          
			 
              <Link to="/" className="add btn btn-outline-warning float-right">
                  Show Story List
              </Link>
           
			  
			  
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
	<div className="story">
            
            <div className="desc-story">		
         

	<h2 class="desc">A Collaborative Story Writing Platform</h2>
	<h3>Love Writing ???</h3>
	<p>
	Here is you chance of showcasing your writing skills without being judged.  Story Saga is a platform for budding writers.
	Browse through our extensive collection of stories.
	You can choose any story and add your own twist to it. Just click <span class="text-warning">Add New Snip</span> and start writing.
	Want to write your own saga. Just click on <span class="text-warning"> Add Story</span> and begin your own journey
	</p>
	<p>
	Every story is a mystery here. Who knows what the other person is thinking. Who knows your comedy might turn into a spine chilling thriller. Your life instance might end up 
	contributing to someone else's life story
	</p>
	
	<p>So start writing and create mystery. Cheers!!</p>
         
		</div> 
        </div>
		</div>
		</div> 
        </div>
		</div>
		</div>
    );
  }
}

export default Content;

