import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { List, ListItemButton } from "@mui/material";
const IconNavigation = () => {
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <ListItemButton
        sx={{
          borderRight: (theme) => `solid 1px ${theme.palette.light.main}`,
          paddingLeft: { lg: "25px" },
          paddingRight: { lg: "25px" },
        }}
      >
        <FavoriteIcon sx={{ fill: (theme) => theme.palette.light.main }} />
      </ListItemButton>
      <ListItemButton
        sx={{
          borderRight: (theme) => `solid 1px ${theme.palette.light.main}`,
          paddingLeft: { lg: "25px" },
          paddingRight: { lg: "25px" },
        }}
      >
        <PersonIcon sx={{ fill: (theme) => theme.palette.light.main }} />
      </ListItemButton>
      <ListItemButton
        sx={{
          paddingLeft: { lg: "25px" },
          paddingRight: { lg: "25px" },
        }}
      >
        <NotificationsIcon
          sx={{
            fill: (theme) => theme.palette.light.main,
          }}
        />
      </ListItemButton>
    </List>
  );
};

export default IconNavigation;
