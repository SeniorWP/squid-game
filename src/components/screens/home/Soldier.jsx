import React from 'react'
import soldierImg from '../../../assets/images/soldier.png'

const Soldier = () => {
	return (
		<div className='absolute -bottom-12 -right-7'>
			<img draggable={false} alt='' src={soldierImg} width={680} />
		</div>
	)
}

export default Soldier
