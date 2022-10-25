import React from "react";
import { useState } from "react";


const Calculation = () => {
    const [result, setResult] = useState("")
    const handler = e => {
        setResult(e.target.value)
    }
    const backspace = () => {
        setResult(result.slice(0, result.length - 1))
    }
    const display = () => {
        setResult(eval(result))
    }
    return (
        <div >
            <h1 className="text-center">Basic Calculator</h1>

            <div className="row justify-content-center">
                <div className="col-md-4 ">
                    <input type="text" value={result} onChange={handler} className="form-control form-control-lg  " /><br />
                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(" ")} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">AC</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => { backspace() }} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">DEL</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '%')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">%</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '^')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">^</button>
                        </div>
                    </div><br />

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + "1")} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">1</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '2')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">2</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '3')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">3</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '+')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">+</button>
                        </div>
                    </div><br />

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '4')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">4</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '5')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">5</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '6')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">6</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '-')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">-</button>
                        </div>
                    </div><br />

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '7')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">7</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '8')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">8</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '9')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">9</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '*')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">*</button>
                        </div>
                    </div><br />

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '0')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">0</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '/')} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">/</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => setResult(result + '.')} className="btn bg-warning border-danger  fs-2 shadow  text-danger rounded">.</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(e) => { display() }} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Calculation;