import { ReactElement, useEffect, useState } from "react";
import FullLayout from "../../src/layouts/full/FullLayout";
import { Grid } from "@mui/material";
import PageContainer from "../../src/components/container/PageContainer";
import ProdukProduk from "../../src/components/dashboard/produk-produk";
import { BackendFetch } from "../../lib/axios";
import { IShoes } from "../../types/shoes";

const Produk = () => {
  const [data, setData] = useState<IShoes[]>([]);
  const fe = async () => {
    const a = await BackendFetch("/api/dataShoes", {
      method: "GET",
    });
    setData(a.data.shoes);
  };

  useEffect(() => {
    fe();
  }, []);

  return (
    <PageContainer title="Produk Toko" description="Produk Produk Toko">
      <Grid xs={12} lg={8}>
        <ProdukProduk data={data} />
      </Grid>
    </PageContainer>
  );
};

export default Produk;
Produk.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};