import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DashboardCard from "../shared/DashboardCard";
import Link from "next/link";

import { IShoes } from "../../../types/shoes";

export const getInitials = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");

interface Props {
  data: IShoes[];
}

const ProdukProduk = (props: Props) => {
  return (
    <DashboardCard title="Produk Baru">
      <Button className="bg-green-900" variant="contained">
        Tambah Produk
      </Button>
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
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
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props?.data?.map((product: IShoes) => (
              <TableRow key={product?.id}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {product?.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack alignItems="center" direction="row" spacing={2}>
                    <Avatar src={product?.image}>
                      {getInitials(product?.image)}
                    </Avatar>
                    <Typography variant="subtitle2">{product.name}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip size="small" label={product?.category}></Chip>
                </TableCell>
                <TableCell align="right">
                  <Link href={"#"}>
                    {" "}
                    <Button
                      className="bg-green-900"
                      variant="contained"
                      size="small"
                    >
                      Edit
                    </Button>{" "}
                  </Link>
                  <IconButton aria-label="delete" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default ProdukProduk;