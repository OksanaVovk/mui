import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuLarge from "./MenuLarge";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconNavigation from "./IconNavigation";
import MenuSmall from "./MenuSmall";

const Header = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <AppBar
      sx={{
        backgroundColor: (theme) => theme.palette.body_bg.main,
        height: { xs: "64px", md: "79px" },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {isMobile && <MenuSmall />}
        <Typography
          variant="h6"
          sx={{
            display: "inline-block",
            width: "auto",
            textAlign: { xs: "center", md: "start" },
            color: (theme) => theme.palette.primary.main,
          }}
        >
          Cats&friends
        </Typography>
        {!isMobile && <MenuLarge />}
        {!isMobile && <IconNavigation />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
