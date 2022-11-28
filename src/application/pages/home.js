import { Link } from "react-router-dom";
import {ButtonHome, HomeStyle, StyleH1, StyleP, PHome, BodyStyle} from '../components/styled'

const Home = () => 
<BodyStyle>
    <HomeStyle>
        <StyleH1>Presupuestos Online</StyleH1>
        <StyleP>¡Calcula tus presupuestos de forma rápida y sencilla!</StyleP>
        <ButtonHome><Link to="/page2"><PHome>Iniciar</PHome></Link></ButtonHome>
    </HomeStyle>;
</BodyStyle>
export default Home;