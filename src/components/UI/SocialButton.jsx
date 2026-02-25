import React from 'react'

const SocialButton = ({text, icon}) => {
  return (
      <button className='social__button'>
          <div className="sign">
              {icon}
          </div>
          <div className="text">{text}</div>
      </button>
  )
}

export default SocialButton