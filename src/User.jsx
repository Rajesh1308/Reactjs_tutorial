import { useEffect, useState } from "react";
import { useRef } from "react";

function user({username, userage}) {
  const ref = useRef(null);
  
  const [input, setInput] = useState("Raj");
  const inputref = useRef()

  console.log("Getting rendered");

  
  const changeColor = () => {
    ref.current.style.color = "#787878";
  }

  useEffect(() => {
    inputref.current = input //Its like selecting a tag
    console.log(ref.current);
  },[input])

  const display =() => {
    console.log(inputref.current);
  }

  return (
    <div>
        <h1>I am in user</h1>
        <h3>{username}</h3>
        <h3>{userage}</h3>

        <h2>Input</h2>
        <input 
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)} />
        <p>My name is {input}</p>
        <p>My name is {inputref.current} </p>
        <button onClick={display}>show input</button>
        <p ref={ref}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptas.</p>
        <button onClick={() => {changeColor()}}>Change color</button>
    </div>
  )
}

export default user;