import React from 'react';
import {Grid,Cell } from 'react-mdl';
import Image1 from './assets/Image1.jpg';
import HKPresume from './assets/HKPresume.jpg'
import Springprac from './springprac';
import{FaLinkedinIn,FaEnvelopeOpen} from 'react-icons/fa'



 
class Main extends React.Component {
    openLinkedIn() {
        window.location.href="https://www.linkedin.com/in/harpreet-kaur-parhar/";
         }
    openEmail() {
        window.location.href = "mailto:parhar994@gmail.com";
      }
      openImage() {
        window.location.href = HKPresume;
      }
      
    render() {
        return (
            <div style={{margin :'auto'}} className="main-body">
            <Grid className="landing-grid">
            <Cell col={12}>
                    <Springprac/>
                        <img src={Image1} className="image-set animated bounce delay-5s duration-30s" alt="Cutie Pie"/>
                        <div className="banner"> 
                            <h1>Full Stack Developer</h1>
                            <hr/>
                             <p> HTML | CSS | PYTHON-Flask | REACT JS | JAVASCRIPT | POSTGRES 
                                 <br/><br/>
                                 <FaLinkedinIn onClick={this.openLinkedIn}/> | <FaEnvelopeOpen onClick={this.openEmail}/> 
                            </p>
                                           
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
} 
export default Main