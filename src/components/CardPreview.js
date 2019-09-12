import React from "react";

class CardPreview extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  render() {
    return (
      <div>
        <input
          type="file"
          ref={this.fileInput}
          name="image"
          id="image"
          className="folded__form__inputFile js__profile-upload-btn"
          required
        />
        <button type="submit" onClick={this.handleSubmit}>
          Añadir Imagen
        </button>
        <div className="folded__form__input2 js__profile-preview">
          {this.props.image}
        </div>
      </div>
    );
  }
}
export default CardPreview;
