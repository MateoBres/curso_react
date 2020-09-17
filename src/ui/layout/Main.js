import React from 'react'
import {connect} from 'react-redux'

const Main=({contador,aumentarContador,resetearContador,restarContador}) =>
      <main>
        <h2>Home</h2>
        <p>El contador esta' en : {contador}</p>
        <button onClick={aumentarContador}>+</button>
        <button onClick={resetearContador}>resetear</button>
        <button onClick={restarContador}>-</button>
      </main>


export default connect(
  ({contador})=>({contador})
  )(Main)