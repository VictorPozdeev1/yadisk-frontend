import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Spinner from './Spinner'

test('Spinner component', () => {
    render(
        <BrowserRouter>
            <Spinner
            />
        </BrowserRouter>
    )

})