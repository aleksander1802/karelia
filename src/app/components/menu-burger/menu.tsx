'use client';
import { useState } from 'react';
import NavLinks from '../nav-links/nav-links';

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	const clazzFirst = `${
		isOpen
			? 'xl:origin-[13px_10px] sm:origin-[6px_6px] origin-[6px_3px] rotate-45 duration-500'
			: 'duration-500'
	}`;
	const clazzSecond = `${
		isOpen ? 'opacity-0 duration-200' : 'opacity-1 duration-500'
	}`;
	const clazzLast = `${
		isOpen
			? 'xl:origin-[20px_-3px] sm:origin-[10px_-3px] origin-[5px_-3px] -rotate-45 duration-500'
			: 'duration-500'
	}`;

	const backgroundContainer = isOpen
		? 'h-[100vh] index duration-500 xl:pl-[2rem] lg:pl-[5rem] sm:pl-[3rem] pl-[1rem]'
		: 'h-0 duration-500 xl:pl-[2rem] lg:pl-[5rem] sm:pl-[3rem] pl-[1rem]';

	const backgroundLinks = isOpen
		? 'absolute left-[5rem] top-[4rem] duration-500'
		: 'absolute left-[5rem] top-[-544px] duration-500';

	return (
		<div className="fixed top-0 left-0 index w-full">
			<button
				type="button"
				className="absolute top-0 left-[30px] sm:left-[43px] lg:left-[100px] xl:left-0  
				xl:w-[72px] xl:h-[67px]
				sm:w-[52px] sm:h-[48px]		
				w-[45px] h-[42px]		
				bg-accent z-100 outline-none flex flex-col items-center justify-center gap-[8px] border-[1px] border-primary"
				onClick={() => setIsOpen((state) => !state)}
			>
				<span
					className={`block 
					xl:w-11 sm:w-8 w-7
					 h-[2px] bg-font_light ${clazzFirst}`}
				></span>
				<span
					className={`block 
					xl:w-11 sm:w-8 w-7 
					h-[2px] bg-font_light ${clazzSecond}`}
				></span>
				<span
					className={`block 
					xl:w-11 sm:w-8 w-7 
					h-[2px] bg-font_light ${clazzLast}`}
				></span>
			</button>

			<div
				className={`bg-black/90  ${backgroundContainer} `}
				onClick={() => setIsOpen((state) => !state)}
			>
				<div className={`${backgroundLinks} relative`}>
					{/* <div className='absolute -top-[2rem] -left-[8rem] bg-accent w-[500px] h-[500px] rounded-full z-0'></div> */}
					<NavLinks />
				</div>
			</div>
		</div>
	);
}
