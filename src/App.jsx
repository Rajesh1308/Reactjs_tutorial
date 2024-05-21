import {useState} from 'react'
import User from './User.jsx'
import Callback from './Callback.jsx';
import { useEffect } from "react";

function My_component() {
  const userdata = {
    name : "Rajesh",
    age : 20
  }
  
  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(30)
  const handleAdd = () => {
    setNum1(num1+=1)
  }
  const handleAdd2 = () => {
    setNum2(num2+=1)
  }
  const handleSubtract = () => {
      setNum1((currentValue) => { // Other way to use set function
        if (currentValue > 0) {
          return currentValue - 1;
        }
        return 0;
        
    });
      
  }


  useEffect(()=>{
    setNum2(200)
    return () =>  { // Used for memory cleaning
      setNum2(200)
    };
  }, [num1])

  console.log(num1)

  return (<>
  <h1>Hello World</h1>
  <div>
    <h1>{num1}</h1>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleSubtract}>Subtract</button>

    <h1>{num2}</h1>
    <button onClick={handleAdd2}>Add</button>
  </div>
  <User 
    username={userdata.name} 
    userage={userdata.age}
  />

    <Callback />
  </>)
}

export default My_component