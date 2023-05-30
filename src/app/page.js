import Main from "./Main";
import Navbar from "./Navbar";
import Footer from "./Footer";
import style from "./styles/main.module.scss"
import 'remixicon/fonts/remixicon.css'

export default function Home() {
  return (
    <main className={`${style.app__layout}`}>
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
}
