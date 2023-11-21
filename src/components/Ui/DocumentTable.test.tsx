import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { DocumentTable } from './DocumentTable/DocumentTable'
import { ThemeProvider } from "@mui/material";
import { appTheme } from '../theme/theme';
import Document from '../../data/contracts/Document';

const list: Document[] = [
    {
        resource_id: 'test_id',
        name: 'test_name',
        categoryId: 'test_category_id',
        file: 'test_file',
        preview: 'test_preview',
        sizes: [{ url: 'test_url' }],
        category: 'test_category',
        path: 'test_path'
    }
]

describe('DocumentTable component', () => {
    test('Render', () => {
        render(
            <BrowserRouter>
                <ThemeProvider theme={appTheme}>
                    <DocumentTable
                        headerNames={['test_category_1', 'test_category_2']}
                        documentList={list}

                    />
                </ThemeProvider>
            </BrowserRouter>
        )
        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(screen.getByText('test_category_1')).toBeInTheDocument();
        expect(screen.getByText('test_category_2')).toBeInTheDocument();
    })

    test('DocumentTable snapshot', () => {
        const documentTable = render(
            <BrowserRouter>
                <ThemeProvider theme={appTheme}>
                    <DocumentTable
                        headerNames={['test_category_1', 'test_category_2']}
                        documentList={list}

                    />
                </ThemeProvider>
            </BrowserRouter>
        )
        expect(documentTable).toMatchSnapshot();
    })

    test('Render without data', () => {
        render(
            <BrowserRouter>
                <ThemeProvider theme={appTheme}>
                    <DocumentTable />
                </ThemeProvider>
            </BrowserRouter>
        )

        expect(screen.getByRole('table')).toBeInTheDocument();
    })
})