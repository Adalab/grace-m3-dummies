import React from "react";
import "../stylesheets/App.scss";

const Design = props => {
  return (
    <div class="design__form ">
      <h3 class="design__subtitle">COLORES</h3>
      <div class="design__form--items">
        <label for="design1" class="color__box">
          <input class="form__item" type="radio" value="color1" name="design" id="design1" />
          <label for="design1" class="radio_btn"></label>
          <div class="color__one--one"></div>
          <div class="color__two--one"></div>
          <div class="color__three--one"></div>
        </label>
        <label for="design2" class="color__box">
          <input class="form__item" type="radio" value="color2" name="design" id="design2" />
          <label for="design2" class="radio_btn"></label>
          <div class="color__one--two"></div>
          <div class="color__two--two"></div>
          <div class="color__three--two"></div>
        </label>
        <label for="design3" class="color__box">
          <input class="form__item" type="radio" value="color3" name="design" id="design3" />
          <label for="design3" class="radio_btn"></label>
          <div class="color__one--three"></div>
          <div class="color__two--three"></div>
          <div class="color__three--three"></div>
        </label>
        <label for="design4" class="color__box">
          <input class="form__item" type="radio" value="color4" name="design" id="design4" />
          <label for="design4" class="radio_btn"></label>
          <div class="color__one--four"></div>
          <div class="color__two--four"></div>
          <div class="color__three--four"></div>
        </label>
        <label for="design5" class="color__box">
          <input class="form__item" type="radio" value="color5" name="design" id="design5" />
          <label for="design5" class="radio_btn"></label>
          <div class="color__one--five"></div>
          <div class="color__two--five"></div>
          <div class="color__three--five"></div>
        </label>
        <label for="design6" class="color__box">
          <input class="form__item" type="radio" value="color6" name="design" id="design6" />
          <label for="design6" class="radio_btn"></label>
          <div class="color__one--six"></div>
          <div class="color__two--six"></div>
          <div class="color__three--six"></div>
        </label>
      </div>
    </div>
  );
};

export default Design;
