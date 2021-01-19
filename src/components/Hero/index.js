import React from "react";
import Images from "./images";
import { CssBaseline, Typography, Container } from "@material-ui/core";

function Hero() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography
          component="div"
          style={{
            backgroundColor: "#cfe8fc",
            height: "100vh",
            margin: "auto",
          }}
        />
      </Container>
    </>
  );
}

export default Hero;
