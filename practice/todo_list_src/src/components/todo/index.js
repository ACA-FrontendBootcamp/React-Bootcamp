import { Component } from "react";
import trash from '../../assets/trash-solid.svg' 
import edit from '../../assets/pen-to-square-solid.svg'

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: this.props.value,
    };
  }

  handleItemDelete = () => {
    this.props.handleItemDelete1({ id: this.props.id });
  };

  handleInputValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleOkClick = () => {
    this.setState({
      isEditing: false,
    });
  };

  handleEditClick = () => {
    this.setState({
      isEditing: true,
    });
  };

  handleEdit = () => {
    this.setState({
      isEditing: true,
    });
  };

  render() {
    return (
      <>
        <div >
        {this.state.isEditing ? (
            <input
              onChange={this.handleInputValue}
              value={this.state.value}
              type="text"
            />
          ) : (
            <span> {this.state.value} </span>
          )}
            <input type="checkbox" />
            
          <img src = {trash}  className="icon" onClick={this.handleItemDelete} />
          {this.state.isEditing ? (
            <button onClick={this.handleOkClick}>SAVE</button>
          ) : (
            <img src = {edit} className="icon" onClick={this.handleEditClick} />
          )}

        
         
        </div>
      </>
    );
  }
}

export default ToDo;
