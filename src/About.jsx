import React, { Component } from 'react';
import web from "../src/images/img2.jpg";
import Common from './Common';

export default class About extends Component {
    render() {
        return (
            <>
           <Common name='Welcome To About Page' imgsrc={web} visitbtn='/contact'btnname='Contact Now' />
         
            </>
        )
    }
}
