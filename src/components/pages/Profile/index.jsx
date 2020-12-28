import * as React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function Profile() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Profile
      </Typography>
      <Typography variant="body1" gutterBottom>
        Profile Page
      </Typography>
    </Container>
  );
}

export default Profile;
