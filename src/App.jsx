import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Импортируем createElement из React для создания элементов без JSX
import { createElement } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // Вместо JSX используем React.createElement() или document.createElement()
  // НО! Для создания React-элементов нужно использовать React.createElement()
  // а НЕ document.createElement()

  return createElement('div', null,
    createElement('div', null,
      createElement('a',
        { href: 'https://vitejs.dev', target: '_blank' },
        createElement('img', {
          src: viteLogo,
          className: 'logo',
          alt: 'Vite logo'
        })
      ),
      createElement('img', {
        src: reactLogo,
        className: 'logo react',
        alt: 'React logo'
      })
    ),
    createElement('h1', null, 'Vite + React'),
    createElement('div', { className: 'card' },
      createElement('button',
        { onClick: () => setCount((count) => count + 1) },
        `count is ${count}`
      ),
      createElement('p', null,
        'Edit ',
        createElement('code', null, 'src/App.jsx'),
        ' and save to test HMR'
      )
    )
  )
}

export default App
