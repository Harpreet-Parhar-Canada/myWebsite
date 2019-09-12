import React ,{useState} from 'react';
import {Grid,Cell } from 'react-mdl';



const Tech = () => {
    
    const arrylist = 'Html | CSS| ReactJs | JS';
    const [skills,setSkills]= useState("Front End Technology "); 
    
    const arrylist1 = 'Python | Flask | CoreJava | Nodejs ';
    const [skills1,setSkills1]= useState("Back End Technology "); 
    
    const arrylist3 = 'SQL | Postgres ';
    const [skills3,setSkills3]= useState("Database"); 
    
    const handleme3 = () => {
              setSkills3(arrylist3); 
            };    
    const handleme = () => {
                setSkills(arrylist); 
            };        
    const handleme1 = () => {
                setSkills1(arrylist1); 
              };
    return (
        <div style={{margin :'auto'}} className="main-body">
        <Grid className="landing-grid">
        <Cell col={4} >
        <h3>Harpreet Parhar</h3>
        <hr/>
                    <div className="image-set">
            
                <p>I am a Full Stack Developer. My motto is "to believe in yourself and never give up". I like setting myself ambitious goals. Each day brings its own challenges and every project pushes me to find somethingmore within myself to give. I always aim a little higher than i did last time to ensure that i keep improving. </p></div>  
                </Cell>
                <Cell col={4} style={{width:'50%',textAlign:'center'}}>
                    <div style={{width: '80%', margin: 'auto'}}>
                                <Grid >
                                    <Cell col={3.2} className="mainCellCircle" onMouseMoveCapture={handleme}><h6>{skills}</h6></Cell>
                                    <Cell col={3.2}className="mainCellCircle" onMouseMoveCapture={handleme1}><h6>{skills1}</h6></Cell>
                                    <Cell col={3.5}className="mainCellCircle"onMouseMoveCapture={handleme3}><h6>{skills3}</h6></Cell>
                                </Grid>
                                <div className="image-set">
             <hr/>
            <p> I enjoy solving problems and helping other people to solve their problems. I have penchant for learning innovation and technology.I am highly collaborative and I enjoy working in a team environment.
            
              </p></div>     
                    </div>


                  
                </Cell>
                
            </Grid>
            
           
        </div>
    );
  }
  export default Tech;