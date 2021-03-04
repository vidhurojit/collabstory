import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class AddSnip extends Component {
  constructor() {
    super();
    this.state = {
      story: '',
      author:'',
      content:'',
      published_date:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      story: this.state.story,
      author: this.state.author,
	  content: this.state.content,
      published_date: this.state.published_date,

    };

    axios
    // .post('http://localhost:8082/api/', data)
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
              <h1 className="display-4 text-center">Add A Story</h1>
              <p className="lead text-center">
                   Create a Saga
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of Story'
                    name='story'
                    className='form-control'
                    value={this.state.story}
                    onChange={this.onChange}
                  />
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
                    name='content'
					rows="6"
                    className='form-control'
                    value={this.state.content}
                    onChange={this.onChange}>
                  </textarea>
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

export default AddSnip;