import React, { Component } from 'react';
import './My.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Contact extends Component {
    render() {
        return (
            <div>
                <h1 className="bg-primary">this is Contact page</h1>
                
                <input className="mystyle" placeholder="Email" name="email"></input><br></br>
                <input className="mystyle" placeholder="Number" name="number"></input><br></br>
                <input className="mystyleS" type="submit" value="Submit"></input>

                
            </div>
        );
    }
}

export default Contact;