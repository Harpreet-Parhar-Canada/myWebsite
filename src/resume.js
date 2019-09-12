import React from 'react';
import Education from './education.js';
import { Grid, Cell } from 'react-mdl';
import Experience from './experience';
import Skills from './skills';
 
class Resume extends React.Component {

	
    
    render() {
        return (
            <div>
               
            <Grid>
              {/* <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                  <img
                    src="https://media.licdn.com/dms/image/C5103AQFRy7v260qqSw/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=NTe2-H1qfSaYFhyNmmY3mKvuDmpKe40YdzBkkNcYjM4"
                    style={{height: '250px',border:'solid'}}
                    alt="Cutie Pie1" />
                </div>
                
                <h2 style={{paddingTop: '2em'}}>Harpreet K Parhar</h2>
                <h4 style={{color: 'black'}}>Full Stack Developer</h4>
                {/* <hr style={{borderTop: '3px solid black', width: '50%'}}/>
                <p></p> */}
                {/* <hr style={{borderTop: '3px solid black', width: '50%'}}/> */}
                {/* <h5>Address</h5>
                <p>Calgary, Canada</p>
                <h5>Phone</h5>
                <p>587-438-8046</p>
                <h5>Email</h5>
                <p>parhar994@gmail.com</p>
                <h5>Web</h5>
                <p>harpreetparhar.com</p>
                <hr style={{borderTop: '3px solid black', width: '50%'}}/>
              </Cell> */} 
              <Cell  col={8}>
                <h2>Education</h2>
                 <Education
                  startYear={2019}
                  endYear={2019}
                  schoolName="EvolveU"
                  schoolDescription="Full Stack Developer Porgram"
                   />
                   <Education
                     startYear={2010}
                     endYear={2013}
                     schoolName="LPU"
                     schoolDescription="Masters of Computer Applications"
                      />
                      <Education
                     startYear={2008}
                     endYear={2010}
                     schoolName="D.D Jain College - Panjab University"
                     schoolDescription="Bachelor's of Computer Applications"
                      />
                    <hr style={{borderTop: '3px solid black'}} />
                  <h2>Experience</h2>
                 <Experience
                  startYear={2019}
                  endYear={2019}
                  jobName="EvolveU-Student"
                  jobDescription="Critical thinking, Visual thinking, Team interaction and communication and Agile working environment.
                  Coding languages and frameworks such as HTML, CSS, JavaScript & React.js, Python & Flask , Postgres, TDD, OpenPyXL,Bootstrap,SQLALchemy"
                  />
                  <Experience
                    startYear={2013}
                    endYear={2013}
                    jobName="TCIL-IT (Internship)"
                    jobDescription="Development of a mobile application for scientific unit conversion in Android App in Java"
                    />
                    <Experience
                    startYear={2012}
                    endYear={2012}
                    jobName="NIIT (Summer-Internship)"
                    jobDescription="Development of a web application in ASP.net"
                    />
                  <hr style={{borderTop: '3px solid black'}} />
                  <h2>Awards and Certificates</h2>
                  <Skills
                    skill="ASP.NET, NIIT, India, 2012 " />
                    <Skills
                      skill="Android Development, TCIL-IT, 2013 "/>
                      <Skills
                        skill="Bikablo, Visual Thinking and Communication, EvolveU, 2019 "                        
                        />
                        <Skills
                          skill="1st prize for Student Body President, Everest Public Senior Secondary School, 2007"
                         /> 
                         
              </Cell>
            </Grid>
          </div>
        )
      }
    }

export default Resume;