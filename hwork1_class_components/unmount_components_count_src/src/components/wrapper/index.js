import { Component } from "react";
import close from "../../assets/xmark-solid.svg";
class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  handleToggle = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevProps.isVisible !== this.state.isVisible) {
      this.props.unmountingCount(prevState.uniquekey);
    }
  }

  render() {
    return (
      <>
        <div className="wrapper">
          {this.state.isVisible ? (
            <>
              <div className="card">
                {this.props.title}
                <img onClick={this.handleToggle} className="icon" src={close} />
              </div>
            </>
          ) : (
            <>
              <div className="card">
                <button onClick={this.handleToggle}> Show </button>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Wrapper;
