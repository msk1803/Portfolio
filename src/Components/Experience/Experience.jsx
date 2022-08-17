import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
       <div className="frontend">
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsFillPatchCheckFill/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill/>
           <div> 
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> <article className='experience__details'>
            <BsFillPatchCheckFill/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> 
          <article className='experience__details'>
            <BsFillPatchCheckFill/>
           <div>
           <h4>Bootstarp</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article> <article className='experience__details'>
            <BsFillPatchCheckFill/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
        </div> 


       <div className="backend">
       <h3>BackEnd Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsFillPatchCheckFill/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill/>
            <div>
            <h4>MangoDB</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article> <article className='experience__details'>
            <BsFillPatchCheckFill/>
           <div>
           <h4>PHP</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article> <article className='experience__details'>
            <BsFillPatchCheckFill/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article> <article className='experience__details'>
            <BsFillPatchCheckFill/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
       </div>
      </div>
    </section>
  )
}

export default Experience