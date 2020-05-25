// The same React hooks are available on the same package
import {
  html,
  useEffect,
} from 'https://unpkg.com/htm/preact/standalone.module.js'

export function Header({ title, children }) {
  useEffect(() => {
    document.title = new Date()
  }, [title])

  return html`
    <header>
      <h1>${title}</h1>
      ${children}
    </header>
  `
}
