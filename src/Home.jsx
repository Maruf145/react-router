import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img1.jpg";
import Common from './Common';


export default class Home extends Component {
    render() {
        return (
            <>
           <Common name='Grow Your Business With' imgsrc={web} visitbtn='/about'btnname='Get Started'/>
            </>
        )
    }
}
