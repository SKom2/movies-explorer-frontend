import styles from './Main.module.css'
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Header from "../Common/Header/Header";
import Footer from "../Common/Footer/Footer";

export default function Main(props) {
    return (
        <section className={styles.main}>
            <Header isLoggedIn={props.isLoggedIn}/>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </section>
    )
}
