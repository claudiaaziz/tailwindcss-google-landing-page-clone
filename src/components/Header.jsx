import { faFlask, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
	return (
		<div className='bg-pink-100 flex text-pink-500 py-4 px-8 justify-between text-md items-center'>
			<div className='flex gap-5 items-center'>
				<div className='cursor-pointer'>About</div>
				<div className='cursor-pointer'>Store</div>
			</div>

			<div className='flex gap-5 items-center'>
				<div className='cursor-pointer'>Gmail</div>
				<div className='cursor-pointer'>Images</div>
				{/* <div className='flex gap-5'> */}
				<FontAwesomeIcon icon={faFlask} className='cursor-pointer' />
				{/* <i className='fa-solid fa-user text-2xl cursor-pointer'></i> */}
				<FontAwesomeIcon
					icon={faUser}
					className='text-2xl cursor-pointer ml-5'
				/>
				{/* </div> */}
			</div>
		</div>
	);
}
