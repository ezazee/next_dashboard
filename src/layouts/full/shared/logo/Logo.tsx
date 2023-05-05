import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";
import logo from '../../../../../public/images/logo/logo.png';

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
  marginTop: "30px",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src={logo}alt="Sirace" width={200} priority />
    </LinkStyled>
  );
};

export default Logo;
