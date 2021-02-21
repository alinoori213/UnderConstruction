import React from 'react';
import { Helmet } from 'react-helmet'

export default class UnderConstruction extends React.Component {
   render(){
       return(
           <div className="background">

               <Helmet>
               <title>UnderConstruction</title>
               </Helmet>
               <h1>We are working on this page</h1>          
    
               
           </div>
       )
   }
}