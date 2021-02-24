import React from 'react';
import Countdown from './Countdown'
import { Helmet } from 'react-helmet'
import '../../src/App.css';
import {Logo} from './Logo'
import {Title} from './Title'
import {Description} from './Description'
import logo from '../images/gear-with-holes.svg'

export default class UnderConstruction extends React.Component {
    state = {
        countdown:{
            futureDate:" 2021-03-21 00:00:00 "
        },
        logo: {
            alt:"Spining Gear",
            src:logo,

        },
        title:{
            text: "Coming Soon !!"
        },

        description:{
            text:"ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
        }

    }
   render(){
       const {
           countdown,
           logo,
           title,
           description,
       }=this.state;
       return(
           <div className="background">

               <Helmet>
               <title>UnderConstruction</title>
               </Helmet>
               <Countdown futureDate={countdown.futureDate}></Countdown>
               <Logo alt={logo.alt} src={logo.src}/>
               <Title text={title.text}/>
               <Description text={description.text}/>
               {/* <h1>We are working on this page</h1> */}
                         
    
               
           </div>
       )
   }
}