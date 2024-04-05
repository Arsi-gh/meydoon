import Header from "@/components/global/header";
import ItemModal from "@/components/modals/itemModal";
import ModalProvider from "@/context/modalProvider";
import "@/styles/globals.css";
import { Head } from "next/document";

export default function App({ Component, pageProps }) {
  return (
    <>
    
    <ModalProvider>
      <Header/>
      <Component {...pageProps} />
      <ItemModal/>
    </ModalProvider>
    </>
  );
}
