import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './Sidebar'

describe('Sidebar component', () => {
    test('Sidebar render', () => {
        render(
            <BrowserRouter>
                <Sidebar
                />
            </BrowserRouter>
        )
        expect(screen.getByText('Все документы')).toBeInTheDocument();
    })

    test('Sidebar snapshot', () => {
        const sidebar = render(
            <BrowserRouter>
                <Sidebar
                />
            </BrowserRouter>
        )
        expect(sidebar).toMatchSnapshot();
    })

    test('Navigation works', () => {
        render(
            <BrowserRouter>
                <Sidebar
                />
            </BrowserRouter>
        )
        const navLink = screen.getByTestId('toggle-go-home-btn')
        const toggleDiv = screen.getByTestId('toggle-el')
        fireEvent.click(navLink)
        expect(navLink).toHaveStyle({ color: 'rgb(3, 95, 162)' })
        expect(toggleDiv).toHaveStyle({ backgroundColor: '#ffffff', borderRadius: '7px' })
    })
})