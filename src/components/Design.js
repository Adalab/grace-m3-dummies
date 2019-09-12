import React from "react";
import ColorPalette from "./Design_color";
import App from "./App";

class Design extends React.Component {
   constructor(){
   super();
  //   this.getColorId = this.getColorId.bind(this);
  //   console.log(getColorId);
  }

  handlePaletteComponentDesign (props) {
    console.log(props);
    console.log("handlePaletteComponentDesign")
    debugger
  }

  render() {
    return (
      <section className="design js-collapsable">
        <div className="design__box js-collapsable-header">
          <div className="form__box__position">
            <i className="far fa-object-ungroup fa-object-ungroup--design"></i>
            <h2 className="design__title">DISEÑA</h2>
          </div>
          <i className="fas fa-angle-down fa-angle-up--design"></i>
        </div>
        <div className="content">
          <div className="design__form ">
            <h3 className="design__subtitle">COLORES</h3>
            <div className="design__form--items">
              <ColorPalette handleLabelFunction={this.handleLabelDesign} for="design1" value="color1" id={1} number="one" handlePalette={this.props.handlePaletteComponentDesign}/>
              <ColorPalette for="design2" value="color2" id={2} number="two" handlePalette={this.props.handlePaletteComponentDesign}/>
              <ColorPalette for="design3" value="color3" id={3} number="three" handlePalette={this.props.handlePaletteComponentDesign}/>
              <ColorPalette for="design4" value="color4" id={4} number="four" handlePalette={this.props.handlePaletteComponentDesign}/>
              <ColorPalette for="design5" value="color5" id={5} number="five" handlePalette={this.props.handlePaletteComponentDesign}/>
              <ColorPalette for="design6" value="color6" id={6} number="six" handlePalette={this.props.handlePaletteComponentDesign}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Design;
