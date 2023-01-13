/* eslint-disable jsx-a11y/alt-text */
// import { render } from '@testing-library/react';
import './App.css';
import elephant from "./images/elephant.jpeg";

// eslint-disable-next-line no-unused-vars
const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}



// export default App;

function App() {
  return(
    <div className='App'>
      <h1>Kalvium Gallery</h1>
      <div className='images'>
        {imageData().map((e)=>{
          return <img src= {e.img} alt = 'Elephant Art'/>;
        })}
      </div>
    </div>
  )
}

export default App;
