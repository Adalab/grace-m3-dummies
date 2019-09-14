import React from "react";
import "../stylesheets/App.scss";
import Footer from "./Footer";
import Preview from "./Preview";
import Design from "./Design";
import Form from "./Form";
import Share from "./Share";
import Collapsible from "./Collapsible";
// import userProfile from

class App extends React.Component {   
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        palette: 1,
        fullName: "",
        profession: "",
        // image: userProfile,
        emailAddress: "",
        telephone: "",
        Linkedin: "",
        Github: ""
      }
    };
    this.handlePaletteApp = this.handlePaletteApp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handlePaletteApp(palette){
    ///
    const newUserInfo = {
      ...this.userInfo,
      palette: palette
    }
    this.setState({ userInfo: newUserInfo },console.log(this.state))
  }
   
  handleInputChange(event) {
    const inputValue = event.currentTarget.value;
    const id = event.currentTarget.id;
    console.log(inputValue, id);
    this.setState((prevState, props) => {
      const newUser = { ...prevState.userInfo, [id]: inputValue };
      console.log(newUser);
      return { userInfo: newUser };
    });
  }

  render() {
    return (
      <div className="App">
        <Preview userInfo={this.state.userInfo} />
        <Collapsible name="DISEÑA">
          <Design handlePaletteDesign={ this.handlePaletteApp} />
        </Collapsible>
        <Collapsible name="RELLENA">
          <Form action={this.handleInputChange} userInfo={this.state.userInfo} />
        </Collapsible>
        <Collapsible name="COMPARTE">
          <Share />
        </Collapsible>
        <Footer />
      </div>
    );
  }
}

export default App;
