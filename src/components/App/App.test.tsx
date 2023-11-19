import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
    test('App render', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    })

    test('Navigation works', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        )
    })
})