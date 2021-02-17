import React from 'react' 
import { Link } from 'react-router-dom'

const LandingPage = (props) => {
  return (
    <div className='landing-page'>
      <div className="grid-container text-center landing-header grid-margin-y grid-y">
        <div className='cell'>
          <h3><strong>Square One</strong></h3>
        </div>
        <div className='cell'>
          <h5>
            <Link className='landing-link' to='/genres'>Explore The Genres!</Link>
          </h5>
        </div>
        <div className='cell'>
          <div className="grid-x grid-padding-x grid-margin-x grid-margin-y grid-padding-y">
            <div className="cell small-12 medium-4 landing-callout align-center">
              <h5><strong>Explore</strong> an ever growling list of games!</h5>
            </div>
            <div className="cell small-12 medium-4 landing-callout">
              <h5><strong>Help</strong> your fellow enthusiasts find the right game for them by leaving honest reviews and ratings!</h5>
            </div>
            <div className="cell small-12 medium-4 landing-callout">
              <h5><strong>Find</strong> the game that you never knew you wanted!</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage