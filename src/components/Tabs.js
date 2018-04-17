import React from 'react';
// import {findDOMNode} from 'react-dom';
import { createBrowserHistory } from 'history';



const browserHistory = createBrowserHistory();

//const transitionTime = 200;
//const transitionStyle = `left ${transitionTime}ms, right ${transitionTime}ms`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: {},
    };
    this.els = {};



  }
  componentDidMount() {
    this.getSizes();
}

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children && prevProps.active !== this.props.active) {
      this.getSizes();

    }
  }

  getSizes() {
    const rootBounds = this.root.getBoundingClientRect();
    const sizes = {};
    Object.keys(this.els).forEach((key) => {
      const el = this.els[key];
      const bounds = el.getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      sizes[key] = {left, right};
    });

    this.setState({sizes});
    return sizes;
  }



  render() {
    //console.log(JSON.stringify(this.state, null, 2));




    return (
      <div>

      <div className="Tabs" ref={el => this.root = el} >

        {React.Children.map(this.props.children, (child, i) => {
          let className = `Tabs__Tab`;
          if (child.key === this.props.active) {
            className = `${className} Tabs__Tab--active`;
            //console.log("From loop: " + child.key+"  : "+  this.props.active);
            //console.log("Seeking location: "+ myLocation)
            //console.log("from url: "+ this.props.changeState())


          }
          return (
            <div className={className} onClick={() => { this.props.onChange(child.key)}} ref={el => this.els[child.key] = el}  >
              {child}
            </div>
          );
        })}
      </div>
      </div>
    );
  }


}

export default Tabs;
