import React from "react";
import Images from "./images";

import { CssBaseline, Typography, Container } from "@material-ui/core";

function Hero() {
  return (
    <>
      <div style={{ height: "100%" }}>
        <Container maxWidth="xl">
          <Typography
            component="div"
            style={{
              backgroundColor: "#cfe8fc",
              height: "80vh",
              margin: "auto",
            }}
          />
        </Container>
      </div>
    </>
  );
}

export default Hero;
