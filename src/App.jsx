import { useState } from 'react' // Декларативный стиль - описываем что хотим получить
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Декларативный стиль - описываем состояние
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Декларативный стиль - описываем структуру */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* Декларативный стиль - React сам обновит DOM при изменении состояния */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App

/* 
Примечание: В данном React-компоненте преимущественно используется 
ДЕКЛАРАТИВНЫЙ стиль программирования.

Декларативный стиль здесь:
- Описание компонента через JSX
- Управление состоянием через useState
- Автоматическое обновление UI при изменении состояния

Императивный стиль был бы, если бы мы:
- Напрямую манипулировали DOM через document.getElementById()
- Вручную обновляли содержимое элементов
- Пошагово описывали КАК что-то делать, а не ЧТО должно получиться
*/
