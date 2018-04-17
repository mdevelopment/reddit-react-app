import React, {Component} from 'react';
import Post from './Post';
import  '../../styles/Tabs.css';
import {reactLocalStorage} from 'reactjs-localstorage';
//
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
          posts: [],
      };
}

componentDidMount() {
  this.getReddit();
  this.props.setActiveState('aTab');
}

getReddit() {
  fetch('https://www.reddit.com/r/analog/top/.json')
  .then(results => {
  return results.json();
  }).then (data => {
    let coreposts = data;
    let posts = data.data.children;
    this.setState({posts:posts});
    //console.log("STATE: "+ this.state.posts)
    })
}

render() {

  //console.log("WHERE ARE THE POSTS: "+ JSON.stringify(this.state.posts));
  let myposts = this.state.posts;
  const Posts =    Object.keys(this.state.posts).map(function(key) {
  var userId= myposts[key].data.id;
  var user = myposts[key].data;
  {/*<div>{ console.log(userId)}</div>*/}
  return  <Post key={userId} post={user} myIndex={key}   />
})

return(
      <div>
    <div className= "postsContainer">
        {Posts}
    </div>
      </div>
  )}
};

export default List;
