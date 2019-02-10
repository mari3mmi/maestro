import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Home.scss';


class Home extends Component {
    render() {
      return (
        <div className="Home">
        <span> What are you? </span> 
          <div className="buttons"> 
        <Link to="/master">
          <Button className="button" content='Master' color='red'  src=''/>
          </Link>
          <Link to="/client">
          <Button className="button" content='Client' color='blue' />
          </Link>
          </div>
        </div>
      );
    }
  }
  
  export default Home;