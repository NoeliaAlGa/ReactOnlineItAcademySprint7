import { Link } from "react-router-dom";
import {ButtonHome, HomeStyle, StyleH1, StyleP} from '../components/styled'

const Home = () => <HomeStyle>
    <StyleH1>Presupuestos Online</StyleH1>
    <StyleP>¡Calcula tus presupuestos de forma rápida y sencilla!</StyleP>
    <ButtonHome><Link to="/page2">Iniciar</Link></ButtonHome>
</HomeStyle>;
export default Home;