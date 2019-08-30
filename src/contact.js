import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent,Chip } from 'react-mdl';
import Image0 from './assets/Image0.jpg';
import './App.css';
import Particles from 'react-particles-js';
import Radium from 'radium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone ,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import{FaDownload} from 'react-icons/fa'
import jsPDF from 'jspdf';
import axios from 'axios'






class Contact extends Component {
  constructor() {
          super();
          this.state = {imgData:" ",};
          
          this.downloadFile = this.downloadFile.bind(this);
          
  }
  componentDidMount() {
    axios('https://my-resume-image-data.herokuapp.com/')
    .then(res =>{
      this.setState({imgData:res.data});
       return (res.data);})
    .catch(err =>{console.log(err)});
    // fetch('http://18.206.100.169/')
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({imgData:data});
    //   console.log(data) // Prints result from `response.json()` in getRequest
    // })
    // .catch(error => console.error(error))
  }
  downloadFile() {
   

   this.imageDataBig=this.state.imgData;
   const Image= this.imageDataBig;
    const pdf = new jsPDF();
    pdf.addImage(Image,'jpg', 0, 0,200,300);
    pdf.save('hKPB.pdf');
    }
   
  
 mailTo(){
  window.location.href = "mailto:parhar994@gmail.com";
}

  

 
  
  render() {
    const paraMeter = {
      particles: {
        number: {
          value:150,
            density:{
              enable:true,
                value_area:800,
              
          }
        }
      }
}
    return(
      
      
       <div className="contact-body">
          
        
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Harpreet K Parhar</h2>
            <img
              src={Image0}
           
              style={{height:'300px',width:'50%'}}
               alt ="linkedin"/>
           </Cell>
          <Cell col={6}>
          <h2>Contact Me</h2>
            <hr/>
            
            <div className="contact-list">
              <List style={{marginLeft:'10%',color:'black',textAlign:'left',width:'100%',fontWeight:'bold'}}>
                <ListItem >
                
                  <ListItemContent style={{fontSize: '15px',margin:'auto',fontWeight:'bold'}}>
                  <FontAwesomeIcon icon={faPhone} className="iconColor animated swing delay-1s duration-60s"/>-(587)-438-8046
                  </ListItemContent>
                  
                </ListItem>
            
                <ListItem>
               
                  <ListItemContent style={{margin:'auto',fontSize: '15px',width:'50%',fontWeight:'bold'}}>
                  <FontAwesomeIcon icon={faEnvelope} className="iconColor animated heartBeat delay-3s duration-60s" onClick={this.mailTo}/>-parhar994@gmail.com
                  </ListItemContent>
                  
                </ListItem>
                <ListItem>
                  
                  <Chip onClick={this.downloadFile} style={{fontWeight:'bold'}}className="chipShawdow"><FaDownload/> Resume</Chip>
                 
                                 </ListItem>
              </List>
               </div>
          </Cell>
        </Grid>
          <Particles className="particles" params={paraMeter}/>
        </div> 
      
    
    )
  }
}
export default Radium(Contact);