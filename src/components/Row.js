import React, {Component} from 'react';

import Day from './Day';
import All from './All';
import Cell from './Cell';

class Row extends Component {
  constructor(props){
    super();
}
    render(){

   const cellRow = (this.props.row).map((item,i) => <Cell key={i}
   														  index={i}
   														  clN={ !item ? 'grid-cell' : 'grid-cell active'} 
   														  {...this.props}
   														  />)
	    return (
	     <div className="grid-row" >
		 
		 	<Day day={this.props.day}/>
	        <All clsNm={this.props.status ? 'all-day checked' : 'all-day'} 
	        	 selectAll={this.props.selectAll}
	        	 {...this.props}/>     
	        {cellRow}
		 
		 </div>
	    );
	}
}

export default Row;