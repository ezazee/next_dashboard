import type { ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from '../src/components/container/PageContainer';

// components
import KenaikanPenjualan from '../src/components/dashboard/kenaikan-penjualan';
import PendapatanTahunan from '../src/components/dashboard/pendapatan-tahunan';
import RiwayatTransaksi from '../src/components/dashboard/riwayat-transaksi';
import ProdukDashboard from '../src/components/dashboard/produk-dashboard';
import PendapatanBulanan from '../src/components/dashboard/pendapatan-bulanan';
import FullLayout from '../src/layouts/full/FullLayout';

export default function Home() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <KenaikanPenjualan />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <PendapatanTahunan />
              </Grid>
              <Grid item xs={12}>
                <PendapatanBulanan />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RiwayatTransaksi />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProdukDashboard />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};