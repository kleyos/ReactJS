import React, { Component } from 'react';
import Header from './Header';
import Row from './Row';
import data from '../data.json';
import '../css/grid.css'

class App extends Component {
  constructor(){
    super();
    this.state = {data,
                  status:[0,0,0,0,0,1,0]};
  } 
  
  componentWillMount(){
    const data = this.state.data;
    const arrData = Object.keys(data).map((i) => data[i]).map((item) => { 
                
                let newItem = Array(24).fill(false); 
                if (item.length > 0){
                  item.map( (item1) => {
                     let b = item1.bt/60, e = (item1.et-59)/60;
                      newItem.forEach((el,index) => {
                                                        if ( (!newItem[index]) && (index >= b) && (index <= e) ) {
                                                         newItem[index] = true; 
                                                          
                                                      } }) 
                    return true;                                         
                    } ); 
                  return newItem;
                } 
                else {return newItem} }) 
  
  this.setState( {arrData} );
}

saveChanges(){
  let obj = Object.assign({}, this.state.data);
  let copyData = JSON.parse(JSON.stringify(this.state.arrData));

  const a = copyData.map((it,i) => {   let newItem=[], b,e;
                                                while (copyData[i].some(item => item ===true)){
                                                        b=copyData[i].indexOf(true);                                                     
                                                       
                                                        for (let j=b; j<copyData[i].length; j++){
                                                            if (copyData[i][j]) { 
                                                              e = j;
                                                              copyData[i][j] = false;
                                                            }
                                                            else{break}
                                                        }
                                                        
                                                        newItem.push({bt:b*60, et:e*60+59})
                                                }      
                                                return newItem; })           
        
Object.keys(obj).map((el, index) => obj[el]=a[index]);

this.setState({data:obj});

}
clear(){
  let arrData = this.state.arrData;
  this.setState( {arrData:arrData.map(i => Array(24).fill(false)),
                  status:Array(7).fill(false)});
}

handleClickCell(index, row){
  let copyData = [...this.state.arrData];
  let copyStatus = [...this.state.status]; 
  
  copyData[row][index] = !copyData[row][index];
  copyData[row].every(i => i === true ? copyStatus[row]=1 : copyStatus[row]=0)  
  
  this.setState( {arrData:copyData, status:copyStatus} );
}


handleSelectAll(row){
  let copyData = [...this.state.arrData];
  let copyStatus = [...this.state.status]; 
   
    copyStatus[row] = !copyStatus[row];
    if (copyStatus[row]){
      copyData[row].forEach( (el, index) => copyData[row][index]=true);
    }
    else {copyData[row].forEach( (el, index) => copyData[row][index]=false);}
    
  this.setState( {arrData:copyData, status:copyStatus} );
}

render() {
  const arrData = this.state.arrData; 
  const status = this.state.status; 
  
   return (
      <div className="grid" >
        <Header />
      
          {Object.keys(data).map((day, i) =>  <Row  key={i} 
                                                    day={day} 
                                                    row={arrData[i]}
                                                    rowIndex={i}
                                                    clickCell={this.handleClickCell.bind(this)}
                                                    clickSelectAll={this.handleSelectAll.bind(this)}
                                                    status={status[i]}
                                                     />)}
        
        <p className='btn'>
              <button className='clear' type='button' onClick={this.clear.bind(this)}> Clear </button>
              <button className='save' type='button' onClick={this.saveChanges.bind(this)}> Save Changes </button>
          </p>
      </div>
    );
  }
}

export default App;
