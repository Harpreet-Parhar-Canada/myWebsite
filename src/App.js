import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Home from './home';
import {Link} from 'react-router-dom';
import './App.css';
import "animate.css";

class App extends React.Component {
   componentDidMount () {
    fetch('https://my-resume-image-data.herokuapp.com/')
    .then(response => response.json())
    .then(data => { // Prints result from `response.json()` in getRequest
    })
    .catch(error => console.error(error))
   }
    
render() {
  return (
      <div>
    <div className="demo-big-content">
    <Layout>
        <Header className ="header-color" title="Parhar" scroll >
            <Navigation >
                <Link to="/main">Home</Link>
                <Link to="/resume">Education</Link>
                <Link to="/aboutme">About me</Link> 
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/main">Home </Link>
                <Link to="/resume">Education</Link>
                <Link to="/aboutme">About me</Link> 
                <Link to="/contact">Contact</Link> 
                </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Home/>
        </Content>
    </Layout>
   
</div> 
    
</div> );
}
}

export default App;
                                                                