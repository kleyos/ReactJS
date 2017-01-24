
import React, {Component} from 'react';


class Cell extends Component {

	constructor(props){
	    super();
	  } 

	handleClick(){
		this.props.clickCell(this.props.index, this.props.rowIndex);
	
	}
	onMouseDown(){
		
		this.onMouseOver =(e) => {
			e.target.className += ' active';
		}
	}
		
	render(){
	   return (
	     <div className={this.props.clN} 
		  	  onMouseDown={this.onMouseDown.bind(this)}
			  onClick={this.handleClick.bind(this)}
		></div>
	    );
	}
}

export default Cell;