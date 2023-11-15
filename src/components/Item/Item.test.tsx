import { render, screen } from '@testing-library/react'
import Item from './Item'
import { BrowserRouter } from 'react-router-dom'

test('Item component', () => {
    const { getByAltText } = render(
        <BrowserRouter>
            <Item
                src={'test_src'}
                name={'test_name'}
                url={'https://yandex.ru'}
                id={'test_id'}
            />
        </BrowserRouter>
    )
    expect(document.getElementById('test_id')).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toBeTruthy()
    const image = getByAltText('test_name')
    expect(image).toHaveAttribute('src', 'test_src')
    expect(screen.getByAltText(/test_name/i)).toBeInTheDocument()
})