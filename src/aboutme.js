import React from 'react';
import {Grid,Cell } from 'react-mdl';

class About extends React.Component {
    render() {
        return (
                    <div style={{width:'100%',margin :'auto'}}>
                        <Grid className="about-grid">
                            <Cell col={12}>
                                <div className="animated rollIn delay-1s duration-10s"> 
                                    <h1>About Me </h1>
                                <p className="aboutp1"> I am a Full Stack Developer who enjoys solving problems and helping other people to solve their problems. I have penchant for learning innovation and technology. My motto is "to believe in yourself and never give up". I like setting myself ambitious goals. Each day brings its own challenges and every project pushes me to find somethingmore within myself to give. I always aim a little higher than i did last tiem to ensure that i keep improving. I am highly collaborative and I enjoy working in a team environment.  </p>

                                     
                                </div>
                                <div className="animated rollIn delay-2s duration-10s" > 
                                    <h1>Skills</h1>
                                    <Grid className="aboutgrid1">
          <Cell col={4} className="aboutcell animated fadeIn delay-4s duration-10s" style={{background:'#00dbde'}}>
            <h4>Technical</h4>
            <p>  Python</p>
                                          <p> Flask</p>
                                          <p> ReactJs</p>
                                          <p>  TDD</p>
                                          <p> Object-Oriented Programming</p>
                                          <p> SqlAlchemy</p>
                                          <p> OpenpyXl</p>
           
           </Cell>
          <Cell col={4} className="aboutcell animated fadeIn delay-4s duration-10s" style={{background:'#00dbde',border:'1px'}}><h4>Non-Technical</h4>
          <p> Excellent written and communication </p>
                                          <p> Pair Programming</p>
                                          <p>  Agile development </p>
                                          <p>  Detail and goal-oriented </p>
          </Cell>  
          <div className=" animated fadeIn delay-5s duration-10s"> 
                                    <h1>Interest</h1>
                                    <div className="aboutp">
<iframe src="https://giphy.com/embed/xT9DPzhNGA8MKjxwFG" width="100" height="100" frameBorder="0" className="giphy-embed" allowFullScreen title="Reading"></iframe> <h6>Reading</h6><iframe src="https://giphy.com/embed/lqSDx8SI1916ysr4eq" width="100" height="100" frameBorder="0" className="giphy-embed" allowFullScreen title="Music"></iframe><h6>Music</h6><iframe src="https://giphy.com/embed/b5Hcaz7EPz26I" width="100" height="100" frameBorder="0" className="giphy-embed" allowFullScreen title="Cooking"></iframe><h6>Cooking</h6></div>
          
          
           </Grid>
         
                                   
                                   
                                   
                                   
                                    
                                    
                                     
                                     
                                
                                </div>
                            </Cell>
                        </Grid>
                    </div>
            
        );
    }
} 
export default About;