import React from "react";
import { Box, LinearProgress, styled, Typography } from "@mui/material";

// styled components
const BoxLoading = styled(Box)({
  width: "25%",
  margin: "1% auto",
  padding: 100,
});

const LoadingBar = styled(LinearProgress)({
  margin: "auto",
});

const LoadingText = styled(Typography)({
  textAlign: "center",
  padding: 10,
  fontWeight: "bold",
});

// end of styled components

const Loader = () => {
  return (
    <BoxLoading>
      <LoadingBar />
      <LoadingText variant="span">Loading</LoadingText>
    </BoxLoading>
  );
};

export default Loader;
