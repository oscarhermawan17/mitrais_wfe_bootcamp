import React from 'react'
import { render } from 'react-dom'

const Test = () => <h1>Oke</h1>

render(
    <Test/>,
    document.getElementById('target')
)