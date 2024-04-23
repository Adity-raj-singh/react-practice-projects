// AdminPanel.js
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BasicModal from './Modal';

export default function AdminPanel() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const [rowData, setRowData] = useState({});
    const [openModal, setOpenModal] = useState(false); 

    useEffect(() => {
        async function handleFetchData() {
            const response = await axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
            setData(response.data)
            setFilteredData(response.data)
        };

        handleFetchData();
    }, []);

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
        handleSearch(e.target.value);
    }

    const handleSearch = (query) => {
        const filtered = data.filter((row) =>
            row.firstName.toLowerCase().includes(query.toLowerCase()) ||
            row.lastName.toLowerCase().includes(query.toLowerCase()) ||
            row.email.toLowerCase().includes(query.toLowerCase()) ||
            row.phone.toLowerCase().includes(query.toLowerCase()) ||
            row.id.toString().toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    }

    const getRowData = (data) => {
        setRowData(data);
        setOpenModal(true); // Open modal when row is clicked
    }

    return (
        <div>
            <input
                type='text'
                value={searchQuery}
                onChange={handleInputChange}
                placeholder='Search By ...'
            />

            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                                onClick={() => getRowData(row)} // Trigger function to get row data
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.firstName}</TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pass rowData and openModal as props to the modal */}
            <BasicModal data={rowData} open={openModal} setOpen={setOpenModal} />
        </div>
    )
}
