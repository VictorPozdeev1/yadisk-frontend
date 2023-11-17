import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './Sidebar'

test('Sidebar component', () => {
    render(
        <BrowserRouter>
            <Sidebar
            />
        </BrowserRouter>
    )

})