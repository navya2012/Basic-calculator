import React from "react";
import { useState } from "react";

const Evaluation = () => {
    const [result,setResult] = useState("")
    const handler = e =>{
        setResult(e.target.value)
    }
    const backspace = () => {
        setResult(result.slice(0, result.length-1))
    }
    const display = () => {
        setResult(eval(result))
    }
    return(
        <>
            <div className="calculator" >
                <h1>Basic Calculator</h1>
                <div className="output" >
                    <input type="text" value={result} onChange={handler} />
                </div><br/>
                <div className="buttons">
                    <button onClick={(e) => setResult(" ")}>AC</button>
                    <button onClick={(e) => {backspace()}}>DEL</button>
                    <button onClick={(e) => setResult(result + '(')}>(</button>
                    <button onClick={(e) => setResult(result + ')')}>)</button>

                    <button onClick={(e) => setResult(result + '1')}>1</button>
                    <button onClick={(e) => setResult(result + '2')}>2</button>
                    <button onClick={(e) => setResult(result + '3')}>3</button>
                    <button onClick={(e) => setResult(result + '+')}>+</button>

                    <button onClick={(e) => setResult(result + '4')}>4</button>
                    <button onClick={(e) => setResult(result + '5')}>5</button>
                    <button onClick={(e) => setResult(result + '6')}>6</button>
                    <button onClick={(e) => setResult(result + '-')}>-</button>

                    <button onClick={(e) => setResult(result + '7')}>7</button>
                    <button onClick={(e) => setResult(result + '8')}>8</button>
                    <button onClick={(e) => setResult(result + '9')}>9</button>
                    <button onClick={(e) => setResult(result + '*')}>*</button>

                    <button onClick={(e) => setResult(result + '0')}>0</button>
                    <button onClick={(e) => setResult(result + '/')}>/</button>
                    <button onClick={(e) => setResult(result + '.')}>.</button>
                    <button onClick={(e) => {display()}}>=</button>
                </div>
            </div>
        </>
    )
}
export default Evaluation;