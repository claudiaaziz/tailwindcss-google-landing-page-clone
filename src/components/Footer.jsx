import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
	return (
		<div className='flex justify-between items-center bg-pink-100 py-2 px-6 text-pink-500'>
			<div className='flex flex-1 gap-5'>
				<div>Advertising</div>
				<div>Business</div>
				<div>How Search works</div>
			</div>

			<div className='flex-1 text-center'>
				{/* <i className='fa-solid fa-heart'></i> */}{' '}
				<FontAwesomeIcon icon={faHeart} />{' '}
				<a
					href='https://tailwindcss.com/'
					target='_blank'
					className='underline'
				>
					Tailwind CSS
				</a>
			</div>

			<div className='flex flex-1 gap-5 justify-end'>
				<div>Privacy</div>
				<div>Terms</div>
				<div>Settings</div>
			</div>
		</div>
	);
}
