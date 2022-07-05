import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
constructor(props){
  super(props);
this.state={
  item:[],
  isloaded:false,
}}

componentDidMount(){
  axios.get('http://localhost//React/phpconnection/SERVER/connection.php')
  .then(res=>
    this.setState({item:res.data , isloaded:true}));
}

  render() { 
    const{item , isloaded} = this.state;
    return (
      <>
        {JSON.stringify(item)}
      </>
    );
  }
}

export default App;
