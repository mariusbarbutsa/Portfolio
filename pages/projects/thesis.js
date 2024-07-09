export default class Thesis {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="thesis" class="page">
      <div class="carousel-container">
          <img src="images/project/project02/EntrSoftware_Slider_01.jpg" class="carousel-image" alt="Image 1">
          <img src="images/project/project02/EntrSoftware_Slider_02.jpg" class="carousel-image" alt="Image 2">
          <img src="images/project/project02/EntrSoftware_Slider_03.jpg" class="carousel-image" alt="Image 3">
          <img src="images/project/project02/EntrSoftware_Slider_04.jpg" class="carousel-image" alt="Image 4">
          <img src="images/project/project02/EntrSoftware_Slider_05.jpg" class="carousel-image" alt="Image 5">
        </div>

        <div class="myproject-box-labels">
          <span class="project-box-label">Enterprise Software Redesign / 06</span>
          <span class="project-box-label">UX/UI Design</span>
        </div>
        <div class="myproject-text-container">
          <div class="myproject-description">
            <p>Introducing the upgraded RaskRask enterprise system with an
            <span class="highlight">intuitive database redesign</span>
            focused on enhancing employee workflow and customer service. Discover how we're revolutionizing 
            <span class="highlight">usability and efficiency</span>
            in one seamless solution!</p>
          </div>
          <span class="project-box-label uppercase">revolutionizing operations and customer service with enhanced efficiency and intuitive design</span>
        </div>

        <div class="myproject-list-container">
          <div class="myproject-list-item">
            <div class="myproject-left-text">Project Client</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">RaskRask</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Service</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">Enterprise Software Redesign and Development</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Role</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">UX/UI Designer</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Year</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">2022</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Prototype</div>
            <div class="myproject-line"></div>
            <a target="_blank" href="https://www.figma.com/proto/9Qbg06XzzPPWXk7pcNKOul/Thesis-Exam?page-id=0%3A1&node-id=437-32913&viewport=16147%2C-4517%2C0.31&t=WB7xul5M1GunzLLi-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=437%3A33719" 
            class="myproject-right-text underline">Figma Prototype</a>
          </div>
        </div>

        <div class="myproject-images-wrapper">
          <div class="myproject-images-container">
            <div class="myproject-images-container-01">
              <img class="myproject-image-full" src="images/project/project02/EntrSoftware_Image_01.jpg" alt="name it">
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">Intuitive interface</span>
              <span class="project-box-label uppercase remove-span">Efficient</span>
              <span class="project-box-label uppercase">Customer service tool</span>
            </div>
          </div>
          <div class="myproject-images-container">
            <div class="myproject-images-container-02">
              <video src="images/project/project02/enterpriseSoftware-video.webm" class="myproject-video-full"autoplay loop muted></video>
            </div>
              <div class="myproject-box-labels">
              <span class="project-box-label uppercase">Enhanced workflow</span>
              <span class="project-box-label uppercase remove-span">Transparent</span>
              <span class="project-box-label uppercase">Task simplification</span>
            </div>
          </div>
          <div class="myproject-images-container">
            <div class="myproject-images-container-04">
              <div class="myproject-images-container-04-grid">
                <img class="myproject-images-container-04-grid-image" src="images/project/project02/EntrSoftware_Grid_01.jpg" alt="Image 1">
                <img class="myproject-images-container-04-grid-image" src="images/project/project02/EntrSoftware_Grid_02.jpg" alt="Image 2">
                <img class="myproject-images-container-04-grid-image" src="images/project/project02/EntrSoftware_Grid_03.jpg" alt="Image 3">
                <div class="myproject-images-container-04-grid-textBox">_<span class="white">simplified operations</span> and superior customer service</div>
                <div class="empty-cell"></div>
                <div class="myproject-images-container-04-grid-textBox">_database system for <span class="white">seamless</span> business management</div>
                <img class="myproject-images-container-04-grid-image" src="images/project/project02/EntrSoftware_Grid_04.jpg" alt="Image 4">
                <img class="myproject-images-container-04-grid-image" src="images/project/project02/EntrSoftware_Grid_05.jpg" alt="Image 5">
                <img class="myproject-images-container-04-grid-image" src="images/project/project02/EntrSoftware_Grid_06.jpg" alt="Image 6">
              </div>
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">Findability features</span>
              <span class="project-box-label uppercase remove-span">Progressive</span>
              <span class="project-box-label uppercase">Heuristically assessed</span>
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
          <a href="#advchallenge" class="list-element">
            <div class="text-box">
              <div class="text-element list-header-text">The Adventure Challenge App
                <span class="list-small-text">/ 05</span>
              </div>
              <div class="text-element list-small-text">Mobile App Design</div>
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