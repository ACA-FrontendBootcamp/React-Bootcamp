import { Component } from "react";
import Counter from "./components/counter";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Counter />
      </>
    );
  }
}
export default App;
