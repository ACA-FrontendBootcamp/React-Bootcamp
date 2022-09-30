import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isDisableDecrease: true,
      isDisableIncrease: false,
      min: 0,
      step: 1,
      max: "",
    };
  }

  handleIncrease = () => {
    if (this.state.max == "") {
      this.setState({
        count: this.state.count + this.state.step,
      });

      if (this.state.count >= this.state.min) {
        this.setState({
          isDisableDecrease: false,
        });
      }
    } else if (this.state.max !== "") {
      if (this.state.count >= this.state.min) {
        this.setState({
          isDisableDecrease: false,
        });
      }

      if (this.state.count + 2 * this.state.step > this.state.max) {
        this.setState({
          count: this.state.count + this.state.step,
          isDisableIncrease: true,
        });
      } else if (this.state.count < this.state.max) {
        this.setState({
          count: this.state.count + this.state.step,
          isDisableIncrease: false,
        });
      }
    }
  };

  handleDecrease = () => {
    if (this.state.max == "") {
      if (this.state.count - 2 * this.state.step < this.state.min) {
        this.setState({
          count: this.state.count - this.state.step,
          isDisableDecrease: true,
        });
      } else if (this.state.count - this.state.step > this.state.min) {
        this.setState({
          count: this.state.count - this.state.step,
        });
      }
    } else if (this.state.max !== "") {
      if (this.state.count - this.state.step >= this.state.min) {
        this.setState({
          count: this.state.count - this.state.step,
          isDisableIncrease: false,
        });
      }
      if (this.state.count - 2 * this.state.step < this.state.min) {
        this.setState({
          count: this.state.count - this.state.step,
          isDisableDecrease: true,
        });
      }
    }
  };

  handleReset = () => {
    this.setState({
      count: 0,
      isDisableDecrease: true,
      isDisableIncrease: false,
    });
  };

  handleStep = (e) => {
    if (!isNaN(+e.target.value)) {
      if (
        e.target.value.length &&
        this.state.count - 2 * this.state.step <= this.state.min
      ) {
        this.setState({
          step: +e.target.value,
          isDisableDecrease: true,
        });
      } else if (e.target.value.length) {
        this.setState({
          step: +e.target.value,
        });
      }
    }

    else{
        alert("Please input number")
    }
  };

  handleMin = (e) => {
    if (!isNaN(+e.target.value)) {
      if (e.target.value.length) {
        if (e.target.value <= this.state.count) {
          this.setState({
            min: +e.target.value,
            isDisableDecrease: true,
          });
        }
        this.setState({
          min: +e.target.value,
        });
      }
    }  else{
        alert("Please input number")
    }
  };

  handleMax = (e) => {
    if (!isNaN(+e.target.value)) {
      if (e.target.value.length) {
        if (e.target.value >= this.state.count) {
          this.setState({
            max: +e.target.value,
            isDisableIncrease: false,
          });
        } else {
          this.setState({
            max: +e.target.value,
          });
        }
      }
    }  else{
        alert("Please input number")
    }
  };

  render() {
    return (
      <>
        <div className="container">
            <div className="input_container">
        <input  className="input" onChange={this.handleMax} placeholder="Input max value"></input>
        <input  className="input" onChange={this.handleMin} placeholder="Input min value"></input>
        <input  className="input" onChange={this.handleStep} placeholder="Input step"></input>
        </div>
        <h1 className="count">
        {this.state.count}
        </h1>
        <div className="button_container">
         
          <button
            disabled={this.state.isDisableIncrease ? "disabled" : ""}
            onClick={this.handleIncrease}
          >
            {" "}
            Increase
          </button>
          <button
            disabled={this.state.isDisableDecrease ? "disabled" : ""}
            onClick={this.handleDecrease}
          >
            {" "}
            Decrease
          </button>
          <button onClick={this.handleReset}> Reset</button>
        </div>
        </div>
      </>
    );
  }
}

export default Counter;
