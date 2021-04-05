import './App.css';
import SpaceBackground from './SVGs/SpaceBackground';
import Name from './SVGs/Name';
import Shuttle from './SVGs/Shuttle';
import ShuttleLanding from './SVGs/ShuttleLanding';
import GithubIcon from './SVGs/Github';
import AppIcon from './SVGs/AppIcon';
import Oppa from './images/LandingPage.png'
import RideSpot from './images/ProfilePage.jpg'
import SpacedRepetition from './images/SpaceRepetition.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <div class="group-header">
          <SpaceBackground />
          <div class="sub-header">
            <Name />
            <div className='links'>
              <a className='github-main' href="https://github.com/ArianPaymozd"><svg className='github-icon-main' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7444 14C5.13962 13 5.64768 8.5 7.67987 7C7.27882 6.39155 6.66375 4 7.1718 3.00001C8.18792 3.5 9.55173 4.23944 10.2202 5C12.2524 4 15.3007 4 16.8249 5C17.226 4.18873 18.6968 3.42254 19.3652 3C19.9668 3.60845 19.5323 5.98592 19.3652 7C20.3678 9.19718 20.8894 12.5 15.3007 14C16.1273 14.6688 17.4571 16.2652 18.3819 18.0893C19.0373 19.3821 17.7844 20.5701 16.3571 20.3176C15.3606 20.1413 14.2545 20 13.2685 20C12.0745 20 10.494 20.2071 9.12617 20.4329C7.71155 20.6663 6.56735 19.4472 7.29296 18.2106C7.81974 17.3128 8.48393 16.4725 9.20408 16C8.95342 15.662 7.9605 14.6887 6.15574 15.5C3.89979 16.5141 2.60607 14.2676 3.10739 13" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
              <h4 class="group-title">Software Engineer</h4>
              <a className='linkedin-main' href="https://www.linkedin.com/in/arian-yazdi">
              <svg className='linkedin-icon-main' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 56.75">
                <path d="M3.08,22.33H15.27V59.18H3.08Z" transform="translate(-1 -3.43)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path d="M46.72,21.11c-5.34,0-8.53,2-11.91,6.28V22.33H22.62V59.18H34.91v-20c0-4.22,2.15-8.35,7-8.35s7.78,4.13,7.78,8.25V59.17H62V38.27C62,23.74,52.16,21.11,46.72,21.11Z" transform="translate(-1 -3.43)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path d="M9.22,4.43c-4,0-7.22,2.9-7.22,6.46s3.19,6.47,7.22,6.47,7.22-2.9,7.22-6.47S13.25,4.42,9.22,4.43Z" transform="translate(-1 -3.43)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              </a>
            </div>
              <div class="item-nav">
                <nav>
                  <ul className='nav'>
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </nav>
              </div>
          </div>
        </div>
      </header>
      <main>
          <div class="group-intro">
            <div id='intro' class="item-intro">
              <div className="intro-text">
              <p>Hi, I'm Arian Yazdi. Welcome to my portfolio website! So a little bit about me. When I'm not programming my favorite thing to do is go skateboarding. I actually think it's very similar to programming in that you know what you want your final result to look like, and in order to get there you need to try and fail until you figure it out. A few other things I enjoy doing are making music with my friends, building things out of wood or metal, and binging my favorite Netflix shows. Oh, and once in a while I even leave the house!</p>
              <p>
                I would say my main personality traits are my desire to get along with everyone and my love for solving problems, both of which I think come from my father. From a young age he'd always tell me two things, "if you disagree with 99% of someone's opinions, then talk about the other percent." and "don't talk about problems you're not trying to solve." It was ingrained in me to solve not only my own problems but any problem that's presented to me, and it made problem-solving one of my favorite activities. I think that trait along with my ability to get along with everyone makes me a valuable part of any team I'm a part of.
              </p>
              </div>
              <Shuttle />
            </div>
          </div>
          <div id="about">
            <div class="group-about">
              <div class="about-text">
                <p>
                  I fell in love with coding after taking a Skillshare course on python. It was one of those "aha" moments where everything just seems to click. At the time I wasn't sure what my career would be so it seemed like it was meant to be, I decided to jump in with both feet and have loved every moment since.
                </p>
                <p>
                  I'm so excited to start working with other developers on projects since I've always felt I work better in a group. I don't know a lot of people who also love programming and It would be really great to talk about projects and ideas with other people who probably won't look at me like I'm crazy!
                </p>
              </div>
              <div id='skills' className='skills'>
                <ul className='skills-list'>
                  <li>Javascript ES6</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Python</li>
                  <li>jQuery</li>
                  <li>React</li>
                  <li>Express</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Node.js</li>
                  <li>RESTful APIs</li>
                  <li>Unit Testing</li>
                  <li>Algorithms</li>
                  <li>Data Structures</li>
                </ul>
              </div>
              <div class="projects" id="projects">
                <div className='project'>
                  <div className='project-header'>
                  <a className='github-project' href="https://github.com/ArianPaymozd/Oppa-client"><GithubIcon /></a>
                    <p className='project-title'>Oppa</p>
                    <a className='github-project' href="https://oppalearning.vercel.app/"><AppIcon /></a>
                  </div>
                  <div className='project-content'>
                    <img className='project-img' src={Oppa} alt='oppa landing page' />
                    <p className='summary-heading'>Summary</p>
                    <p>A site developed to help keep special needs students engaged in their studies with fun animations. Teachers set up classes and worksheets for students to complete</p>
                    <div className='project-technologies'>
                      <p>Technologies</p>
                      <ul className='project-technologies-list'>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSql</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='project'>
                  <div className='project-header'>
                  <a className='github-project' href="https://github.com/ArianPaymozd/RideSpot-client"><GithubIcon /></a>
                    <p className='project-title'>RideSpot</p>
                    <a className='github-project' href="https://ridespot.vercel.app/"><AppIcon /></a>
                  </div>
                  <div className='project-content'>
                    <img className='project-img' src={RideSpot} alt='ride spot profile page' />
                    <p className='summary-heading'>Summary</p>
                    <p>A place for people who enjoy sports like skateing or biking to post their favorite places for riding</p>
                    <div className='project-technologies'>
                      <p>Technologies</p>
                      <ul className='project-technologies-list'>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSql</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='project'>
                  <div className='project-header'>
                  <a className='github-project' href="https://github.com/ArianPaymozd/Spaced-Repetition-Client"><GithubIcon /></a>
                    <p className='project-title'>Space Rep</p>
                    <a className='github-project' href="https://spaced-repitition-client-eta.vercel.app/register"><AppIcon /></a>
                  </div>
                  <div className='project-content'>
                    <img className='project-img' src={SpacedRepetition} alt='spaced repetition landing page' />
                    <p className='summary-heading'>Summary</p>
                    <p>A site that helps users learn spanish using the concept of spaced repetition to encourage learning</p>
                    <div className='project-technologies'>
                      <p>Technologies</p>
                      <ul className='project-technologies-list'>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSql</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <ShuttleLanding />
            </div> 
          </div>
         
          <div className="contact-content" id="contact">
            <div className="item-links1">
              <h2><b>Send Me An Email!</b></h2>
              <h4>Email: <b>Arianyazdi@outlook.com</b></h4>
              <form action="https://formspree.io/f/xnqozqwp" method="POST">
                <input className='contact-input' type="text" id="name" name="name" placeholder="Please enter your name" required />
                <input className='contact-input' type="email" id="_replyto" name="_replyto" placeholder="Please enter your email" required />
                <input className='contact-input' type="text" id="message" name="message" placeholder="Plese enter your message" required />
                <input className='contact-input' type="submit" value="Send" />
              </form>
              </div>
            </div>
            <div class="item-links2">
            </div>
      </main>
    </div>
  );
}

export default App;
