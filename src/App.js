import React from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Home from './home';
import {Link,BrowserRouter} from 'react-router-dom';
import './App.css';
import "animate.css";

class App extends React.Component {
    
render() {
  return (
      <BrowserRouter>
      <div>
    <div className="demo-big-content">
    <Layout>
        <Header className ="header-color" title="Web developer" scroll>
            <Navigation >
                <Link to="/">Home</Link>
                <Link to="/resume">Education</Link>
                 <Link to="/aboutme">Skills</Link>  
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Harpreet" className ="header-color">
            <Navigation>
                <Link to="/">Home </Link>
                <Link to="/resume">Education</Link>
                <Link to="/aboutme">Skills </Link>  
                <Link to="/contact">Contact</Link> 
                </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Home/>
        </Content>
    </Layout>
   
</div> 
    
</div>
</BrowserRouter> );
}
}

export default App;
                                                                