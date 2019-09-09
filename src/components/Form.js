import React from "react";

class Form extends React.Component {
  render() {
    return (
      <section class="folded__menu js-collapsable">
        <div class="form__box js-collapsable-header">
          <div class="form__box__position">
            <i class="far fa-keyboard fa-keyboard--design"></i>
            <h2 class="form__title">RELLENA</h2>
          </div>
          <i class="fas fa-angle-down fa-angle-up--design"></i>
        </div>
        <div class="content">
          <div class="folded__form js-form">
            <label for="fullName" class="folded__form__label" id="fullName">
              Nombre completo
            </label>
            <input
              placeholder="Ej: Sally Jill"
              id="fullName"
              type="text"
              name="fullName"
              class="folded__form__input inputName"
              maxlength="20"
              required
            />
            <label for="profession" class="folded__form__label">
              Puesto
            </label>
            <input
              placeholder="Ej: Front-end unicorn"
              id="profession"
              type="text"
              name="profession"
              class="folded__form__input inputJob"
              maxlength="25"
              required
            />
            <label for="image" class="folded__form__label">
              Imagen de perfil
            </label>

            <div class="folded__form__section">
              <buttton
                for="image"
                class="folded__form__btnAdd js__profile-trigger"
              >
                Añadir Imagen
              </buttton>
              <input
                type="file"
                name="image"
                id="image"
                class="folded__form__inputFile js__profile-upload-btn"
                required
              />
              <div class="folded__form__input2 js__profile-preview"></div>
            </div>

            <label for="emailAddress" class="folded__form__label">
              Correo electrónico
            </label>
            <input
              placeholder="Ej: sally-hill@gmail.com"
              type="email"
              id="emailAddress"
              name="emailAddress"
              class="folded__form__input mail"
              required
            />
            <label for="telephone" class="folded__form__label">
              Teléfono
            </label>
            <input
              placeholder="Ej: 555-55-55-55"
              type="tel"
              id="telephone"
              name="telephone"
              class="folded__form__input tel"
            />
            <label for="Linkedin" class="folded__form__label">
              Linkedin
            </label>
            <input
              placeholder="Ej: sally-hill"
              id="Linkedin"
              type="text"
              name="Linkedin"
              class="folded__form__input linkedin"
              required
            />
            <label for="Github" class="folded__form__label">
              Github
            </label>
            <input
              placeholder="Ej: sally-hill"
              type="text"
              id="Github"
              name="Github"
              class="folded__form__input Github"
              required
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Form;
