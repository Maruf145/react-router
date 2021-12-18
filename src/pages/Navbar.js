import React, { Component } from 'react';
import './My.scss'

class Navbar extends Component {
    render() {
        return (

          <div className="header">
            <img className="rounded-circle" id="image" src="https://img.freepik.com/free-psd/logo-mockup-grey-wall_35913-2122.jpg?size=626&ext=jpg"></img>
            
            <ul id="ul">
              <li className="li">Home</li>

              <li className="li">About</li>

              <li className="li">Contact</li>

            </ul>
              
          </div>
        );
    }
}

export default Navbar;