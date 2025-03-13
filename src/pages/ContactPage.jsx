import React from "react";
import Header from "../components/Header";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div>
      <Header />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          We'd love to hear from you!
        </Typography>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body1" paragraph>
            If you have any questions or feedback, feel free to reach out to us via email:
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href="mailto:capitaltrade818@gmail.com"
              target="_blank"
              sx={{ mx: 2 }}
            >
              Email Us
            </Button>
          </Box>
          <Typography variant="body1" sx={{ mt: 4 }}>
            We're here to assist you, and we aim to respond as quickly as possible!
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
