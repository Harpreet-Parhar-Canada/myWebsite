import React from 'react';
import {Grid,Cell } from 'react-mdl';

class About extends React.Component {
    render() {
        return (
                    <div style={{width:'100%',margin :'auto'}}>
                        <Grid className="about-grid">
                            <Cell col={12}>
                                
                                <div className="animated rollIn delay-2s duration-10s" > 
                                    <h1>Skills</h1>
                                
                                    <Grid className="aboutgrid1">
                                          <Cell col={5} className="aboutcell animated fadeIn delay-4s duration-10s">
                                                <h4>Technical</h4>
                                                    <hr/>
                                                    <p>  Python</p>
                                                    <p> Flask</p>
                                                    <p> ReactJs</p>
                                                    <p>  TDD</p>
                                                    <p> Object-Oriented Programming</p>
                                                    <p> SqlAlchemy</p>
                                                    <p> NodeJS</p>
                                                    <p>Express</p>
                                                    <p> OpenpyXl</p>
                                                    <p> Core Java</p>
                                          </Cell>
                                            <Cell col={5} className="aboutcell animated fadeIn delay-4s duration-10s" ><h4>Non-Technical</h4>
                                                    <hr/>     
                                                        <p> Excellent written and communication </p>
                                                        <p> Pair Programming</p>
                                                        <p>  Agile development </p>
                                                        <p>  Detail and goal-oriented </p>
                                            </Cell> 
             
                                            <br/>
                                <div className="aboutcell animated rollIn delay-1s duration-10s"> 
                                                    <h1>Projects</h1>
                                                                    <p className="aboutp1" style={{textAlign:'center'}}> 
                                                                         Webiste : https://www.harpreetparhar.com/</p>
                                                                        <hr/>
                                                                    <p>
                                                                             Front-End :ReactJS (react-mdl),(react-particles),hooks<br/>
                                                                                Back-End  :NodeJS Express </p>
                                                                        <hr/><p>
                                                                                Domain Name:Google Domains<br/>
                                                                                Deployment:Netlify,Nelify-lambda

                                                                            </p>

                                     
                                </div>
          <div className="aboutp animated fadeIn delay-5s duration-10s" style={{ margin: 'auto',textAlign:"center"}}> 
                                    <h1>Interest</h1>
         <Grid className="aboutgrid">
        <Cell col={3} className='aboutcell'><p>Reading</p></Cell>
        <Cell col={3}className='aboutcell'><p>Listening to Music</p></Cell>
        <Cell col={3}className='aboutcell'><p>Cooking</p></Cell>
        <Cell col={3}className='aboutcell'><p>Computer Programming</p></Cell>
        </Grid>
                                   </div>       
                                       
                                       </Grid>
         
                                     
                                
                                </div>
                            </Cell>
                        </Grid>
                    </div>
            
        );
    }
} 
export default About;