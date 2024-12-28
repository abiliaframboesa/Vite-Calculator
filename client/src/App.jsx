import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Navbar from './routes/Navbar'
// import Calculator from './routes/Calculator'
// import { Routes, Route } from 'react-router-dom'
// import { Link, Outlet } from 'react-router-dom';
import Calculator from './routes/Calculator-route'
import BMICalculator from './routes/BMICalculator-route'
import './App.css'; // Importa o arquivo de estilos CSS


function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]); // array que nos vai mostrar no front end o que temos no backend. o array inicialmente está vazio 

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api"); // variavek resposta com a info do backend
    setArray (response.data.fruits); // mostrar a info do backend como array no frontend
    console.log(response.data.fruits); // info do backend mostrada na consola
  };

  useEffect(() => { 
    fetchAPI();  // criámos a variável fetchAPI e temos de a chamar. 
  }, []); // [] vazios pq é para correr no inital render deste App component

  
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="heading">
          Wondering if your health is in shape, or if you're just stretching for the couch?
        </h1>
        <h2 className="subheading">Click the link and find out!</h2>

        <div className="card-container">
          <div className="card">
            <BMICalculator />
            <p className="card-text">
            To see if you're a fitness hero or just a pizza enthusiast 🍕
            </p>
          </div>
          <div className="card">
            <Calculator />
            <p className="card-text">
              For all your other calculations... maybe how many push-ups you'll do after this? 😅
            </p>
          </div>
        </div>
      </div>
    </>
  );
  

  // return (
  //   <>
  //     < Navbar />
  //     <h1>Wondering if your health is in shape, or if you're just stretching for the couch? </h1>
  //     <h2>Click the link and find out!</h2>
  //     <div>
  //       <h3>To see if you're a fitness hero or just a pizza enthusiast 🍕</h3>
  //     < BMICalculator />
  //     <p></p> 
  //     <h4>For all your other calculations... maybe how many push-ups you'll do after this? 😅</h4>
  //     < Calculator />
  //     </div>

  //   </>
  // )
}

export default App
