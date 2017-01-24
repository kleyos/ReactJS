import React, { Component } from 'react';
import Header from './Header';
import Row from './Row';
import data from '../data.json';
import '../css/grid.css'

class App extends Component {
  constructor(){
    super();
    this.state = {data,
                  weekday:' ',
                  status:0,
                  index: null,
                  day: ' ' };
  } 
  
  handleClickCell(index, day){
   
  this.setState( {  index,
                    day
                    //status: 1,
                    //data:{[day]: {bt:index*60, et:(index*60)+59} }
                  })
  }
  
  selectAll(){

  }
  
  render() {
  const data = this.state.data;
 
  const dataArr =[];
  
  for (let i in data){
    if (data.hasOwnProperty( i )){
    dataArr.push(data[i])}
  }
  
  // dataArr.map((item)=> 
  //   {if (item.length > 0){
  //     item.map((i) => {const beginInterval = i[bt]/60, endInterval = (i[et]-59)/60; 
  //                       return {bt: beginInterval,
  //                               et: endInterval}
  //                     })
  //   }
  //   else {return item}
  // })

  dataArr.map((item)=> 
    {
    if (item.length > 0){
      //debugger;
      item.map((i) => console.log(Object.keys(i).map(() => [...i] ) ))
    }
    else {return item}
  })
console.log(dataArr)



    return (
      <div className="grid" >
        <Header />
      
          {Object.keys(data).map((day, i) =>  <Row  key={i} 
                                                    day={day} 
                                                    onClick={this.handleClickCell.bind(this)}
                                                    //isSelect={this.state.status}

                                                />)}
        
        <p className='btn'>
              <button className='clear' type='button'> Clear </button>
              <button className='save' type='button'> Save Changes </button>
          </p>
      </div>
    );
  }
}

export default App;
