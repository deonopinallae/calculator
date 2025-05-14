import styles from './App.module.css'
import { useState } from 'react'

export default function App() {  
  const [operand1, setOperand1] = useState('')
  const [operator, setOperator] = useState('')
  const [operand2, setOperand2] = useState('')
  const [expression, setExpression] = useState('')

  const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']
  const operators = ['+', '-']

  const clickOperand = (num) => {
    let updatedOperand1 = operand1 || ''
    let updatedOperand2 = operand2 || ''

    if(expression.includes('+') || expression.includes('-')){
      updatedOperand2 = operand2 + num
      setOperand2(operand2 + num)
    }else {
      updatedOperand1 = operand1 + num
      setOperand1(operand1 + num)
    }
    setExpression(updatedOperand1 + operator + updatedOperand2)
  }

  const clickOperator = (op) => {
    let updatedOperator = ''

    if(operand2 === '') {
      updatedOperator = op
      setOperator(op)
    }
    else if(operator !== ''){
      calcResult()
      setOperator(op)
      setExpression((exp) => exp + op)
      return
    }
    else{
      calcResult()
      setOperator(op)
    }
    setExpression(operand1 + updatedOperator + operand2)
  }

	const calcResult = () => {
    let result = ''
    switch(operator){
      case '+':
        result = Number(operand1) + Number(operand2)
        setOperand1(result)
        setExpression(result)

        setOperand2('')
        setOperator('')
      break
      case '-':
        result = Number(operand1) - Number(operand2)
        setOperand1(result)
        setExpression(result)

        setOperand2('')
        setOperator('')
    }
	}

  const reset = () => {
    setOperand1('')
    setOperand2('')
    setOperator('')
    setExpression('')
  }
  

  return (
    <div className={styles.calcWrapper}>
      <input disabled className={styles.calcInput} value={expression}/>
      <div className={styles.buttons}>
        {numbers.map(num => <button onClick={() => clickOperand(num)} className={styles.calcBtn}>{num}</button>)}
        {operators.map(op => <button disabled={operand1 === ''} onClick={() => clickOperator(op)} className={styles.calcBtn}>{op}</button>)}
        
        <button disabled={operand1 === ''  && expression === ''} onClick={reset} className={styles.calcBtn}>C</button>
        <button disabled={operand1 === '' || operator === '' || operand2 === ''} onClick={calcResult} className={styles.calcBtn}>=</button>
      </div>
    </div>
  )
}
