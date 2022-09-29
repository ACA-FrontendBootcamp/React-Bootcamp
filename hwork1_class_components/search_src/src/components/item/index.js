import { Component } from "react";

class Item extends Component{
    constructor(props){
       super(props)
    }
    render(){
        return(
        <>
        <div className="item">
            <img className="image" src = {this.props.img}></img>
            <div> {this.props.name}</div>
            </div>
        </>
        )
    }
}

export default Item