import styles from './App.module.css'
import { useState } from 'react'

export default function App() {  
  const [operand1, setOperand1] = useState('')
  const [operator, setOperator] = useState('')
  const [operand2, setOperand2] = useState('')
  const [expression, setExpression] = useState('')

  const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']

  const clickOperand = (event) => {
    if(expression.includes('+') || expression.includes('-')){
      setOperand2(operand2 + event.target.innerHTML)
    }else setOperand1(operand1 + event.target.innerHTML)
  }

  const clickOperator = (event) => {
    if(operand2 === '') setOperator(event.target.innerHTML)
    else{
      calcResult()
      setOperator(event.target.innerHTML)
    }
  }

	const calcResult = () => {
    switch(operator){
      case '+':
        setOperand1(Number(operand1) + Number(operand2))
        setOperand2('')
        setOperator('')
      break
      case '-':
        setOperand1(Number(operand1) - Number(operand2))
        setOperand2('')
        setOperator('')
    }
	}

  const reset = () => {
    setOperand1('')
    setOperand2('')
    setOperator('')
  }
  
  setTimeout(() => setExpression(operand1 + operator + operand2), 10)

  return (
    <div className={styles.calcWrapper}>
      <input disabled type="text" className={styles.calcInput} value={expression}/>
      <div className={styles.buttons}>
        {numbers.map(num => <button onClick={clickOperand} className={styles.calcBtn}>{num}</button>)}
        <button disabled={operand1 === '' ? true : false} onClick={clickOperator} className={styles.calcBtn}>+</button>
        <button disabled={operand1 === '' ? true : false} onClick={clickOperator} className={styles.calcBtn}>-</button>
        <button disabled={operand1 === '' ? true : false} onClick={reset} className={styles.calcBtn}>C</button>
        <button disabled={operand1 === '' || operator === '' || operand2 === '' ? true : false} onClick={calcResult} className={styles.calcBtn}>=</button>
      </div>
    </div>
  )
}
































// import styles from './App.module.css'
// import { useState } from 'react'

// export default function App() {  
//   const [operand1, setOperand1] = useState('')
//   const [operator, setOperator] = useState('')
//   const [operand2, setOperand2] = useState('')
//   // const [result, setResult] = useState('')
//   const [expression, setExpression] = useState('')


//   const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']

//   const clickButton = (event) => {
//     setResult('')
//     const eventValue = event.target.innerHTML
//     if(operator === ''){
//       if(numbers.some(el => el === eventValue)){
//         setOperand1(operand1 + eventValue)
//         setExpression(expression + eventValue)
//       }
//     }else if(operator !== ''){
//       if(numbers.some(el => el === eventValue)){
//         setOperand2(operand2 + eventValue)
//         setExpression(expression + eventValue)
//       } 
//     }
//     if(eventValue === '+' || eventValue === '-'){
//       if(operand2 !== ''){
//         calcResult()
//         setExpression(expression + eventValue)
//         setOperator(eventValue)
//         setResult('')
//       }
      
//       setOperator(eventValue)
//       setExpression(expression + eventValue)
//     }
//   }  


// 	const calcResult = () => {
// 		switch (operator) {
// 			case '+':
//         setResult(Number(operand1) + Number(operand2))
//         setExpression(Number(operand1) + Number(operand2))
//         reset()
//         break
// 			case '-': 
//         setResult(Number(operand1) - Number(operand2))
//         setExpression(Number(operand1) - Number(operand2))
//         reset()
// 		}
// 	}

//   const reset = () => {
//     setOperand1('')
//     setOperand2('')
//     setOperator('')
//   }

//   return (
//     <div className={styles.calcWrapper}>
//       <input disabled type="text" className={styles.calcInput} value={expression}/>
//       <div className={styles.buttons}>
//         {numbers.map(num => <button onClick={clickButton} className={styles.calcBtn}>{num}</button>)}
//         <button disabled={operand1 === '' ? true : false} onClick={clickButton} className={styles.calcBtn}>+</button>
//         <button disabled={operand1 === '' ? true : false} onClick={clickButton} className={styles.calcBtn}>-</button>
//         <button disabled={operand1 === '' ? true : false} onClick={reset} className={styles.calcBtn}>C</button>
//         <button disabled={operand1 === '' || operator === '' || operand2 === '' ? true : false} onClick={calcResult} className={styles.calcBtn}>=</button>
//       </div>
//     </div>
//   )
// }
