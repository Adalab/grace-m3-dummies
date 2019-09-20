import React from "react";
import PropTypes from "prop-types";

// id es quien determina el color seleccionado. Exportar id a state.
class ColorPalette extends React.Component {
  constructor(props) {
    super(props);
    this.handlePalette = this.handlePalette.bind(this);
  }

  handlePalette() {
    this.props.handlePaletteDesignColors(this.props.id);

    //reconocer el input de ese id y ponerle.checked;
  }
  render() {
    return (
      <label htmlFor={this.props.htmlFor} className="color__box">
        <input
          type="radio"
          htmlFor={this.props.htmlFor}
          className="radio_btn"
          name="design"
          value={this.props.value}
          checked
          onChange={this.handlePalette}
        />
        <div className={`color__one--${this.props.number}`}></div>
        <div className={`color__two--${this.props.number}`}></div>
        <div className={`color__three--${this.props.number}`}></div>
      </label>
    );
  }
}
ColorPalette.propTypes = {
  handlePaletteDesignColors: PropTypes.func,
  number: PropTypes.string,
  htmlFor: PropTypes.string,
  value: PropTypes.string
};

export default ColorPalette;
