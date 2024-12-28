import React from 'react'
import {Link} from "react-router-dom"
import '../components/BMICalculator/BMICalculator.css'


const BMICalculator = () => {
  return (
    <div>
      <Link to="/bmi" style={{ marginRight: '10px' }}>BMI Calculator</Link>
    </div>
  )
}

export default BMICalculator
