import './App.css';
import React, { createContext,useContext,useState } from "react";

/**
 * Have to declare outside any component the context, 
 * if a component cosume this context, directly and no provider gave to the component
 * the value is going to be this default value
 */
const context_1 = createContext('contexto predeterminado')
const contextAction = createContext({'value': 'algo', 'action': ()=> {}})

// This component will provide a specific context 
function ProviderCtx1 ( {children,value }) {

  return(
    <context_1.Provider value={value}>
      { children }
    </context_1.Provider>
  )
}


function ProviderAction( {children} ) {

  const [value,setValue] = useState(false)
  
  const obj = {
    value,
    'action': () => setValue(!value)
  }
  
  return(
    <contextAction.Provider value={obj}>
      {children}
    </contextAction.Provider>
  )
}

// Component cosuming the context created 
function Content () {
  const ctx = useContext(contextAction)
  
  return(
    <>
      <p>{ctx.value.toString()}</p>
      <button onClick={ctx.action}>Go</button>
    </>
  )
}


function App() {
  return (
    <div>
      {/* The provider allways has to have a value */}
      <ProviderAction>
        <Content />
      </ProviderAction>
    </div>
  );
}

export default App;
