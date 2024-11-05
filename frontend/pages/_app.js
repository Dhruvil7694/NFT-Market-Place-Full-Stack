import "../styles/global.css";
import { NavBar, Footer } from "../components/componentIndex";
import { NextUIProvider } from "@nextui-org/react";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <NextUIProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </NextUIProvider>
  </div>
);

export default MyApp;
