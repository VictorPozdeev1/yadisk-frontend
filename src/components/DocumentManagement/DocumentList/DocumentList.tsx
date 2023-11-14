import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Box, IconButton, Select, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import styles from './DocumentList.module.css';

interface Document {
    id: number;
    title: string;
    category: string;
}

interface DocumentListProps {
    documents: Document[];
    currentCategory: string;
}

const categoryTitleStyle = {
    width: '100%',
    fontFamily: 'Manrope',
    fontWeight: 700,
    fontSize: '36px',
    marginLeft: '4%'
};

function DocumentList({ documents, currentCategory }: DocumentListProps) {
    return (
        <div className={styles.documentListContainer}>
            <Typography variant="h4" gutterBottom style={categoryTitleStyle}>
                {currentCategory}
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontSize: '24px', textAlign: 'center' }}>Документ</TableCell>
                            <TableCell style={{ fontSize: '24px', textAlign: 'center' }}>Категория</TableCell>
                            <TableCell style={{ fontSize: '24px', textAlign: 'center' }}>Действия</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {documents.map((document) => (
                            <TableRow key={document.id}>
                                <TableCell style={{ fontSize: '20px', textAlign: 'center' }}>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <FolderIcon fontSize="small" style={{ marginRight: '10px' }}/>
                                        <div style={{ textAlign: 'center' }}>{document.title}</div>
                                    </Box>
                                </TableCell>

                                <TableCell style={{ fontSize: '20px', textAlign: 'center' }}>
                                    {document.category}
                                </TableCell>
                                <TableCell style={{ fontSize: '20px', textAlign: 'center' }}>
                                    <Select>
                                        <MenuItem value="Category1">Category 1</MenuItem>
                                        <MenuItem value="Category2">Category 2</MenuItem>
                                        <MenuItem value="Category3">Category 3</MenuItem>
                                    </Select>
                                    <IconButton color="secondary" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default DocumentList;
