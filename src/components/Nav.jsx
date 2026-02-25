import React from 'react'

const Nav = () => {
  return (
		<nav className="glass-nav">
			<div className="nav-content">
				<div className="logo"><img src="ClearLogo.png" alt="" /></div>
				<ul className="nav-links">
					<li>
						<a href="#" className='link__hover--effect'>Home</a>
					</li>
					<li>
						<a href="#" className='link__hover--effect'>About</a>
					</li>
					<li>
						<a href="#" className='link__hover--effect'>Projects</a>
					</li>
					<li>
						<a href="#" className='link__hover--effect'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
  );
}

export default Nav