import React from "react";
import Image from "react-bootstrap/Image";
import backgroundFooter from "../Assets/backgroundFooter.png";
import QRCode from "../Assets/qrCode.png";
import videoFooter from "../Assets/videoFooter.png"
import markets from "../Assets/markets.png"
import Cutlerly from "../Assets/cutlerly.png";
import "../Styles/FooterStyles.css";
import twitterIcon from "../Assets/twitter.png"
import facebookIcon from "../Assets/facebook.png"
import instagramIcon from "../Assets/instagram.png"
import Button from "react-bootstrap/Button";
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
        <img
          className="Cutlerly"
          alt=""
          width="60"
          height="80"
          src={Cutlerly}
        />
        <h4 className="muyPronto">Muy pronto en: </h4>
        <img
          className="videoFooter"
          alt=""
          width="270"
          height="170"
          src={videoFooter}
        />
        <img className="markets" alt="" width="350" height="55" src={markets} />

        <div className="lineHorizontal__container">
          <div className="lineHorizontal"></div>
        </div>
        <div className="lineHorizontal__container">
          <div className="lineHorizontal2"></div>
        </div>

        <h5 className="contactanos">Contáctanos</h5>
        <h5 className="number">+57 300 2810932</h5>
        <img
          className="facebookIcon"
          alt=""
          width="20"
          height="20"
          src={facebookIcon}
        />
        <img
          className="twitterIcon"
          alt=""
          width="20"
          height="20"
          src={twitterIcon}
        />
        <img
          className="instagramIcon"
          alt=""
          width="20"
          height="20"
          src={instagramIcon}
        />
        <h5 className="tienesHambre">¿Tienes hambre?</h5>
        <Button className="buttonIngresa" variant="primary" size="sm">
          INGRESA
        </Button>
        <h5 className="copyright">
          ©2020 Copyright, All Rights Reserved by Nearby
        </h5>
        <h3 className="terminos">Terminos y condiciones</h3>
        <h3 className="politicas">Politicas de privacidad</h3>
        <h3 className="ayuda">Ayuda</h3>
      </div>
    );
  }
}
export default Footer;
