import {useCallback, useEffect, useState} from 'react'
import './App.css'
import Pokemon from "./Services/Pokemon";
import NintendoStyles from "./CustomThemeComponents/NintendoStyles";

function App() {
  const [input, setInput] = useState(Math.floor(Math.random() * 1010).toString());

  return (
    <div className="App">
        <div className="nes-container with-title is-centered">
            <h1 className="title">Pokedex Mini</h1>
            <div className="nes-field">
                <input type="text" id="name_field" placeholder="insert pokemon name..." value={input} onInput={e => {
                    // @ts-ignore
                    setInput(e.target.value);
                }} className="nes-input" autoFocus/>
            </div>
            <Pokemon name={input}/>
        </div>
        <NintendoStyles />
    </div>
  )
}

export default App
