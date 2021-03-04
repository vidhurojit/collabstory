import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Story = (props) => {
    const  story  = props.item;

    return(
        <div className="card-container">
            
            <div className="desc col-md-4 col-sm-1 m-auto">
                <h2>
                   
                   <Link to={`/content/${story.story}`}>   { story.story }</Link>
                   
                </h2>

            </div>
        </div>
    )
};

export default Story;