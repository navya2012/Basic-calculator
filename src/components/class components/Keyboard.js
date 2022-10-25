import React from "react";
import "../App.css"

class Keyboard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            result : "",
        }
    }
    reset = () => {
        this.setState({result: "" })
        console.log("hello")
    };
    handler =(event) => {
        this.setState({result: event.currentTarget.value})
    }
    whenkeyIsPressed = (event) => {
        let input = this.state.result + event.currentTarget.value
        this.setState({ result: input});
    };
    output = () => {
        this.setState({ result: eval(this.state.result)})
    };
    backspace = () => {
        this.setState({result: this.state.result.slice(0, this.state.result.length - 1)})
    };
    render() {
        return (
            <div className="container">
            <h1 className="text-center">Basic Calculator</h1>

            <div className="row justify-content-center">
                <div className="col-md-4  col-sm-3">
                    <input type="text" value={this.state.result} onChange={this.handler} className="form-control form-control-lg text-center " /><br />
                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={this.reset} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">AC</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.backspace} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">DEL</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="%" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">%</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="^" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">^</button>
                        </div>
                    </div><br />

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="1" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">1</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed}  value="2" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">2</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="3" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">3</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="+" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">+</button>
                        </div>
                    </div><br />

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="4" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">4</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="5" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">5</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="6" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">6</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="-"  className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">-</button>
                        </div>
                    </div><br />

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="7" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">7</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="8" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">8</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="9" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">9</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="*" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">*</button>
                        </div>
                    </div><br />

                    <div className="row" >
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="0" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">0</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="/" className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">/</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.whenkeyIsPressed} value="."  className="btn bg-warning border-danger  fs-2 shadow  text-danger rounded">.</button>
                        </div>
                        <div className="col-md-3" >
                            <button onClick={this.output} className="btn bg-warning border-danger  fs-4 shadow p-2 text-danger rounded">=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Keyboard;