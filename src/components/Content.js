import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Story from "./Story";


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snips: [],
	  story_name:this.props.match.params.story
    };
  }

  componentDidMount() {
	  console.log(this.props.match.params.story)
	  
    axios
      .get("/api/story/"+this.state.story_name)
    //.get(`http://localhost:8082/api/story/${this.props.match.params.story}`)
      .then(res => {
        this.setState({
          snips: res.data
		 
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const snips = this.state.snips;
    console.log("PrintBook: " + snips);
    let contentList;

    if(!snips) {
      contentList = "there is no snip record!";
	  console.log("no sips");
    } else {
		console.log(snips)
		snips.sort(comp);
		console.log(snips)
      contentList = snips.map((item,k) =>
     
       <p>{item.content}</p>
	 
	  
      );
	  contentList.sort();
    }

    return (
	<div className="CreateBook container-fluid">
        <div className="container">
          <div className="row">
				<div className="col-md-8 m-auto">
	<div>
	<div class=" border-warning border-bottom">
     <h1 class="story-title text-warning">{this.props.match.params.story}</h1> 
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
         
              {contentList}
         
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

function comp(a,b) {
	console.log(a.publish_date);
	console.log(b.publish_date);
	//return a.publish_date.getTime()-b.publish_date
    return new Date(a.publish_date).getTime() - new Date(b.publish_date).getTime();
}
