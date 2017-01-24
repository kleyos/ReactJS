import React, {Component} from 'react';
import data from '../data.json';

class Cell extends Component {

	constructor(props){
	    super();
	    this.state = {data,
	    	          status:0,
					  index: null,
					  day: ''};
	  } 

	handleClick(){
	 const isSelect = this.state.status;
	 	
	 this.setState(isSelect === 1 ? 
	 				{status:0, 
	 				 index:null,
	 				 day:''} : 
	 				
	 				{status:1, 
	 				 index:this.props.index,
	 				 day:this.props.day
	 			    })
	 
	 this.props.onClick(this.props.index, this.props.day);
	}

	render() {
	 const  isSelect = this.state.status
  

	   return (
	     
	     <div className={isSelect === 1 ? 'grid-cell active' : 'grid-cell'} 
		  	  onClick={this.handleClick.bind(this)}></div>
	    );
	}
}

export default Cell;