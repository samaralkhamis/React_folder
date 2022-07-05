// import React, {useState } from 'react';

// function Text(){
//     const[istext,setText]=useState(false);
//     const[iscolor,setcolor]=useState(false);
//     const display=()=>{
//         setText(!istext);
//           };

//           const Color=()=>{
//             setcolor(!iscolor);
//               };
//         return (
//             <div>
//                 <h1 className={istext?"hide":""}>Hello World</h1>
//             <button onClick={display} >change Visibilty</button>
//             <button onClick={Color} >change Color</button>
//             </div>
//         );
//     }

 
// export default Text;

import React, { Component } from 'react';

class Text extends Component {
    constructor(props){
        super(props);
        this.state = {isHide: true, isRed: true};
        this.handleClick = this.handleClick.bind(this);
        this.handleColor = this.handleColor.bind(this);

    }
    handleClick(event){
        this.setState({isHide: !this.state.isHide})
    }
    handleColor(event){
        this.setState({isRed: !this.state.isRed})
    }
    render() { 
        return (
            <div>
            <hr></hr>
         
                <h1>Task 3:</h1>
                <div className='container'>
                <br></br>
                <button variant="success" onClick={this.handleClick}>Display</button>{' '}
                <button variant="danger" onClick={this.handleColor}>Color</button>{' '}
                <br></br>
                <p  style={{display:this.state.isHide?'block':'none',color:this.state.isRed?'black':'red'}}>Hello! This is a text which was written by Raghad</p>
                </div>
            </div>
        );
    }
}
 
export default Text;