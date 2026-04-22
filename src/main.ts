import './style.css'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>

    <h1>E-Commerce Project</h1>

    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
