import { Skeleton } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

export const Skeletons = () => {
  return (
    <Container maxWidth="xxl">
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
      <Skeleton
        variant="rounded"
        width="100%"
        height={150}
        sx={{ marginBottom: "1em" }}
      />
    </Container>
  );
};
