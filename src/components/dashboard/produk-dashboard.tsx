import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Stack,
    Avatar
} from '@mui/material';
import DashboardCard from '../shared/DashboardCard';

export const getInitials = (name = '') => name
  .replace(/\s+/, ' ')
  .split(' ')
  .slice(0, 2)
  .map((v) => v && v[0].toUpperCase())
  .join('');

const products = [
    {
        id: "1",
        avatar: "https://cdn.discordapp.com/attachments/1055060226858029076/1055060446530523216/airforce_1.png",
        name: "Sunil Joshi",
        kategori: "Man",
        harga: "13.000",
    },
    {
        id: "2",
        avatar: "https://cdn.discordapp.com/attachments/1055060226858029076/1055060446530523216/airforce_1.png",
        name: "Andrew McDownland",
        kategori: "Man",
        harga: "23.000",
    },
    {
        id: "3",
        avatar: "https://cdn.discordapp.com/attachments/1055060226858029076/1055060446530523216/airforce_1.png",
        name: "Christopher Jamil",
        kategori: "Man",
        harga: "16.000",
    },
    {
        id: "4",
        avatar: "https://cdn.discordapp.com/attachments/1055060226858029076/1055060446530523216/airforce_1.png",
        name: "Nirav Joshi",
        kategori: "Man",
        harga: "33.000",
    },
];


const ProdukDashboard = () => {
    return (

        <DashboardCard title="Produk Baru">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    No
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Nama Produk
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Kategori
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Harga
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.id}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Stack
                                        alignItems="center"
                                        direction="row"
                                        spacing={2}
                                    >
                                        <Avatar src={product.avatar}>
                                        {getInitials(product.name)}
                                        </Avatar>
                                        <Typography variant="subtitle2">
                                        {product.name}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        size="small"
                                        label={product.kategori}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">Rp.{product.harga}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default ProdukDashboard;
