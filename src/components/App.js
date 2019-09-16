import React from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";
import Preview from "./Preview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Collapsible from "./Collapsible";
import HeaderApp from "./HeaderApp";
// import userProfile from

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        palette: 1,
        name: "",
        job: "",
        photo: "",
        email: "",
        phone: "",
        linkedin: "",
        github: ""
      }
    };
    debugger;
    this.state.userInfo = this.getData();
    this.handlePaletteApp = this.handlePaletteApp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePhotoApp = this.handlePhotoApp.bind(this);
    this.saveData = this.saveData.bind(this);
    this.getData = this.getData.bind(this);
    // this.fillIconInputs();
  }
  // Change color
  handlePaletteApp(palette) {
    console.log(palette);
    const newUserInfo = { ...this.state.userInfo, palette: palette };
    this.setState({ userInfo: newUserInfo }, this.saveData);
  }
  // Write input values on card
  handleInputChange(event) {
    const inputValue = event.currentTarget.value;
    const id = event.currentTarget.id;
    const newUserInfo = { ...this.state.userInfo, [id]: inputValue };
    this.setState({ userInfo: newUserInfo }, this.saveData);
  }

  // Change profile picture
  handlePhotoApp(photo) {
    console.log(photo);
    const newUserInfo = { ...this.state.userInfo, photo: photo };
    this.setState({ userInfo: newUserInfo }, this.saveData);
  }

  //Opacity card icons
  // fillIconInputs(id) {
  //   return !!this.state.userInfo[id] ? "" : "clear";
  // }

  //LocalStorage
  saveData() {
    localStorage.setItem("userInfo", JSON.stringify(this.state.userInfo));
  }

  getData() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

  render() {
    return (
      <div className="app">
        <HeaderApp />
        <section className="section__mediasq">
          <div className="visor__mediasq">
            <Preview
              // que parametro le paso??¿?¿? opacity={this.fillIconInputs()}
              userInfo={this.state.userInfo}
            />
          </div>
          <div className="workSpace">
            <form id="form">
              <Collapsible name="DISEÑA">
                <Design handlePaletteDesign={this.handlePaletteApp} />
              </Collapsible>
              <Collapsible name="RELLENA">
                <Form action={this.handleInputChange} userInfo={this.state.userInfo} handlePhotoForm={this.handlePhotoApp} />
              </Collapsible>
              <Collapsible name="COMPARTE">
                <Share />
              </Collapsible>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
