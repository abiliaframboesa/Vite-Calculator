import React, { useState } from 'react'
import Navbar from '../../routes/Navbar'

//truque é atribuir uma classe a cada coisa que queremos alterar no calculator.css, quer seja tamanho, cor, etc

const Calculator = () => {
  const[value, setValue] = useState('');
  return (
    <div>
      <Navbar />
      <h1>Calculator</h1>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className='display'>
            <input type="text" value={value} /> 
            </div>
            <div>
              {/* onClick={e => setValue(value + e.target.value)} //isto permite-nos adicionar mais 7 */}
              {/* onClick={e => setValue(eval(value))} //este chama a função eval que faz o cálculo quando se clica no = */}
              <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/> 
              <input type="button" value= "8" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value= "5" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value= "2" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
              <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value= "0" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="=" onClick={e => setValue(eval(value))}/>
              <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
            </div>
            <div>
            <input type="button" value="Clear" onClick={e => setValue('')} className='clear'/>
            </div>
          </form>     
        </div>
      </div>
    </div>
  )
}

export default Calculator