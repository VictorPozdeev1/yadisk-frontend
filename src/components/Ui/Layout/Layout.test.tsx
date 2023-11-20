import { render, screen } from '@testing-library/react'
import Layout from './Layout'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Main } from '../Main/Main'

describe('Layout', () => {
    test('Layout render', () => {
        render
            (<Layout
                header={<Header />}
                main={
                    <Main
                        title='title'
                    />
                }
                sidebar={<Sidebar />}
            />)
    })

    test('Layout render without data', () => {
        render
            (<Layout
                header={<></>}
                main={<></>}
                sidebar={<></>}
            />)

    })
})