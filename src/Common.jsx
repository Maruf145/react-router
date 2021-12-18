import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img1.jpg";

export default class Common extends Component {
    render() {
        return (
            <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                 <div className="row">


                    <div className="col-10 mx-auto">
                    <div className="row">

                        <div className="col-md-6 pt-5 pt-lg-0 mt-5 order-2 order-lg-1">

                            <h1>
                                {this.props.name} <strong className="brand-name">DevMaruf</strong>
                            </h1>

                            <h5 className="my-3">
                                We are the team of talented developer making website
                            </h5>
                            <div className="mt-5">
                                <NavLink className="btn-get-started" to={this.props.visitbtn}>{this.props.btnname}</NavLink>
                            </div>

                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={this.props.imgsrc} className="vert-move rounded-circle img-fluid"/>
                        </div>
                        </div>
                    </div>
                   
                </div>

             </div>
            </section>
            </>
        )
    }
}
