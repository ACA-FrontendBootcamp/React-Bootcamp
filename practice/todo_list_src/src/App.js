import { Component } from "react";
import ToDo from "./components/todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputValue: "",
    };
  }

  addButtonClick = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          value: this.state.inputValue,
        },
      ],
    });
    this.setState({
      inputValue: "",
    });
  };

  handleGlobalInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleItemDelete1 = ({ id }) => {
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div className="todo">
        <h1>ToDo List</h1>
        <div>
          <input
            className="input"
            onChange={this.handleGlobalInput}
            value={this.state.inputValue}
            type="text"
          />
          <button className="addbutton" onClick={this.addButtonClick}>
            ADD
          </button>
        </div>
        {this.state.todos.map((todo) => {
          return <ToDo {...todo} handleItemDelete1={this.handleItemDelete1} />;
        })}
      </div>
    );
  }
}
export default App;
