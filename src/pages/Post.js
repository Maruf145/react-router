import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {


    constructor(){


        super();

        this.state={

            postData:"",
            postResult:""
        }
    }

    onChangeHendler=(event)=>{

        var mydata=event.target.value;
        this.setState({postData:mydata})
     }

     onclickHendler=()=>{

        axios.post('http://marufxyz.byethost32.com/test.php',this.state.postData)

        .then(response=>{

         this.setState({postResult:response.data})
         alert(this.state.postResult)
        })
        .catch(error=>{

         alert ("something is wrong")
        })
     }

    render() {

        return (
            <div>

                <input onChange={this.onChangeHendler} type="text"/><br></br>
                <br></br>

                <button onClick={this.onclickHendler}>Post</button>
                
            </div>
        );
    }
}

export default Post;