import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import ErrorSnackbar from './ErrorSnackbar';

test('ErrorSnackbar component', () => {
    render(
        <BrowserRouter>
            <ErrorSnackbar />
        </BrowserRouter>
    )
})