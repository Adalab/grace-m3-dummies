import React from "react";

class Share extends React.Component {
  render() {
    return (
      <section class="folded__menu js-collapsable">
        <div class="share__box js-collapsable-header">
          <div class="share__box__position">
            <i class="fas fa-share-alt fa-keyboard--design"></i>
            <h2 class="share__title">COMPARTE</h2>
          </div>
          <i class="fas fa-angle-down fa-angle-up--design"></i>
        </div>
        <div class="content">
          <div class="share__button">
            <button type="submit" class="share__button--orange js-shareBtn">
              <i class="far fa-address-card share__button--orange--icon"></i>
              <h2 class="share__button--orange--text">CREAR TARJETA</h2>
            </button>
          </div>
          <partial src="/_share-message.html"></partial>
          <partial src="/_share-error.html"></partial>
        </div>
      </section>
    );
  }
}
export default Share;
