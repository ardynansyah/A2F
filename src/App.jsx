import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-8 bg-slate-950 px-6 text-center text-slate-100">
      <div className="flex items-center gap-6">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img src={viteLogo} alt="Vite logo" className="h-20 w-20" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
          className="transition-opacity hover:opacity-80"
        >
          <img
            src={reactLogo}
            alt="React logo"
            className="h-20 w-20 [animation:spin_10s_linear_infinite]"
          />
        </a>
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          React + Tailwind CSS
        </h1>
        <p className="text-slate-400">
          Edit{' '}
          <code className="rounded bg-slate-800 px-2 py-1 font-mono text-sm text-sky-300">
            src/App.jsx
          </code>{' '}
          dan simpan untuk mencoba HMR.
        </p>
      </div>

      <button
        type="button"
        onClick={() => setCount((value) => value + 1)}
        className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 active:scale-95"
      >
        Count is {count}
      </button>

      <p className="text-sm text-slate-500">
        Tailwind utility classes aktif ✅
      </p>
    </main>
  )
}

export default App
