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
                    <Main />
                </ThemeProvider>
            </BrowserRouter>
        )

        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(screen.getByText('Все документы')).toBeInTheDocument();
    })

    test('Main snapshot', () => {
        const main = render(
            <BrowserRouter>
                <ThemeProvider theme={appTheme}>
                    <Main />
                </ThemeProvider>
            </BrowserRouter>
        )
        expect(main).toMatchSnapshot();
    })
})