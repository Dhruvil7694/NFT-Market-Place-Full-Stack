import "../styles/global.css";
import { NavBar, Footer } from "../components/componentIndex";
import { NFTMarketPlaceProvider } from "@/Context/NFTMarketPlaceContext";
const MyApp = ({ Component, pageProps }) => (
  <div>
    {/* By wrapping the whole application in NFTMarketPlaceProvider tag, whatever
    data we provide in value (Context/NFTMarketPlaceContext) in this we provide
    data and that will be avaliabe for whole application. */}
    <NFTMarketPlaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketPlaceProvider>
  </div>
);

export default MyApp;
