import typographies from '../style/typographies';
import theme from '../style/variables';

export default () => (
    <div>
        <div className="menu__container">
            <center>
                <a>Home</a>
                <a>About Andrés</a>
                <a>Work History</a>
            </center>
        </div>
        <style jsx>{`
            ${typographies}
            .menu__container {
                width: 100%;
                line-height: 80px;
                height: 80px;
                border-bottom: 1px solid ${theme.colors.black};
            }
            .menu__container a {
                font-family: ${theme.fonts.lightitalic};
                margin-right: 5vw;
                cursor: pointer;
            }
            .menu__container a:hover {
                color: red;
            }
        `}</style>
    </div>
)