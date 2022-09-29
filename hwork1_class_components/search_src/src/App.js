import {Component} from 'react';
import Item from './components/item'
import Data from './Data.json';

class App extends Component{
	constructor(){
		super()
		this.state = {
		inputValue: "",
		data: Data,
		}
	}


	handleInput = (e) => {
	let filtrData = Data.filter((item) => item.name.toUpperCase().includes(e.target.value.toUpperCase()))
	this.setState({
		inputValue : e.target.value,
		data : filtrData,
	})
}


	render(){
		return(
		<>	
		<div className='item_container'> 
		<input  className='input' onChange={this.handleInput} placeholder='search' /> 	
			{this.state.data.map((item) => {
				return (
				<Item {...item}
				/>
				)
			} ) 
			}
		</div>
		</>
		)
	}	
}
	
export default App;