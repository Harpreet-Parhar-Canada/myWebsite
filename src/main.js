import React from 'react';
import {Grid,Cell } from 'react-mdl';
import Tech from './tech';
import Icon from 'react-icons-kit';
import {linkedin2} from 'react-icons-kit/icomoon/linkedin2'
import {github} from 'react-icons-kit/icomoon/github'
import {mail2} from 'react-icons-kit/icomoon/mail2'

class Main extends React.Component {

     
    render() {
      
        return (
            <div style={{margin :'auto'}} className="main-body">                
                <Tech/>
                    <div className="banner">                         
                            <Grid className="aboutgrid">
                                <Cell col={2}> <a href = "https://www.linkedin.com/in/harpreet-kaur-parhar/" target="_blank" rel="noopener noreferrer"><Icon icon={linkedin2} size={32} id="link1"/></a><h6>LinkedIn</h6></Cell>
                                    <Cell col={2}><a href ="mailto:parhar994@gmail.com ?" ><Icon icon={mail2} size={32}  id="link2"/></a><h6>parhar994@gmail.com</h6></Cell>
                                        <Cell col={2}> <a href ="https://github.com/Harpreet-Parhar-Canada" target="_blank" rel="noopener noreferrer" ><Icon icon={github} size={32} id="link3"/></a><h6>Github</h6></Cell>
                            </Grid>                                                      
                    </div>
            </div>
        );
    }
} 
export default Main;