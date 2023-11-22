import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@mui/material";
import { appTheme } from '../../../theme/theme';
import MobileMenu from './MobileMenu';
import userEvent from '@testing-library/user-event';

const onClose = jest.fn()

describe('MobileMenu component', () => {
    test('Render component', () => {
        render(
            <BrowserRouter>
                <ThemeProvider theme={appTheme}>
                    <MobileMenu
                        open={true}
                        onClose={onClose}
                    />
                </ThemeProvider>
            </BrowserRouter>
        )

        expect(screen.getByText('Все документы')).toBeInTheDocument();
        expect(screen.getByRole('link')).toBeInTheDocument();
        
        userEvent.click(screen.getByRole('button'))
        expect(onClose).toBeCalled();

        userEvent.click(screen.getByTestId('drawer'))
        expect(onClose).toBeCalled();

        userEvent.click(screen.getByTestId('navlink'))
        expect(onClose).toBeCalled();

    })

    test('MobileMenu snapshot', () => {
        const mobileMenu = render(
            <BrowserRouter>
                <ThemeProvider theme={appTheme}>
                    <MobileMenu
                        open={true}
                        onClose={onClose}
                    />
                </ThemeProvider>
            </BrowserRouter>
        )
        expect(mobileMenu).toMatchSnapshot();
    })
})