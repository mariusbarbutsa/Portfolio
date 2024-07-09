export default class JobPortal {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="jobportal" class="page">
      <div class="carousel-container">
          <img src="images/project/project01/Jobportal_Slider_01.jpg" class="carousel-image" alt="Image 1">
          <img src="images/project/project01/Jobportal_Slider_02.jpg" class="carousel-image" alt="Image 2">
          <img src="images/project/project01/Jobportal_Slider_03.jpg" class="carousel-image" alt="Image 3">
          <img src="images/project/project01/Jobportal_Slider_04.jpg" class="carousel-image" alt="Image 4">
          <img src="images/project/project01/Jobportal_Slider_05.jpg" class="carousel-image" alt="Image 5">
        </div>

        <div class="myproject-box-labels">
          <span class="project-box-label">BAAA Job Portal / 04</span>
          <span class="project-box-label">UX/UI Design</span>
        </div>
        <div class="myproject-text-container">
          <div class="myproject-description">
            <p>Introducing a digital platform for BAAA students and graduates! Find 
            <span class="highlight">tailored job opportunities</span>
            create detailed profiles, and apply with ease. Companies can post jobs, assess candidates, and 
            <span class="highlight">connect with top talent</span>.
            Empowering careers, bridging futures.</p>
          </div>
          <span class="project-box-label uppercase">Assess candidates using our integrated tools, making the hiring process smoother and more effective</span>
        </div>

        <div class="myproject-list-container">
          <div class="myproject-list-item">
            <div class="myproject-left-text">Project Client</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">Erhvervsakademi Aarhus</div>
          </div>
          <div class="myproject-list-item">
            <div class="myproject-left-text">Service</div>
            <div class="myproject-line"></div>
            <div class="myproject-right-text">Career Management Platform</div>
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
            <a target="_blank" href="https://www.figma.com/proto/kKnCdbtbShKhYtgDrb7qof/BAAA--Job-Portal?page-id=1%3A3&node-id=398-5413&viewport=-1769%2C-3916%2C0.28&t=ArmioMHD2px7nUSP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=398%3A5399" 
            class="myproject-right-text underline">Figma Prototype</a>
          </div>
        </div>

        <div class="myproject-images-wrapper">
          <div class="myproject-images-container">
            <div class="myproject-images-container-01">
              <img class="myproject-image-full" src="images/project/project01/Jobportal_Image_01.jpg" alt="name it">
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">INTUITIVE FLOW</span>
              <span class="project-box-label uppercase remove-span">SEAMLESS</span>
              <span class="project-box-label uppercase">EMPOWERING</span>
            </div>
          </div>
          <div class="myproject-images-container">
            <div class="myproject-images-container-02">
              <video src="images/project/project01/jobportal_video.webm" class="myproject-video-full"autoplay loop muted></video>
            </div>
              <div class="myproject-box-labels">
              <span class="project-box-label uppercase">USER CENTRIC</span>
              <span class="project-box-label uppercase remove-span">EFFICIENT</span>
              <span class="project-box-label uppercase">COMPREHENSIVE</span>
            </div>
          </div>
          <div class="myproject-images-container">
            <div class="myproject-images-container-04">
              <div class="myproject-images-container-04-grid">
                <img class="myproject-images-container-04-grid-image" src="images/project/project01/Jobportal_Grid_01.jpg" alt="Image 1">
                <img class="myproject-images-container-04-grid-image" src="images/project/project01/Jobportal_Grid_02.jpg" alt="Image 2">
                <img class="myproject-images-container-04-grid-image" src="images/project/project01/Jobportal_Grid_03.jpg" alt="Image 3">
                <div class="myproject-images-container-04-grid-textBox">_a <span class="white">template</span> based profile and applyment structure</div>
                <div class="empty-cell"></div>
                <div class="myproject-images-container-04-grid-textBox">_<span class="white">customizable</span> user profiles for students and companies</div>
                <img class="myproject-images-container-04-grid-image" src="images/project/project01/Jobportal_Grid_04.jpg" alt="Image 4">
                <img class="myproject-images-container-04-grid-image" src="images/project/project01/Jobportal_Grid_05.jpg" alt="Image 5">
                <img class="myproject-images-container-04-grid-image" src="images/project/project01/Jobportal_Grid_06.jpg" alt="Image 6">
              </div>
            </div>
            <div class="myproject-box-labels">
              <span class="project-box-label uppercase">DYNAMIC</span>
              <span class="project-box-label uppercase remove-span">INSIGHTFUL</span>
              <span class="project-box-label uppercase">TRANSFORMATIVE</span>
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
