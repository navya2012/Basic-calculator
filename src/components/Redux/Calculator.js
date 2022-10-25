import React from "react";
import { useSelector, useDispatch  } from "react-redux";
import { allclear, backspace, button, output } from "./actions/calculateActions";

const Calculator = () => {
   const input = useSelector(state=> state.input)
   console.log(input)
   const response = JSON.stringify(input)
   console.log(response)
   console.log(input)
    const dispatch = useDispatch()
    return(
        <div className="container">
            <h1 className="text-center">Basic Calculator</h1>
            <div className="row justify-content-center ">
                <div className="col-md-4 ">
                    <input type="text"  defaultValue={ input}  className="form-control form-control-sm fs-3 " /><br/>
                        <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(allclear()))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">AC</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(backspace()))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">DEL</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button("(")))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">(</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(")")))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">)</button>
                        </div>
                    </div><br/>

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(1)))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">1</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(2)))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">2</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(3)))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">3</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button("+")))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">+</button>
                        </div>
                    </div><br/>

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(4)))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">4</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(5)))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">5</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(6)))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">6</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button("-")))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">-</button>
                        </div>
                    </div><br/>

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(7)))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">7</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(8)))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">8</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(9)))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">9</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button("*")))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">*</button>
                        </div>
                    </div><br/>

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(0)))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">0</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button("/")))} className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">/</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(button(".")))} className="btn bg-warning border-danger  fs-2 shadow  text-danger rounded">.</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={(() => dispatch(output("=")))}  className="btn bg-warning border-danger  fs-4 shadow  text-danger rounded">=</button>
                        </div>
                    </div>
                </div>
            </div>
                   
        </div>
        
    )
}
export default Calculator;