import React from 'react';
import axios from 'axios';

function Create() {
    

  const  create = ()=>{
    axios.get("http://localhost/React/crudphp/create.php?name=samar&email=sam@gmail.com&age=14")
    }
  return (
    <div>

        <button onClick={create}>create data</button>
      
    </div>
  )
}

export default Create