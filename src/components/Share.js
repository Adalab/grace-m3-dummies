import React from "react";
import PropTypes from "prop-types";

class Share extends React.Component {
  constructor(props) {
    super(props);
    this.showApiResult = this.showApiResult.bind(this);
    this.loader = this.loader.bind(this);
  }

  showApiResult = () => {
    if (this.props.cardURL) {
<<<<<<< HEAD
      return (
        <div>
          <p className="share__result">
            <a
              className="share__result-link"
              href={this.props.cardURL}
              target="_blank"
            >
              {this.props.cardURL}
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=Created+with+Awesome+Profile+Cards+&url=${this.props.cardURL}`}
              className="twitterLink js-twitterLink"
              target="_blank"
            >
              <div className="share__button--blue">
                <i className="fab fa-twitter share__button__icon"></i>
                <h2 className="share__button--text">Compartir en Twitter</h2>
              </div>
            </a>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p className="share__result"> {this.props.cardError}</p>
        </div>
      );
    }
  };

  loader() {
    return (
      <div className="share__loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
=======
      return (
        <div>
          <p className="share__result">
            <a className="share__result-link" href={this.props.cardURL} target="_blank" >{this.props.cardURL}</a>
            <a href={`https://twitter.com/intent/tweet?text=Created+with+Awesome+Profile+Cards+&url=${this.props.cardURL}`} className="twitterLink js-twitterLink" target="_blank">
               <div className="share__button--blue">
                  <i className="fab fa-twitter share__button__icon"></i>
                  <h2 className="share__button--text">Compartir en Twitter</h2>
              </div>
            </a>
          </p>
        </div>
      )} else {
        return ( <div>
          <p className="share__result"> {this.props.cardError}</p>
          </div>)
      }
  }

    
loader() {
          return (
        <div className="share__loader">
        <span></span>
        <span></span>
        <span></span>
          </div>)}
>>>>>>> 698a84486beeb49d687c3d1880b21e3cab9ee532

  render() {
    return (
      <div className="folded__form js-form">
        <div className="share__button">
          <button
            type="submit"
            className="share__button--orange js-shareBtn"
            onClick={this.props.getDataFromApi}
          >
            <i className="far fa-address-card share__button--orange--icon"></i>
            <h2 className="share__button--orange--text">CREAR TARJETA</h2>
          </button>
          {this.props.isCardRendering
            ? this.loader()
            : this.showApiResult(this.props)}
        </div>
      </div>
    );
  }
}
Share.propType = {
  cardURL: PropTypes.string,
  cardError: PropTypes.string,
  isCardRendering: PropTypes.func,
  getDataFromApi: PropTypes.func,
  handlePaletteDesignColors: PropTypes.func,
  number: PropTypes.number
};

export default Share;
