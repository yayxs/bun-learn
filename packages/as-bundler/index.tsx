import * as ReactDOM from 'react-dom/client'
import { Component } from './Component.tsx'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<Component message='bun!' />)
