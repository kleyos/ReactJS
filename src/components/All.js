
import React, {Component} from 'react';


class All extends Component {

	constructor(props){
	    super();
	  } 

	selectAll(){
		this.props.clickSelectAll(this.props.rowIndex);
	}
	
	render(){
   return (
     <div className={this.props.clsNm}   onClick={this.selectAll.bind(this)}> 
 	{ this.props.clsNm ==='all-day checked' ? <span className='check'>&nbsp;&#10003;</span> : ' '}
     </div>
    );
}
}
export default All;