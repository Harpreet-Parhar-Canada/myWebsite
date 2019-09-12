import React from 'react';
import {Grid,Cell } from 'react-mdl';
import Tech from './tech';
import Icon from 'react-icons-kit';
import {linkedin2} from 'react-icons-kit/icomoon/linkedin2'
import {github} from 'react-icons-kit/icomoon/github'
import {mail2} from 'react-icons-kit/icomoon/mail2'

class Main extends React.Component {
   openLinkedIn() {
        window.location.href="https://www.linkedin.com/in/harpreet-kaur-parhar/";
    }
    openEmail() {
        window.location.href = "mailto:parhar994@gmail.com";
    }
    openGithub() {
        window.location.href="https://github.com/Harpreet-Parhar-Canada";
    }
     
    render() {
      
        return (
            <div style={{margin :'auto'}} className="main-body">                
                <Tech/>
                    <div className="banner">                         
                            <Grid className="aboutgrid">
                                <Cell col={2}><Icon icon={linkedin2} size={32} onClick={this.openLinkedIn} id="link1"/><h6>LinkedIn</h6></Cell>
                                    <Cell col={2}><Icon icon={mail2} size={32} onClick={this.openEmail} id="link2"/><h6>parhar994@gmail.com</h6></Cell>
                                        <Cell col={2}><Icon icon={github} size={32} onClick={this.openGithub} id="link3"/><h6>Github</h6></Cell>
                            </Grid>                                                      
                    </div>
            </div>
        );
    }
} 
export default Main;