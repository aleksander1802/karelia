'use client';
import { useState } from 'react';
import NavLinks from '../nav-links/nav-links';

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	const backgroundContainer = isOpen
		? 'h-[100vh] index  xl:pl-[2rem] lg:pl-[5rem] sm:pl-[3rem] pl-[1rem]'
		: 'h-0  xl:pl-[2rem] lg:pl-[5rem] sm:pl-[3rem] pl-[1rem]';

	const backgroundLinks = isOpen ? ' top-[4rem] ' : ' top-[-544px] ';

	return (
		<div className="fixed top-0 left-0 index w-full">
			<button
				type="button"
				className="absolute top-0 left-[30px] sm:left-[43px] lg:left-[100px] xl:left-0  
				xl:w-[72px] xl:h-[67px]
				sm:w-[52px] sm:h-[48px]		
				w-[45px] h-[42px]		
				bg-accent z-100 outline-none flex flex-col items-center justify-center gap-[12px] border-[1px] border-primary"
				onClick={() => setIsOpen((state) => !state)}
			>
				<span
					className={`absolute  
					xl:w-11 sm:w-8 w-7
					 h-[2px] bg-font_light duration-500 ${
							isOpen ? 'rotate-45' : '-translate-y-1.5'
						}`}
				></span>
				<span
					className={`absolute  
					xl:w-11 sm:w-8 w-7 
					h-[2px] bg-font_light duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
				></span>
				<span
					className={`absolute  
					xl:w-11 sm:w-8 w-7 
					h-[2px] bg-font_light duration-500 ${
						isOpen ? '-rotate-45' : 'translate-y-1.5'
					}`}
				></span>
			</button>

			<div
				className={`bg-black/90 duration-500 ${backgroundContainer} `}
				onClick={() => setIsOpen((state) => !state)}
			>
				<div
					className={`${backgroundLinks} absolute left-[5rem] duration-500`}
				>
					<NavLinks />
				</div>
			</div>
		</div>
	);
}
