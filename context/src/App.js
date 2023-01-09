import React, { createContext, useContext, useState } from "react";


const contextCont = createContext(0)

function ContProvider( {children}) {
  const [ cont, setCont ] = useState(0)

  const increment = () => setCont(cont => cont + 1)
  const decrement = () => setCont(cont => cont - 1)

  return (
    <contextCont.Provider value={{cont,increment,decrement}}>
      { children }
    </contextCont.Provider>
  )
}

function DecrementBtn() {

  const {decrement} = useContext(contextCont)
  
  return(
    <button onClick={decrement}>decrement</button>
  )
}
function IncrementBtn() {

  const {increment} = useContext(contextCont)
  
  return(
    <button onClick={increment}>increment</button>
  )
}

function Label() {

  console.log("label");
  const {cont} = useContext(contextCont)
  return(
    <label>{cont}</label>
  )
}


function App() {
  return(
    <ContProvider>
      <Label />
      <br />
      <IncrementBtn />
      <br />
      <DecrementBtn />
    </ContProvider>
  )
}

export default App