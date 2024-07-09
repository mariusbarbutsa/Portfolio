export default class Shootings {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="shootings" class="page">
      
        <div class="shootings-title">
          <div class="body-small">
            <span class="gray-text">A handpicked collection of my</span>
            <span class="white-text">favourite shots</span><span class="gray-text">, all snapped with</span>
            <span class="white-text">great passion</span>
            <span class="gray-text">using my trusty Canon R.</span>
          </div>
        </div>
        <div id="imageGrid" class="grid"></div>
        <div id="galleryView" class="gallery">
          <img id="galleryImage" src="" alt="Gallery Image">
          <button id="prevButton">←&nbsp;&nbsp;&nbsp;PREVIOUS</button>
          <button id="nextButton">NEXT&nbsp;&nbsp;&nbsp;→</button>
          <button id="closeButton">[ x ] CLOSE</button>
          <div id="imageIndex"></div>
        </div>

        <div class="footer">
          <div class="footer-row">
            <div class="contact-section">
                <p class="footer-main-text">Kindred spirits?<br>
                I'd love to hear from you.<br>
                Let's get in touch.</p>
                <a href="mailto:portfolio@mariussart.com" class="contact-email">portfolio@mariussart.com <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
            </div>
            <div class="info">
                <p>BASED IN DENMARK</p>
                <p>WORKING WORLDWIDE</p>
                <p class="info-gray">LOCAL TIME: <span style="color:white;" class="local-time"></span></p>
            </div>
          </div>
          <div class="line"></div>
          <div class="social-links links-mobile">
                  <a href="https://www.instagram.com/xalerotdeenem/">Instagram <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
                  <a href="https://www.linkedin.com/in/marius-barbuta/">LinkedIn <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
                  <a href="https://www.facebook.com/marius.barbutsa">Facebook <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
              </div>
          <div class="footer-links">
               <a href="index.html" onclick="scrollToTop()">
                <img class="logo_mariussart_footer" alt="logo" src="images/mariussart_logotype.svg" />
              </a>
              <div class="social-links links-desktop">
                  <a href="#">Instagram <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
                  <a href="#">LinkedIn <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
                  <a href="#">Facebook <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
              </div>
              <div class="footer-credits">
                  <p>&copy; 2024 MARIUSSART<br>Designed and developed <br>with &#9829; by Marius Barbuţa</p>
              </div>
          </div>
      </div>


      </section>
    `;
  }

}
