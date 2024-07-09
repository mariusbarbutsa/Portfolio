export default class AdvChallengeProject {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="advchallenge" class="page">

        <div class="carousel-container">
          <img src="images/project/project06/TheAdvChallenge_Slider_01.jpg" class="carousel-image" alt="Image 1">
          <img src="images/project/project06/TheAdvChallenge_Slider_02.jpg" class="carousel-image" alt="Image 2">
          <img src="images/project/project06/TheAdvChallenge_Slider_03.jpg" class="carousel-image" alt="Image 3">
          <img src="images/project/project06/TheAdvChallenge_Slider_04.jpg" class="carousel-image" alt="Image 4">
          <img src="images/project/project06/TheAdvChallenge_Slider_05.jpg" class="carousel-image" alt="Image 5">
        </div>

        <div class="myproject-box-labels">
          <span class="project-box-label">The Adventure Challenge App / 05</span>
          <span class="project-box-label">Mobile App Design</span>
        </div>
        <div class="myproject-text-container">
          <div class="myproject-description">
            <p>In response to society's reliance on social media for validation, we created an 
            <span class="highlight">inspiring mobile app</span>
            the
            <span class="highlight">The Adventure Challenge</span>
            to elevate their guides and foster deeper, more meaningful relationships among young people.</p>
          </div>
          <span class="project-box-label uppercase">helping young people build deeper, more meaningful relationships beyond social media</span>
        </div>

        <div class="myproject-list-container">
          <div class="myproject-list-item">
            <div class="myproject-left-text">Project Client</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">The Adventure Challenge</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Service</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">Mobile App Design</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Role</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">UX/UI Designer</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Year</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">2023</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Prototype</div>
            <div class="myproject-line"></div>
            <a href="https://www.figma.com/proto/ZZo83IFcpSFRSzPFo9uuZE/Project-2-%2F-DICON-%2F-The-Adventure-Challenge?page-id=1%3A5&node-id=268%3A1171&viewport=1687%2C1173%2C0.19&scaling=scale-down&starting-point-node-id=268%3A1171" 
            class="myproject-right-text underline">Figma Prototype</a>
          </div>
        </div>

        <div class="myproject-images-wrapper">
          <div class="myproject-images-container">
            <div class="myproject-images-container-05">
              <img class="myproject-image-full-noBorder" src="images/project/project06/TheAdvChallenge_Image_01.jpg" alt="name it">
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">Scratch-off guides</span>
              <span class="project-box-label uppercase remove-span">app</span>
              <span class="project-box-label uppercase">Concept</span>
            </div>
          </div>
          <div class="myproject-images-container">
            <div class="myproject-images-container-split">
              <div class="myproject-images-container-02">
                <video src="images/project/project06/advchallenge-video.webm" class="myproject-video-full"autoplay loop muted></video>
              </div>
              <div class="myproject-images-container-05">
                <img class="myproject-image-full-noBorder" src="images/project/project06/TheAdvChallenge_Image_02.jpg" alt="name it">
              </div>
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">connections</span>
              <span class="project-box-label uppercase remove-span">reminders</span>
              <span class="project-box-label uppercase">activities</span>
            </div>
          </div>
          <div class="myproject-images-container">
            <div class="myproject-images-container-01">
              <img class="myproject-image-full" src="images/project/project06/TheAdvChallenge_Image_03.jpg" alt="name it">
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">personalization</span>
              <span class="project-box-label uppercase remove-span">affordable</span>
              <span class="project-box-label uppercase">intuitive</span>
            </div>
          </div>
          <div class="myproject-images-container">
            <div class="myproject-images-container-split">
              <div class="myproject-images-container-05">
                <img class="myproject-image-full-noBorder" src="images/project/project06/TheAdvChallenge_Image_04.jpg" alt="name it">
              </div>
              <div class="myproject-images-container-05">
                <img class="myproject-image-full-noBorder" src="images/project/project06/TheAdvChallenge_Image_05.jpg" alt="name it">
              </div>
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">customizable</span>
              <span class="project-box-label uppercase remove-span">subscriptions</span>
              <span class="project-box-label uppercase">UGC</span>
            </div>
          </div>
        </div>

        <div class="title-text">
          <span class="gray-text">MARIUS BARBUȚA</span><span class="white-text"> • OTHER PROJECTS ↓</span> 
        </div>

        <div class="list-container margin-bottom">
          <hr class="projects-line">
          <a href="#gogetgreen" class="list-element">
            <div class="text-box">
              <div class="text-element list-header-text">GoGetGreen app
                <span class="list-small-text">/ 01</span>
              </div>
              <div class="text-element list-small-text">Mobile App Design</div>
            </div>
          </a>
          <hr class="projects-line">
          <a href="#sunglassesconcept" class="list-element">
            <div class="text-box">
              <div class="text-element list-header-text">Sunglasses concept Design
                <span class="list-small-text">/ 02</span>
              </div>
              <div class="text-element list-small-text">Product Design & 3D Printing</div>
            </div>
          </a>
          <hr class="projects-line">
          <a href="#babysam" class="list-element">
            <div class="text-box">
              <div class="text-element list-header-text">Baby Sam App
                <span class="list-small-text">/ 03</span>
              </div>
              <div class="text-element list-small-text">Mobile App Design</div>
            </div>
          </a>
          <hr class="projects-line">
          <a href="#jobportal" class="list-element">
            <div class="text-box">
              <div class="text-element list-header-text">BAAA Job Portal
                <span class="list-small-text">/ 04</span>
              </div>
              <div class="text-element list-small-text">UX/UI Design</div>
            </div>
          </a>
          <hr class="projects-line">
          <hr class="projects-line">
          <a href="#thesis" class="list-element">
            <div class="text-box">
              <div class="text-element list-header-text">Enterprise Software Redesign
                <span class="list-small-text">/ 06</span>
              </div>
              <div class="text-element list-small-text">UX/UI Design</div>
            </div>
          </a>
          <hr class="projects-line">
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
                  <a href="https://www.instagram.com/xalerotdeenem/">Instagram <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
                  <a href="https://www.linkedin.com/in/marius-barbuta/">LinkedIn <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
                  <a href="https://www.facebook.com/marius.barbutsa">Facebook <img class="arrow-up" src="images/icons/arrowup.svg" alt="arrow up"></a>
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
