import React from 'react'
import logoImg from '../../../assets/images/squid-game-logo.png'
import objectsImg from '../../../assets/images/objects-near-content.png'

const Content = () => {
	return (
		<div className='mt-28 w-1/2'>
			<img alt='' src={logoImg} className='mb-10 -ml-12' draggable={false} />
			<div className='flex ml-5'>
				<img
					alt=''
					src={objectsImg}
					className='mr-8 h-auto block'
					style={{ maxWidth: 50 }}
					draggable={false}
				/>
				<p
					className='text-white opacity-70 leading-8 text-lg'
					style={{ maxWidth: '60%' }}
				>
					Once you start the game, there is no turning back. The winner is
					alone, the loser only faces death.
				</p>
			</div>
		</div>
	)
}

export default Content
