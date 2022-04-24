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

  handleThemeToggle = (theme) => {    
    this.setState({theme});
    // this.state.theme === 'light' ? 
    //   this.setState({theme: 'dark'}) : 
    //   this.setState({theme: 'light'});
    this.handleBackground(theme);
  }

  handleBackground = (theme) => {
    let body = document.getElementsByTagName('body')[0];
    body.setAttribute('class', theme);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home theme={this.state.theme} onThemeChange={(e)=>this.handleThemeToggle(e)}/>
          </Route>
        </Switch>
      </Router>  
    );  
  }
  
}

export default App;
