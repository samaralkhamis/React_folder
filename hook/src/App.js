import React, { useState } from 'react';
import App1 from './Components/App1' ;
import App2 from './Components/App2' ;
import App3 from './Components/App3' ;
 
   function Sample() {
     const [Letter, setLetter] = useState('');
        

     return (
       <div>
        <h5>live code 1</h5>
        <App1/>
        <hr>
        </hr>
        <div>
            <h5>live code 2</h5>
            <p className='PP'>You clicked <section className='btn-sm text-warning bg-dark'>{Letter}</section>  times</p>
        </div>
         
         <div  className="DD position-absolute top-50 start-50 translate-middle mt-5">
         <button onClick={() => setLetter(Letter + 'A')} className="btn btn-danger" type="button">
         A
        </button>
         <button onClick={() => setLetter(Letter + 'B')} className="btn btn-danger" type="button">
         B
        </button>
         <button onClick={() => setLetter(Letter + 'C')} className="btn btn-danger" type="button">
         C
        </button>
         <button onClick={() => setLetter(Letter + 'D')} className="btn btn-danger" type="button">
         D
        </button>
         <button onClick={() => setLetter(Letter + 'F')} className="btn btn-danger" type="button">
         F
        </button>
         <button onClick={() => setLetter(Letter + 'G')} className="btn btn-danger" type="button">
         G
        </button>
         <button onClick={() => setLetter(Letter + 'H')} className="btn btn-danger" type="button">
         H
        </button>
         <button onClick={() => setLetter(Letter + 'I')} className="btn btn-danger" type="button">
         I
        </button>
         <button onClick={() => setLetter(Letter + 'J')} className="btn btn-danger" type="button">
         J
        </button>
         <button onClick={() => setLetter(Letter + 'K')} className="btn btn-danger" type="button">
         K
        </button>
         <button onClick={() => setLetter(Letter + '-')} className="btn btn-danger" type="button">
         -
        </button>

        </div>
<hr></hr>
<h4>live code 3</h4>
        <App2/>
<hr></hr>

<h4>live code 4</h4>
        <App3/>


      </div>
    );}
    export default Sample;