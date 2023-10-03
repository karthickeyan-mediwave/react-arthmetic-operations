// import { MouseEvent } from "react"
import { useState } from "react"
function Message() {
   
    const [input, setInput] = useState({
        num1: 0,
        num2: 0,
    });
    const [result, setResult] = useState("")

    const addClick = function(){
        const { num1, num2 } = input;
        setResult(Number(num1) + Number(num2));
    }
    const subtract = function(){
        const { num1, num2 } = input;
        setResult(Number(num1) - Number(num2));
    }
    const multiply = function(){
        const { num1, num2 } = input;
        setResult(Number(num1) * Number(num2));
    }
    const divide = function(){
        const { num1, num2 } = input;
        setResult(Number(num1) / Number(num2));
    }
    const handleInput = function(e){
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        });
    };
    
  return (

    <div> 
        <h1>Arthmetic operations</h1>
        <input  className="inputs" onChange={handleInput} name="num1" value={input.num1} type="number"></input>
        <input  className="inputs" onChange={handleInput} name="num2" value={input.num2} type="number"></input> <br />
         <button className="btn" onClick={addClick}>+</button>
          <button className="btn" onClick={subtract}>-</button>
          <button className="btn" onClick={multiply}>*</button>
          <button className="btn" onClick={divide}>/</button> <br />
              <span>{result}</span>                     

    </div>
  ) 
}

export default Message