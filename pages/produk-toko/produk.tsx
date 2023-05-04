import type { ReactElement } from 'react';
import FullLayout from '../../src/layouts/full/FullLayout';
import { Grid } from '@mui/material';
import PageContainer from '../../src/components/container/PageContainer';
import ProdukProduk from '../../src/components/dashboard/produk-produk';


const Produk = () => {
  return (
    <PageContainer title="Typography" description="this is Typography">

      <Grid xs={12} lg={8}>
            <ProdukProduk />
      </Grid>
    </PageContainer>
  );
};

export default Produk;
Produk.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};