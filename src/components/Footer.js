import { Box, Typography } from "@mui/material";
import SocialNetworks from "./SocialNetworks";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.black.main,
        color: (theme) => theme.palette.light.main,
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "start",
        justifyContent: "space-between",
        padding: "20px 30px 20px 30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", lg: "50%" },
          marginRight: { lg: "10%" },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontSize: "1rem",
            marginBottom: "10px",
          }}
        >
          About us
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </Typography>
        <SocialNetworks />
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-between",
          width: { xs: "100%", lg: "50%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textTransform: "uppercase", fontSize: "1rem" }}
          >
            Information
          </Typography>
          <Typography variant="body2">Lorem ipsum</Typography>
          <Typography variant="body2">Privacy & Policy</Typography>
          <Typography variant="body2">Terms & Policy</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textTransform: "uppercase", fontSize: "1rem" }}
          >
            My account
          </Typography>
          <Typography variant="body2">Initiatives and projects</Typography>
          <Typography variant="body2">Favorite animals</Typography>
          <Typography variant="body2">My accounts</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
