/// <reference path="./typing.d.ts" />
import { useCallback, useState } from 'react'
import adapter from './adapter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  const openWallet = useCallback(() => {
    const asyncCall = async () => {
      const ret = await adapter.popupWallet()
      console.info('popup wallet: ', ret)
    }

    void asyncCall()
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/favicon.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>CoinstartWallet + React</h1>
      <div className="card">
        <button className="" onClick={openWallet}>Open wallet</button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
