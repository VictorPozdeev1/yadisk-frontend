import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

describe('Header component', () => {
    test('Header render', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })

    test('Header snapshot', () => {
        const header = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )

        expect(header).toMatchSnapshot();
    })
})