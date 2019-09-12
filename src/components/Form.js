import React from "react";
import Item from "./Form_item";
import Button from "./Button";
import CardPreview from "./CardPreview";
class Form extends React.Component {
  render() {
    return (
      <div className="folded__form js-form">
        <Item
          name="fullName"
          type="text"
          label="Nombre completo"
          placeholder="Ej: Sally Jill"
          inputClassName="inputName"
          required="required"
          //value={this.props.userInfo.fullName}
          action={this.props.action}
        ></Item>

        <Item
          key="profession"
          type="text"
          label="Puesto"
          placeholder="Ej: Front-end unicorn"
          inputClassName="inputJob"
          required="required"
        ></Item>

        <label htmlFor="image" className="folded__form__label">
          Imagen de perfil
        </label>

        <CardPreview image={this.props.image}></CardPreview>

        <Item
          key="emailAddress"
          type="email"
          label="Correo electrónico"
          placeholder="Ej: sally-hill@gmail.com"
          inputClassName="mail"
          required="required"
        ></Item>

        <Item
          key="telephone"
          type="tel"
          label="Teléfono electrónico"
          placeholder="Ej: 555-55-55-55"
          inputClassName="tel"
        ></Item>

        <Item
          key="Linkedin"
          type="text"
          label="Linkedin"
          placeholder="Ej: sally-hill"
          inputClassName="linkedin"
          required="required"
        ></Item>

        <Item
          key="Github"
          type="text"
          label="Github"
          placeholder="Ej: sally-hill"
          inputClassName="Github"
          required="required"
        ></Item>
      </div>
    );
  }
}

export default Form;

/* <div className="folded__form__section">
          <Button htmlFor="image" className="folded__form__btnAdd js__profile-trigger">
            Añadir Imagen
          </Button>
          <input type="file" name="image" id="image" className="folded__form__inputFile js__profile-upload-btn" required />
          <div className="folded__form__input2 js__profile-preview"></div>
        </div> */
