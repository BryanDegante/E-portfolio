import React from 'react'

const Nav = () => {
  return (
		<nav class="glass-nav">
			<div class="nav-content">
				<div class="logo">Brand</div>
				<ul class="nav-links">
					<li>
						<a href="#" className='link__hover--effect'>Home</a>
					</li>
					<li>
						<a href="#" className='link__hover--effect'>About</a>
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