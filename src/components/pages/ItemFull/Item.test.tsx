import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ItemFull from './ItemFull'

test('ItemFull component', () => {
    render(
        <BrowserRouter>
            <ItemFull
            />
        </BrowserRouter>
    )

})