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

        <h2 className="conocenos">Conócenos</h2>
        <h4 className="descubrenos">Descubre</h4>
        <h6 className="mejoresPromociones">
          Las mejores promociones en restaurantes cercanos.
        </h6>
        <h4 className="solicitanos">Solicita</h4>
        <h6 className="unCupon">Un cupón de descuento y disfruta.</h6>

        <img className="QRCode" alt="" width="70" height="80" src={QRCode} />
        <img className="Cutlerly" alt="" width="60" height="80" src={Cutlerly} />
        <h4 className="muyPronto">Muy pronto en: </h4>
        <img className="videoFooter" alt="" width="270" height="170" src={videoFooter} />
        <img className="markets" alt="" width="340" height="55" src={markets} />
      </div>
    );
  }
}
export default Footer;
