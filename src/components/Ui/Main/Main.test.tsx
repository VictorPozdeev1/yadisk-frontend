import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Main } from './Main'
import { ThemeProvider } from "@mui/material";
import { appTheme } from '../../theme/theme';

describe('Main component', () => {
    test('Main render', () => {
        render(
            <BrowserRouter>
                <ThemeProvider theme={appTheme}>
                    <Main
                        title='test_title'
                    />
                </ThemeProvider>
            </BrowserRouter>
        )

        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getByText('test_title')).toBeInTheDocument();
    })

    test('Main snapshot', () => {
        const main = render(
            <BrowserRouter>
                <ThemeProvider theme={appTheme}>
                    <Main
                        title='test_title'
                    />
                </ThemeProvider>
            </BrowserRouter>
        )
        expect(main).toMatchSnapshot();
    })

    test('Main render widtout data', () => {
        render(
            <BrowserRouter>
                <ThemeProvider theme={appTheme}>
                    <Main />
                </ThemeProvider>
            </BrowserRouter>
        )

        expect(screen.getByText('Все категории')).toBeInTheDocument();

    })
})