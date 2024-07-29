import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Search() {
	return (
		<div className='flex-1 flex flex-col justify-center items-center gap-8'>
			<h1 className='select-none text-pink-500 text-7xl'>Google</h1>

			<div className='bg-pink-100 w-[460px] flex items-center rounded-full py-3 px-5 gap-2'>
				{/* <i className='fa-solid fa-magnifying-glass text-pink-400 text-lg'></i> */}
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className='text-pink-400 text-lg'
				/>
				<input
					className='bg-transparent flex-1 outline-none'
					autoFocus
				/>
			</div>

			<div>
				<button className='bg-stone-100 text-pink-500 rounded-full py-2 px-5 mr-5'>
					Google Search
				</button>
				<button className='bg-stone-100 text-pink-500 rounded-full py-2 px-5'>
					Image Search
				</button>
			</div>
		</div>
	);
}
