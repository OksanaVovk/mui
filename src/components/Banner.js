import { Box, Typography } from "@mui/material";
import StyledButton from "./StyledButton";

const Banner = () => {
  return (
    <Box
      sx={{
        padding: { xs: "40px 0 50px 0" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          marginRight: { md: "30px" },
        }}
      >
        <img
          src="/images/banner-cat1.png"
          alt="cat"
          style={{ width: "100%", objectFit: "contain" }}
        />
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{
            marginBottom: { xs: "20px", md: "25px" },
          }}
        >
          Our motto
        </Typography>
        <Typography
          variant="h1"
          sx={{
            marginBottom: { xs: "20px", md: "25px" },
            fontSize: { xs: "3rem", md: "5rem" },
          }}
        >
          Help animals
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: { xs: "20px", md: "25px" },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        </Typography>
        <StyledButton>Donate</StyledButton>
      </Box>
    </Box>
  );
};
export default Banner;
