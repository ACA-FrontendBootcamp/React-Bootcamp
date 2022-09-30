import { Component } from "react";
import Wrapper from "./components/wrapper";
import Data from "./Data.json";
import Show from "./components/show";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
    };
  }

  unmountingCount = (a) => {
    let newData = this.state.data.map((item) => {
      if (item.key == a) {
        item.count = item.count + 1;
      }
      return item;
    });
    this.setState({
      data: newData,
    });
  };

  render() {
    return (
      <>
        <div className="allcontainer">
          <div className="container">
            {this.state.data.map((item) => {
              return (
                <Wrapper
                  uniquekey={item.key}
                  unmountingCount={this.unmountingCount}
                  {...item}
                />
              );
            })}
          </div>
        </div>
        <div className="show">
          {this.state.data.map((item) => {
            return <Show {...item} />;
          })}
        </div>
      </>
    );
  }
}
export default App;
