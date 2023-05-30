import Input from './components/Input';
import Button from './components/Button';

import {Container, Content, Row} from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [primeiroNumero, setPrimeiroNumero] = useState('0')
  const [operation, setOperation] = useState('')
  const [equal, setEqual] = useState('')  
  
  
  const handleClear = () => {
    setCurrentNumber('0')
    setPrimeiroNumero('0')
    setOperation('')
  }
  const handleClearCurrent = () => {
    setCurrentNumber('0');
  }

  const handleRemNumber = () => {
    setCurrentNumber(currentNumber.slice(0,-1));
  }

  const handleAddNumber = (number) => {
   
    if(number === ','){
      console.log(number.indexOf(','))
      if(currentNumber.indexOf(',')>0){
        number = '';
      }
    }
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }
 
  const handleCalculeNumbers = (calc) => {
    if(primeiroNumero === '0' & equal === ''){
      setPrimeiroNumero(currentNumber)
      setOperation(calc)
      handleClearCurrent();
    }else{
      let result = 0
      let number1 = Number(primeiroNumero.replace(',','.'))
      let number2 = Number(currentNumber.replace(',','.'))
      switch(operation){
        case '+':
          result =  number1 + number2
        break
        case '-':
          result = number1 - number2
        break  
        case 'x':
          result = number1 * number2
        break
        case '÷':
          result = number1 / number2
        break
        default:
          break
      }
      setCurrentNumber(String(result).replace('.',','))
      setPrimeiroNumero('0')
      setEqual('')
    }
  }

  const handlePercentNumbers = () => {
    if(primeiroNumero !== '0'){
      let result = 0
      let number1 = Number(primeiroNumero.replace(',','.'))
      let number2 = Number(currentNumber.replace(',','.'))
      switch(operation){
        case '+':
        case '-':
          result =  number1/100*number2
        break
        case 'x':
        case '÷':  
          result = number2/100
        break
        default:
          break
      }
      setCurrentNumber(String(result).replace('.',','))
      
    }
  }

  const handleCalculeEqual = () => {
    if (operation !== '')
    {
    setEqual('=')
    handleCalculeNumbers(operation)
    }
  }

  const handleInversion = () => {
    if(currentNumber !== '0'){
      let inverted = Number(currentNumber.replace(',','.'))*-1;
      setCurrentNumber(String(inverted).replace('.',','));
    }
  }

  const handleRootSquare = () => {
    if(currentNumber !== '0'){
      let rootSquare = Math.sqrt(Number(currentNumber.replace(',','.')))
      setCurrentNumber(String(rootSquare).replace('.',','))
    }
  }

  const handleElevation = () => {
    if(currentNumber !== '0'){
      let elevation = Number(currentNumber.replace(',','.'))*Number(currentNumber.replace(',','.'))
      setCurrentNumber(String(elevation).replace('.',','))
    }
  }

  const handleOverlap = () => {
    if(currentNumber !== '0'){
      let overlaid = 1/Number(currentNumber.replace(',','.'))
      setCurrentNumber(String(overlaid).replace('.',','))
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="%" onClick={handlePercentNumbers}/>
          <Button label="CE" onClick={handleClearCurrent}/>
          <Button label="C" onClick={handleClear}/>
          <Button label="«" onClick={handleRemNumber}/>
        </Row>
        <Row>
          <Button label="⅟" onClick={handleOverlap}/>
          <Button label="x²" onClick={handleElevation}/>
          <Button label="√" onClick={handleRootSquare}/>
          <Button label="÷" onClick={() => handleCalculeNumbers('÷')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={() => handleCalculeNumbers('x')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={() => handleCalculeNumbers('-')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={() => handleCalculeNumbers('+')}/>

        </Row>
        <Row>
          <Button label="±" onClick={handleInversion}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber(',')}/>
          <Button label="=" onClick={handleCalculeEqual}/>
        </Row>
        
      </Content>
    </Container>
  );
}

export default App;
