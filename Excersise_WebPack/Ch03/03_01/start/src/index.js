import React from 'react'
import { render } from 'react-dom'
import './style.css'

const Greeting = () => <h1>Hello from Reactoooo</h1>

render(
    <Greeting />,
    document.getElementById('target')
)