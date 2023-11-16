import { render, screen } from '@testing-library/react'
import Layout from './Layout'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'

describe('Layout', () => {
    test('Layout render', () => {
        render
            (<Layout
                header={<Header />}
                footer={<Footer />}
                sidebar={<Sidebar />}
            />)
        expect(screen.queryByTestId('header_test')).toBeInTheDocument()
        expect(screen.queryByTestId('sidebar_test')).toBeInTheDocument()
        expect(screen.queryByTestId('footer_test')).toBeInTheDocument()
    })

    test('Layout render without data', () => {
        render
            (<Layout
                header={<></>}
                footer={<></>}
                sidebar={<></>}
            />)
        expect(screen.queryByTestId('header_test')).toBeNull()
        expect(screen.queryByTestId('sidebar_test')).toBeNull()
        expect(screen.queryByTestId('footer_test')).toBeNull()

    })
})