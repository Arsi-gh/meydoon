import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import ItemModal from "@/components/modals/itemModal";
import ModalProvider from "@/context/modalProvider";
import RefProvider from "@/context/refProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <RefProvider>
      <ModalProvider>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
        <ItemModal/>
      </ModalProvider>
    </RefProvider>
  );
}
