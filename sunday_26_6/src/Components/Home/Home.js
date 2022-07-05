import React from 'react';

function Home(props){
    console.log(props.name,"test home page");
    return(
        <>
        <h1>Home Page</h1>
        <h1>your name is :{props.name}</h1>
        <h1>your Email is :{props.Email}</h1>
        <h1>your Phone Number is :{props.PhoneNumber}</h1>

</>
    )
}

export default Home;