export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
    <section id="home" class="page">
    
      <div class="header-text">
        <span class="white-text">MARIUS BARBUȚA</span> <span class="white-text">‣</span> <span class="gray-text">UX/UI DESIGN</span> <span class="white-text">•</span> <span class="gray-text">PHOTOGRAPHY</span> <span class="white-text">•</span> <span class="gray-text">CONTENT CREATION</span> <span class="white-text">•</span> <span class="gray-text">BASED IN DENMARK</span> <span class="white-text">•</span> <span class="gray-text">WORKING WORLDWIDE</span>
      </div>  
      
      <div class="quotation-container">
        <div class="styled-quotation-container">
          <span class="quotation">❝ What drives me the most in my work is the satisfaction of knowing that I have made a positive impact on people's experiences through my creation. ❞</span>
          <div class="short-line"></div>
          <img class="myself" src="/images/myself.jpg" alt="Marius">
        </div>
      </div>

      <div class="softs-container-wrapper">
        <hr class="projects-line">
        <div class="softs-container">
          <div class="soft-item">
            <img class="soft-icon" src="/images/icons/rhino.svg" alt="Rhino">
          </div>
          <div class="soft-item">
            <img class="soft-icon" src="/images/icons/ps.png" alt="Photoshop">
          </div>
          <div class="soft-item">
            <img class="soft-icon" src="/images/icons/lr.png" alt="Lighroom">
          </div>
          <div class="soft-item">
            <img class="soft-icon" src="/images/icons/pr.png" alt="PremierePro">
          </div>
          <div class="soft-item">
            <img class="soft-icon" src="/images/icons/ai.png" alt="Illustrator">
          </div>
          <div class="soft-item">
            <img class="soft-icon" src="/images/icons/id.png" alt="InDesign">
          </div>
          <div class="soft-item">
            <img id="figma" class="soft-icon" src="/images/icons/figma.png" alt="Figma">
          </div>
          <div class="soft-item">
            <img class="soft-icon" src="/images/icons/blender.svg" alt="Blender">
          </div>
        </div>
        <hr class="projects-line">
      </div>

      <div class="title-text">
        <span class="gray-text">MARIUS BARBUȚA</span><span class="white-text"> • CASE STUDIES ↓</span> 
      </div>
    
      <div class="projects-container">

      <div class="project-box">
            <div class="project-box-header">
              <div class="project-box-header-mobile">
                <div class="project-box-header-video-mobile">
                  <! --<video src="images/project/project04/gogetgreen-video.webm" autoplay loop muted></video>
                </div>
                <div class="project-box-header-mobile-grid">
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project04/GoGetGreen_Display_01.jpg" alt="Image 1">
                  </div>
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project04/GoGetGreen_Display_02.jpg" alt="Image 2">
                  </div>
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project04/GoGetGreen_Display_03.jpg" alt="Image 3">
                  </div>
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project04/GoGetGreen_Display_03.jpg" alt="Image 4">
                  </div>
                </div>
              </div>
              <div class="project-box-labels">
                  <span class="project-box-label">GoGetGreen app / 01</span>
                  <span class="project-box-label">Mobile App Design</span>
              </div>
            </div>
            <a href="#gogetgreen" class="project-button">View Project  →</a>
        </div>

        <div class="project-box">
            <div class="project-box-header">
            <div class="project-box-header-video">
              <img src="images/project/project03/concept_rotation.gif" height="100%">
                  <! --<video poster="images/project/project03/SunglassesConcept_Slider_03.jpg" src="images/project/project03/concept_rotation.webm" autoplay loop muted></video>
            </div>
            <div class="project-box-labels">
                <span class="project-box-label">Sunglasses Concept / 02</span>
                <span class="project-box-label">Product Design</span>
            </div>
            </div>
            <a href="#sunglassesconcept" class="project-button">View Project  →</a>
        </div>

        <div class="project-box">
            <div class="project-box-header">
              <div class="project-box-header-mobile">
                <div class="project-box-header-video-mobile">
                  <! --<video src="images/project/project05/babysam-video.mp4" autoplay loop muted></video>
                </div>
                <div class="project-box-header-mobile-grid">
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project05/BabySam_Display_01.jpg" alt="Image 1">
                  </div>
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project05/BabySam_Display_02.jpg" alt="Image 2">
                  </div>
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project05/BabySam_Display_03.jpg" alt="Image 3">
                  </div>
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project05/BabySam_Display_03.jpg" alt="Image 4">
                  </div>
                </div>
              </div>
              <div class="project-box-labels">
                  <span class="project-box-label">BabySam App / 03</span>
                  <span class="project-box-label">Mobile App Design</span>
              </div>
            </div>
            <a href="#babysam" class="project-button">View Project  →</a>
        </div>

        <div class="project-box">
            <div class="project-box-header">
            <div class="project-box-header-video">
              <! --<video src="images/project/project01/jobportal_video.webm" autoplay loop muted></video>
            </div>
                <div class="project-box-labels">
                    <span class="project-box-label">BAAA Job Portal / 04</span>
                    <span class="project-box-label">UX/UI Design</span>
                </div>
            </div>
            <a href="#jobportal" class="project-button">View Project  →</a>
        </div>

        <div class="project-box">
            <div class="project-box-header">
              <div class="project-box-header-mobile">
                <div class="project-box-header-video-mobile">
                  <! --<video src="images/project/project06/advchallenge-video.webm" autoplay loop muted></video>
                </div>
                <div class="project-box-header-mobile-grid">
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project06/TheAdvChallenge_Display_01.jpg" alt="Image 1">
                  </div>
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project06/TheAdvChallenge_Display_02.jpg" alt="Image 2">
                  </div>
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project06/TheAdvChallenge_Display_03.jpg" alt="Image 3">
                  </div>
                  <div class="project-box-header-mobile-grid-image">
                    <img src="images/project/project06/TheAdvChallenge_Display_04.jpg" alt="Image 4">
                  </div>
                </div>
              </div>
              <div class="project-box-labels">
                  <span class="project-box-label">The Adventure Challenge / 05</span>
                  <span class="project-box-label">Mobile App Design</span>
              </div>
            </div>
            <a href="#advchallenge" class="project-button">View Project  →</a>
        </div>

        <div class="project-box">
            <div class="project-box-header">
                <div class="project-box-header-video">
                  <! --<video src="images/project/project02/enterpriseSoftware-video.webm" autoplay loop muted></video>
                </div>
                <div class="project-box-labels">
                    <span class="project-box-label">Enterprise Software Redesign / 06</span>
                    <span class="project-box-label">UX/UI Design</span>
                </div>
            </div>
            <a href="#thesis" class="project-button">View Project  →</a>
        </div>
    
      </div>

      <div class="experience-grid-container">
        <hr class="projects-line">
        <div class="experience-grid">
          <div class="experience-cell combined">
            <p>What is my area of expertise, and how can it <span class="highlight">enhance and contribute</span> to your business?</p>
          </div>
          <div class="experience-cell">
            <div class="experience-content">
              <img class="experience-icon" src="images/icons/uxdesign.png">
              <div class="experience-header">UX DESIGN</div>
            </div>
            <span class="experience-text">I build user-centered concepts using research, personas, and prototyping to enhance engagement and drive business success.</span>
          </div>
          <div class="experience-cell">
            <div class="experience-content">
              <img class="experience-icon" src="images/icons/uidesign.png">
              <div class="experience-header">UI DESIGN</div>
            </div>
            <span class="experience-text">I design captivating interfaces, balancing the layout, the colours, and the looks that follow certain design principles and human psychology.</span>
          </div>
          <div class="experience-cell empty"></div>
          <div class="experience-cell">
            <div class="experience-content">
              <img class="experience-icon" src="images/icons/socialmedia.png">
              <div class="experience-header">SOCIAL MEDIA</div>
            </div>
            <span class="experience-text">I strategize, create, and curate content to engage audiences hence boosting the target’s online/offline presence.</span>
          </div>
          <div class="experience-cell">
            <div class="experience-content">
              <img class="experience-icon" src="images/icons/graphicdesign.png">
              <div class="experience-header">GRAPHIC DESIGN</div>
            </div>
            <span class="experience-text">I craft eye-catching visuals with Adobe Suite, applying typography and layout principles for impactful design solutions.</span>
          </div>
          <div class="experience-cell">
            <div class="experience-content">
              <img class="experience-icon" src="images/icons/photography.png">
              <div class="experience-header">PHOTOGRAPHY</div>
            </div>
            <span class="experience-text">I capture stories when combining creativity with passion, and I tend to focus on the small details that often change the whole picture.</span>
          </div>
        </div>
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

    
     
</section>
    `;
  }
}