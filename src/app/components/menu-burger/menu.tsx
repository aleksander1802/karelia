'use client';
import { useState } from 'react';
import NavLinks from '../nav-links/nav-links';

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	const clazzFirst = `${
		isOpen ? 'origin-[13px_10px] rotate-45 duration-300' : ' duration-300'
	}`;
	const clazzSecond = `${
		isOpen ? 'opacity-0 duration-200' : 'opacity-1 duration-300'
	}`;
	const clazzLast = `${
		isOpen ? 'origin-[20px_-3px] -rotate-45 duration-300' : 'duration-300'
	}`;

	const backgroundContainer = isOpen
		? 'h-[100vh] index duration-300 p-[2rem]'
		: 'h-0 duration-300';

	const backgroundLinks = isOpen
		? 'absolute left-[5rem] top-[4rem] duration-300'
		: 'absolute left-[5rem] top-[-544px] duration-300';

	return (
		<div className="fixed top-0 index left-0 w-full ">
			<button
				type="button"
				className="absolute top-0 left-0 w-[72px] h-[67px] bg-accent z-100 outline-none flex flex-col items-center justify-center gap-[8px]"
				onClick={() => setIsOpen((state) => !state)}
			>
				<span
					className={`block w-11 h-[2px] bg-font_light ${clazzFirst}`}
				></span>
				<span
					className={`block w-11 h-[2px] bg-font_light ${clazzSecond}`}
				></span>
				<span
					className={`block w-11 h-[2px] bg-font_light ${clazzLast}`}
				></span>
			</button>

			<div
				className={`bg-black/75  ${backgroundContainer} `}
				onClick={() => setIsOpen((state) => !state)}
			>
				<div className={`${backgroundLinks}`}>
					<NavLinks />
				</div>
			</div>
		</div>
	);
}
