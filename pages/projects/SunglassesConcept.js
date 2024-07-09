export default class SunglassesConcept {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="sunglassesconcept" class="page">
      <div class="carousel-container">
          <img src="images/project/project03/SunglassesConcept_Slider_01.jpg" class="carousel-image" alt="Image 1">
          <img src="images/project/project03/SunglassesConcept_Slider_02.jpg" class="carousel-image" alt="Image 2">
          <img src="images/project/project03/SunglassesConcept_Slider_03.jpg" class="carousel-image" alt="Image 3">
          <img src="images/project/project03/SunglassesConcept_Slider_04.jpg" class="carousel-image" alt="Image 4">
          <img src="images/project/project03/SunglassesConcept_Slider_05.jpg" class="carousel-image" alt="Image 5">
        </div>

        <div class="myproject-box-labels">
          <span class="project-box-label">Sunglasses concept Design / 02</span>
          <span class="project-box-label">Product Design & 3D Printing</span>
        </div>
        <div class="myproject-text-container">
          <div class="myproject-description">
            <p>This project challenged me to push the boundaries of 
            <span class="highlight">style and functionality</span>,
            following the latest trends in eyewear. I conducted market research, gathered inspiration, and developed initial concepts, refining them in  
            <span class="highlight">Rhino</span>
            and presenting the final designs to the team.</p>
          </div>
          <span class="project-box-label uppercase">innovative sunglasses that blend cutting-edge style with practical functionality</span>
        </div>

        <div class="myproject-list-container">
          <div class="myproject-list-item">
            <div class="myproject-left-text">Project Client</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">Design Eyewear Group</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Service</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">Sunglasses Concept Project</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Role</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">Product Designer</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Year</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">2023</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Software</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">Rhino(2D & 3D) / Photoshop</div>
          </div>

        </div>

        <div class="myproject-images-wrapper">
          <div class="myproject-images-container">
            <div class="myproject-images-container-01">
              <img class="myproject-image-full" src="images/project/project03/SunglassesConcept_Image_01.jpg" alt="name it">
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">Research</span>
              <span class="project-box-label uppercase remove-span">Trendy</span>
              <span class="project-box-label uppercase">Functionality</span>
            </div>
          </div>
          <div class="myproject-images-container">
            <div class="myproject-images-container-02">
              <video src="images/project/project03/concept_rotation.webm" class="myproject-video-full"autoplay loop muted></video>
            </div>
              <div class="myproject-box-labels">
              <span class="project-box-label uppercase">Rhino</span>
              <span class="project-box-label uppercase remove-span">Internship</span>
              <span class="project-box-label uppercase">Learning</span>
            </div>
          </div>
          <div class="myproject-images-container">
            <div class="myproject-images-container-03">
              <div class="myproject-images-container-03-grid">
                <img class="myproject-images-container-04-grid-image" src="images/project/project03/SunglassesConcept_Image_02.jpg" alt="Image 1">
                <img class="myproject-images-container-04-grid-image" src="images/project/project03/SunglassesConcept_Image_03.jpg" alt="Image 2">
                <img class="myproject-images-container-04-grid-image" src="images/project/project03/SunglassesConcept_Image_04.jpg" alt="Image 3">
                <img class="myproject-images-container-04-grid-image" src="images/project/project03/SunglassesConcept_Image_05.jpg" alt="Image 3">
              </div>
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">Sophisticated</span>
              <span class="project-box-label uppercase remove-span">Bold</span>
              <span class="project-box-label uppercase">Elegant</span>
            </div>
          </div>
          <div class="myproject-images-container">
            <div class="myproject-images-container-04">
              <div class="myproject-images-container-04-grid">
                <img class="myproject-images-container-04-grid-image" src="images/project/project03/SunglassesConcept_Grid_01.jpg" alt="Image 1">
                <img class="myproject-images-container-04-grid-image" src="images/project/project03/SunglassesConcept_Grid_02.jpg" alt="Image 2">
                <img class="myproject-images-container-04-grid-image" src="images/project/project03/SunglassesConcept_Grid_03.jpg" alt="Image 3">
                <div class="myproject-images-container-04-grid-textBox">_design aligned with the <span class="white">2024</span> market and fashion trends</div>
                <div class="empty-cell"></div>
                <div class="myproject-images-container-04-grid-textBox">_3D printed frame <span class="white">evaluated</span> for accessibility and color</div>
                <img class="myproject-images-container-04-grid-image" src="images/project/project03/SunglassesConcept_Grid_04.jpg" alt="Image 4">
                <img class="myproject-images-container-04-grid-image" src="images/project/project03/SunglassesConcept_Grid_05.jpg" alt="Image 5">
                <img class="myproject-images-container-04-grid-image" src="images/project/project03/SunglassesConcept_Grid_06.jpg" alt="Image 6">
              </div>
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">Versatile</span>
              <span class="project-box-label uppercase remove-span">Stylish</span>
              <span class="project-box-label uppercase">Captivating</span>
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
