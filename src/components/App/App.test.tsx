import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

test('App render', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
})