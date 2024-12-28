
import React, { useEffect, useState } from 'react';
import Navbar from '../../routes/Navbar'
import simpsonUnderweight from '../../images/simpson-underweight.png';
import homerNormal from '../../images/homer-normal.png';
import homerObeso from '../../images/Homer-obeso.png';
import homerMtObeso from '../../images/Homer-mtobeso.png';


const BMICalculator = () => {
  //state
  const [weight, setWeight] = useState(0); // Estado para gerenciar o peso
  const[height, setHeight] =useState(0);
  const[bmi, setBMI] =useState('');
  const[message, setMessage] =useState('');
  const [error, setError] = useState('');
  //const [loading, setLoading] = useState(false);

  const handleWeight = (e) => {setWeight(e.target.value);};

  const handleHeight = (e) => {setHeight(e.target.value);};

  // Função para manipular o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("Calculating BMI...");
    setError(''); // Limpa mensagens de erro antes de enviar
    //setLoading(true); // Ativa o estado de carregamento


  try{
    const response = await fetch("http://localhost:8080/api/calculate-bmi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ weight: parseFloat(weight), height: parseFloat(height) / 100 }),
    });

    if (!response.ok) {
      throw new Error("Failed to calculate BMI");
    }

    const data = await response.json();
    setBMI(data.bmi);
    setMessage(data.category);
  } catch (err) {
    console.error(err);
    setError("Failed to calculate BMI. Please try again.");
  }
};


//Imagem associada à categoria do BMI
let imgSrc = '';
if (message === 'Underweight') {
  imgSrc = simpsonUnderweight;
} else if (message === 'Normal weight') {
  imgSrc = homerNormal;
} else if (message === 'Overweight') {
  imgSrc = homerObeso;
} else if (message === 'Obesity') {
  imgSrc = homerMtObeso;
}


  return (
    <div>
      <Navbar />
      <h1>BMI Calculator</h1>
      <div className="container">
        <div className="BMIcalculator">
          <form onSubmit={handleSubmit}>
            <div>
              <label> Weight (kg) </label>
              <input 
                type="number" 
                value={weight} 
                onChange={handleWeight} // Atualiza o estado com o valor do input
                className='weight'
                required
              />
            </div>
            <div>
              <label> Height (cm) </label>
              <input 
                type="number"
                value={height}
                onChange={handleHeight}
                className='height'
                required
              />
            </div>
            <div>
              <button className='btn1' type='submit'>Calculate BMI</button>
              {/* <button className='btn2' type='reset'>Reload</button> */}
            </div>
          </form>
          <div className='center'>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <h3>Your BMI is: {bmi} </h3>
            <p>{message}</p>
          </div>

          <div className='img-container'>
            <img src={imgSrc} alt={message}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;


