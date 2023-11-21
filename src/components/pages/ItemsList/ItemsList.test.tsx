import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import ItemsList from './ItemsList'

// const data = [
//     {
//         src: 'test_src',
//         name: 'test_name',
//         url: 'https://yandex.ru',
//         id: 'test_id1',
//         category: 'test_category'
//     },
//     {
//         src: 'test_src',
//         name: 'test_name',
//         url: 'https://yandex.ru',
//         id: 'test_id2',
//         category: 'test_category'
//     }
// ]

describe('ItemsList component', () => {
    test('Render ItemsList', () => {
        render(
            <BrowserRouter>
                <ItemsList
                    // items={data}
                />
            </BrowserRouter>
        )

    })
})