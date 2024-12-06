import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Container>
          <Banner />
          <Content />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
