
import '../src/App.css'
// eslint-disable-next-line no-unused-vars
import React from "react";
import FlipCard from './Components/FlipCard'
import '../src/styles/testimonio.css'
import '../src/styles/FlipCard.css'

function App(){
  return(
    <div className='App'>
      
      <div className='container'>
         <FlipCard
         imagen='AA72F'
         imagenp='AA72'
         name='AA72'
         numero='01'
         color='blue'
         tipo='Agua'
         arma='Rango'
         />
         <FlipCard
         imagen='aisha'
         imagenp='AA72'
         name='Aisha'
         numero='02'
         color='Green'
         tipo='Luz'
         arma='Melee'
         />


         
      </div>
    </div>
    
  )
}
export default App
