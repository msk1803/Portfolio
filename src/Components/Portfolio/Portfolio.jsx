import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG1} alt="projectPic"/>
          </div>
          <h3>Crypto Currency Tracker</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/msk1803/CryptoTracker" target="__blank" className='btn'>GitHub</a>
          <a href="https://crypto-tracker-five-sooty.vercel.app/" target="__blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG2} alt="projectPic"/>
          </div>
          <h3>Flappy Bird</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/msk1803/Flappy_Bird" target="__blank" className='btn'>GitHub</a>
          <a href="https://master--fantastic-unicorn-c6aec4.netlify.app/" target="__blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG3} alt="projectPic"/>
          </div>
          <h3>Calculator</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/msk1803/JS-Mini-Project---1---JavaScript-Mini-Project---n7it1k3bl8mm" target="__blank" className='btn'>GitHub</a>
          <a href="https://628a6310f4e87b7e4375f3eb--papaya-dolphin-a2a3a2.netlify.app/" target="__blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG4} alt="projectPic"/>
          </div>
          <h3>Netflix Clone</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/msk1803/HTML---CSS-Mini-Project---HTML---CSS-Mini-Project---h240us3sqsxt" target="__blank" className='btn'>GitHub</a>
          <a href="https://master--friendly-tartufo-3071d1.netlify.app/#" target="__blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG5} alt="projectPic"/>
          </div>
          <h3>Portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/msk1803/Portfolio" target="__blank" className='btn'>GitHub</a>
          <a href="https://portfolio-mu-pink.vercel.app/" target="__blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={IMG6} alt="projectPic"/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/msk1803/CryptoTracker" target="__blank" className='btn'>GitHub</a>
          <a href="https://crypto-tracker-five-sooty.vercel.app/" target="__blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio