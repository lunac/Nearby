import React from "react";
import Image from "react-bootstrap/Image";
import backgroundFooter from "../Assets/backgroundFooter.png";
import QRCode from "../Assets/qrCode.png";
import videoFooter from "../Assets/videoFooter.png"
import markets from "../Assets/markets.png"
import Cutlerly from "../Assets/cutlerly.png";
import "../Styles/FooterStyles.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <Image src={backgroundFooter} fluid />

        <h1 className="conocenos">Conócenos</h1>
        <h3 className="descubrenos">Descubre</h3>
        <h5 className="mejoresPromociones">
          Las mejores promociones en restaurantes cercanos.
        </h5>
        <h3 className="solicitanos">Solicita</h3>
        <h5 className="unCupon">Un cupón de descuento y disfruta.</h5>

        <img className="QRCode" alt="" width="70" height="80" src={QRCode} />
        <img className="Cutlerly" alt="" width="60" height="80" src={Cutlerly} />
        <h3 className="muyPronto">Muy pronto en: </h3>
        <img className="videoFooter" alt="" width="400" height="250" src={videoFooter} />
        <img className="markets" alt="" width="340" height="55" src={markets} />
      </div>
    );
  }
}
export default Footer;
