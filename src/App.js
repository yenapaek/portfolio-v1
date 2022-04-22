import './style/App.css';
import React from "react";
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
      super(props);
      this.handleThemeToggle = this.handleThemeToggle.bind();
      this.state = {
          theme: 'light',
      }
  }

  handleThemeToggle = () => {    
    this.state.theme === 'light' ? 
      this.setState({theme: 'dark'}) : 
      this.setState({theme: 'light'});
  }

  handleBackground = () => {
    let body = document.getElementsByTagName('body')[0];
    this.state.theme === 'dark' ? 
      body.setAttribute('class', 'dark') :
      body.setAttribute('class', 'light');
  }

  render() {
    this.handleBackground();
    
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home theme={this.state.theme} onThemeChange={this.handleThemeToggle}/>
          </Route>
        </Switch>
      </Router>  
    );  
  }
  
}

export default App;
