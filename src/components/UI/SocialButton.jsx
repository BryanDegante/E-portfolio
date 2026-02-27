import React from 'react'

const SocialButton = ({text, icon, link}) => {
  return (
      <button className='social__button'>
          <div className="sign">
              {icon}
          </div>
          <a href='' className="text">{text}</a>
      </button>
  )
}

export default SocialButton