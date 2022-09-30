import { Component } from "react";

class Show extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="showitem">
        <div>{this.props.title} </div>
        <div> card's unmounting count is </div>
        <div>{this.props.count}</div>
      </div>
    );
  }
}

export default Show;
