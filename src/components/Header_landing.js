import React from "react";
import awesomeLogo from "../images/awesome.svg";

class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <img src={awesomeLogo} alt="" class="header__img" />
        <h1 class="header__title">Crea tu tarjeta de visita</h1>
        <p class="header__text">Crea mejores contactos profesionales de forma fácil y cómoda</p>
        <div class="header__description">
          <div class="header__description-icon">
            <i class="far fa-object-ungroup"></i>
            <p class="header__description-icon-text">Diseña</p>
          </div>
          <div class="header__description-icon">
            <i class="far fa-keyboard"></i>
            <p class="header__description-icon-text">Rellena</p>
          </div>
          <div class="header__description-icon">
            <i class="fas fa-share-alt"></i>
            <p class="header__description-icon-text">Comparte</p>
          </div>
        </div>
        <button class="header__btn">
          <a class="header__link" href="./work-space.html">
            comenzar
          </a>
        </button>
      </header>
    );
  }
}
export default Header;
