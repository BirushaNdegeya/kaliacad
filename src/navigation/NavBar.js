import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { pages } from "../data/Data";
import kalibackground from "../images/Kali_academy_-_Logo-gris.png";
import { navigate } from "gatsby";

function NavBar() {
  // const nav = useNavigate();

  const gotHomeTitleMenu = (e) => {
    if (e === 1) {
      navigate("/");
    } else if (e === 3) {
      navigate("/blog");
    } else if (e === 4) {
      navigate("/publieoffre");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            // position: "absolute",
            margin: 15,
            marginLeft: 45,
            background: "none",
          }}
        >
          <img
            src={kalibackground}
            alt="Kali academy"
            style={{
              width: "auto",
              height: 80,
              display: "block" /* Supprime l'espace réservé sous l'image */,
              margin: "0 auto",
              objectFit: "cover",
              cursor: "pointer",
              background: "none",
            }}
            onClick={() => navigate("/")}
          />
        </div>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", justifyContent: "center" },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.id}
              sx={{
                my: 2,
                color: "#000",
                display: "block",
                fontWeight: "bold",
              }}
              onClick={() => gotHomeTitleMenu(page.id)}
            >
              {page.title}
            </Button>
          ))}
        </Box>
      </div>
      <Stack justifyContent={"center"} direction={"column"} mt={2}>
        <Typography
          variant="h4"
          textAlign={"center"}
          color={"#000"}
          fontWeight={"bold"}
        >
          CATALYSEUR DE LA CONTRIBUTION OPEN SOURCE
        </Typography>
        <Typography variant="h6" textAlign={"center"} color={"#000"}>
          changer le monde grâce au code
        </Typography>
      </Stack>
    </div>
  );
}

export default NavBar;
