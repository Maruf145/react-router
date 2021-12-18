import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img3.jpg";

export default class Card extends Component {
    render() {
        return (
            <>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                        <img src={this.props.imgsrc} className="card-img-top" alt={this.props.imgsrc}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                        </div>
                        </div>
                    </div>      
                
    </>
                 
        )
    }
}
