import { Container, Box, useTheme } from "@mui/material";

interface IPageContainer {
  children: any;
}

export default function PageContainer({ children }: IPageContainer) {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Box
        sx={{
          width: "90vw",
          minHeight: "75vh",
          backgroundColor: theme.palette.secondary.light,
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "10px",
          boxShadow: `5px 5px 10px ${theme.palette.secondary.dark}`,
        }}
      >
        {children}
      </Box>
    </Container>
  );
}
