import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'

test('Footer component', () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    )
})