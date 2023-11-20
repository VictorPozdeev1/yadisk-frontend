import { render, screen } from '@testing-library/react'
import Item from './Item'
import { BrowserRouter } from 'react-router-dom'

describe('Item component', () => {
    test('Item render', () => {
        const { getByAltText } = render(
            <BrowserRouter>
                <Item
                    src={'test_src'}
                    name={'test_name'}
                    url={'https://yandex.ru'}
                    id={'test_id'}
                    category={'test_category'}
                />
            </BrowserRouter>
        )
        expect(document.getElementById('test_id')).toBeInTheDocument();
        expect(screen.getAllByRole('link')).toBeTruthy();
        const image = getByAltText('test_name')
        expect(image).toHaveAttribute('src', 'test_src');
        expect(screen.getByAltText(/test_name/i)).toBeInTheDocument();
    })

    test('Item snapshot', () => {
        const item = render(
            <BrowserRouter>
                <Item
                    src={'test_src'}
                    name={'test_name'}
                    url={'https://yandex.ru'}
                    id={'test_id'}
                    category={'test_category'}
                />
            </BrowserRouter>
        )
        expect(item).toMatchSnapshot();
    })
})