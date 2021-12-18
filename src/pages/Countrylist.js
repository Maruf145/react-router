import React, { Component } from 'react';
import axios from 'axios';
import './My.scss';
class Countrylist extends Component {

    constructor(){

        super()

        this.state={

            mydata:[]

            
        }

 
    }


    componentDidMount(){

        axios.get('https://restcountries.eu/rest/v2/')
        .then(response=>{

         this.setState({mydata:response.data})

        })
        .catch(error=>{


            console.log(error)



        })



    }


    render() {

        const myList=this.state.mydata
        const countryName=myList.map((mylist)=>{

            return <option>{mylist.name}</option>
        })
        
        return(
            <div>
                <select className="mystyle">  {countryName}</select>
              
            </div>
        )
    }
}

export default Countrylist;