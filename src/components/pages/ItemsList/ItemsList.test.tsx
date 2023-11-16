import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ItemsList from './ItemsList'

test('List component', () => {
    render(
        <BrowserRouter>
            <ItemsList
              
            />
        </BrowserRouter>
    )

})