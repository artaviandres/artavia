import Menu from '../components/Menu';
import typographies from "../style/typographies";
import theme from '../style/variables';

export default () => (
    <div>
        <div className="salute">
            <p>
                HEY!
                <br />
                HOLA!
                <br />
                BONJOUR!
                <br />
                OLÁ!
                <br />
                你好!
                <br />
                HALLO!
            </p>
        </div>
        <div className="container">
            <Menu />
        </div>
        <style jsx>{`
            ${typographies}
            .container {
                width: 55%;
                float: left;
                background-color: white;
                height: 100vh;
            }
            .container p {
                margin: 0 auto;
            }
            .salute {
                width: 45%;
                float: left;
            }
            .salute p {
                font-family: ${theme.fonts.bolditalic};
                font-size: 120px;
                margin-top: -50px;
            }
        `}</style>
    </div>
)