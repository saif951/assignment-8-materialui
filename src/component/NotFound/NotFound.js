import React from "react";
import { Box, Container } from "@material-ui/core";

const NotFound = () => {
  return (
    <Box py="2rem">
      <Container maxWidth="lg">
        <div style={{ textAlign: "center" }} py="2.5rem">
          <h2 style={{ padding: "20px 0" }}>404! Not Found</h2>
        </div>
        <div>
          <img
            src="https://giphy.com/gifs/error-retrowave-404-WQOIEQRgiK722l3PQT"
            alt=""
          />
        </div>
      </Container>
    </Box>
  );
};

export default NotFound;
