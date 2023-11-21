import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@mui/material";
import { DocumentTableRow } from './DocumentTableRow';
import { appTheme } from '../../../theme/theme';

test('DocumentTable component', () => {
    render(
        <BrowserRouter>
            <ThemeProvider theme={appTheme}>
                <DocumentTableRow />
            </ThemeProvider>
        </BrowserRouter>
    )

    expect(screen.getByRole('row')).toBeInTheDocument();

    const select = screen.getByTestId('test_select')
    fireEvent.change(select)

    const viewBtn = screen.getByTestId('view_btn')
    fireEvent.click(viewBtn)

    const deleteBtn = screen.getByTestId('delete_btn')
    fireEvent.click(deleteBtn)
})