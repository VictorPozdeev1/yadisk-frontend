import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Component404 from './Component404'

test('Render Component404', () => {
    render(
        <BrowserRouter>
            <Component404
            />
        </BrowserRouter>
    )
    
    expect(screen.getByText('Page not found')).toBeInTheDocument();
})