import React from 'react';
import {animated,Spring} from 'react-spring/renderprops';
import './App.css';




class  Springprac extends React.Component{
    render(){
      return(<div>
    <Spring config={{tension: 2000,mass:5, friction:120,duration: 10000,}}
        
        from={{ opacity: 0 }}
        to={{opacity: 1 }}>
    
           
            
    {props => <animated.div style={props}><p className="spring-header">Hello, </p></animated.div>
}
 
 </Spring>
      
      </div>)}
   

}
export default Springprac;