import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Main from './main';
import About from './aboutme';
import Resume from './resume';
import Contact from './contact';


const Home = () =>(

       <Switch >
        <Route exact path="/" component={Main} ></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/aboutme" component={About}></Route> 
        </Switch>
        
    
   


);
export default Home;
