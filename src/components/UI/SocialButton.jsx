import React from 'react'

const SocialButton = ({text, icon}) => {
  return (
      <button className='social__button'>
          <div className="sign">
              {icon}
          </div>
          <div class="text">{text}</div>
      </button>
  )
}

export default SocialButton