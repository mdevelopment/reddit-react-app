import React, {Component} from 'react';
import {BrowserRouter, Route,browserHistory, Router, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {reactLocalStorage} from 'reactjs-localstorage';





class Post extends Component {
  constructor(props) {
    super(props);
}

componentDidMount() {}

timeDiff(d) {
return moment(d*1000).fromNow();
}
setinitialLoad(val) {
  this.setState({ initialLoad: val });
}

setAFav() {
   var str;
   var matchFound = "";//THS VAR IS USED TO DISABLE POSTS THAT HAVE ALREADY BEEN FAVORITED.
   var postId = this.props.post.id;
   var newArray = JSON.parse(localStorage.getItem("favorites"));

  if(localStorage.length == 0) {
      //console.log("Initial Load: "+ localStorage.length);
      //console.log(this.props.post);
      var newItem = [this.props.post];
      var str = JSON.stringify(newItem);
      localStorage.setItem("favorites", str);
      //console.log(str);

  }
  else if (localStorage.length > 0) {
  var newItem2 = this.props.post;
  newArray.forEach(function(item,index){
	//console.log(item.id);
  if(item.id == postId) {
    matchFound = "Match";
    }
    
  });
  ///////////////////////////////
   if (matchFound !== "Match") {
      newArray.push(newItem2);
      var str = JSON.stringify(newArray);
      localStorage.setItem("favorites", str);
    //  console.log('newArray collection is : ' + newArray);
  } else  {
    //  console.log(newItem2 + ' already exists in the favorites collection.');
  }
  }
}

render () {


    var posts = this.props.user;
    var imageURL = this.props.post.url;
    var mydate = this.props.post.created;
    var myAuthor = this.props.post.author;
    var thescore = this.props.post.score;
    var theTitle = this.props.post.title;
    if(theTitle.length > 80) theTitle = theTitle.substring(0,80)+"...";

return (


      <div>
      <div className = "panel">
      <div className="myImage">
        <img src={imageURL} width="100%" className="theImage"/></div>
        <div>  { this.props.name !== "favorites" ? <div onClick={() => this.setAFav()} className="redHeart"  ><img src="../../images/favorite-heart-button.svg" width="15" height="15"/></div> : null }</div>
        <div className="panelbottom">
        <div className="fas fa-user user"/>
        <div className="Author">{myAuthor} &middot;</div><div className="fas fa-clock myClock" width="20px" height="20px"></div>
        <div className="theDate">{this.timeDiff(mydate)}  &middot;</div>
        <div className="fas fa-bolt mybolt"/>
        <div className ="thescore">{thescore}</div>
        </div>
      <div className="Title">{theTitle}</div>
      {/*<hr className="postHr"/>*/}
      </div>
      </div>
  )}
};

export default Post;
