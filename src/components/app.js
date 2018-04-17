//import axios from 'axios';
import React from 'react';
//import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import 'whatwg-fetch';
import  '../../styles/Tabs.css';
import List from'./List';
import Favorites from'./Favorites';
import {BrowserRouter, Route, Switch, Link, HashRouter} from 'react-router-dom';
import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory
} from 'history';




const browserHistory = createBrowserHistory();
//const history = createHashHistory();
//const  url="https://www.reddit.com/r/analog/top/.json";
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {active: this.getActiveStateFromURL(),
    numOfFavs: this.setNumFavs
    //posts: null
  };
  //
  this.setNumFavs = this.setNumFavs.bind(this);
  this.getActiveStateFromURL = this.getActiveStateFromURL.bind(this);
  this.setActiveState = this.setActiveState.bind(this);
  }
  //END CONTSTRUCTOR
  componentDidMount() {
  this.setNumFavs();
  }

  getActiveStateFromURL() {
    // console.log("Calling set/get state");
      var whichTab = browserHistory.location.pathname == "/" ? "aTab" : "bTab" ;
      return whichTab;
  }

  setActiveState(myState) {
   //console.log("Calling set active state: "+ myState);
  this.setState({active:myState})
  }

//
setNumFavs() {
  var myFavs = JSON.parse(localStorage.getItem('favorites'));
  var myValue = localStorage.length == 0 ? 0 : myValue = myFavs.length;
  //console.log("set tbe num of favs: "+ myValue);
  this.setState({numOfFavs: myValue});
  if(myValue>0){return myValue;} else {return 0};
}

//NONE OF THE REDDIT ICONS ON FONT AWESOME WORKED FOR ME
swapReddits() {
}


render() {

    const content = {
      aTab: 'Tab A',
      bTab: 'Tab B',
    //  cTab: 'Tab C',
    //THIS MENU SYSTEM IS QUASI-DYNAMIC
    };

    return (
      <div className="myContainer" >

        <Tabs  active={this.state.active} onChange={active => this.setState({active})}  >

          <div key="aTab" >
          <Link to='/' className="LinkBtn" ><div className="taba"><img src="../../images/reddit-alien.svg" width="20" height="20" className="reddit" /><div className="analog">/r/analog</div></div></Link>
          </div>

          <div key="bTab" className="tabb"  >
          <Link to='/favorites' className="LinkBtn" ><div  className="favBtnArea"> <div className="fas fa-heart heart" />favorites<div className="numFavs">( {this.state.numOfFavs} )</div></div></Link>
          </div>

        </Tabs>

        <div className="myBorder"></div>

      <Switch>
      <Route exact path='/' render={(props) => <List {...props} setActiveState = {this.setActiveState} />}   />
      <Route path='/favorites' render={(props) => <Favorites {...props}  setFavsValue={this.setNumFavs} setActiveState = {this.setActiveState}  />} />
      </Switch>

      </div>
    );
  }
};
export default App;
