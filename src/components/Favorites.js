import React, {Component} from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import Post from './Post';
import  '../../styles/Tabs.css';

class Favorites extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setFavsValue();
    this.props.setActiveState('bTab');
  };

  render () {

    var myFavs = JSON.parse(localStorage.getItem('favorites'));
    var myValue = localStorage.length == 0 ? 0 : myValue = myFavs.length;
    //console.log("MYFAVS HERE: "+ myFavs);
    if (myFavs == null) {
      const Posts = <div > <p className="noFavsStyle">NO FAVORITES YET.</p></div>;
        return Posts;
    }

    const  Posts =  myFavs.map((post, i) => {
        //console.log(this.state.favs[i].id)
         return  <Post key={post.id} postIndex={i} post={post} allfavs={myFavs} name="favorites" />
    })

  return (

    <div>
          <div className= "postsContainer">
             {Posts}
          </div>
    </div>

     );
  };
}
export default Favorites;
