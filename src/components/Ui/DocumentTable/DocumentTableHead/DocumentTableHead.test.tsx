import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@mui/material";
import { appTheme } from '../../../theme/theme';
import { DocumentTableHead } from './DocumentTableHead';

test('DocumentTable component', () => {
    render(
        <BrowserRouter>
            <ThemeProvider theme={appTheme}>
                <DocumentTableHead
                    headerNames={["test_category_1", "test_category_2"]}
                />
            </ThemeProvider>
        </BrowserRouter>
    )

    expect(screen.getByText('test_category_1')).toBeInTheDocument();
    expect(screen.getByText('test_category_2')).toBeInTheDocument();
})