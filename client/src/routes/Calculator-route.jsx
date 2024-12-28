import React from 'react'
import {Link} from "react-router-dom"
import '../components/Calculator/Calculator.css'


const Calculator = () => {
  return (
    <div>
        <Link to="/calculator" style={{ marginRight: '10px' }}>Calculator</Link>
    </div>
  )
}

export default Calculator
