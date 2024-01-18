import Link from 'next/link';

export default function AdaptiveNavLinksLeft() {
	const leftNavLinks = [
		{
			link: 'Основной дом',
		},
		{
			link: 'Спа-комплекс',
		},
		{
			link: 'Природа',
		},
	];

	const leftMenu = leftNavLinks.map((link, index) => (
		<Link
			key={index}
			href={`#${link.link}`}
			className="
			xl:text-[24px] text-[18px]
			 font-extralight"
		>
			{link.link}
		</Link>
	));

	return (
		<nav
			className="
			relative flex flex-col 
			xl:gap-[36px] gap-[22px]  
			pt-[8px] 
			w-max"
		>
			{leftMenu}
		</nav>
	);
}

export function AdaptiveNavLinksRight() {
	const rightNavLinks = [
		{
			link: 'Гостевой дом',
		},
		{
			link: 'Територия',
		},
		{
			link: 'Расположение',
		},
	];

	const rightMenu = rightNavLinks.map((link, index) => (
		<Link
			key={index}
			href={`#${link.link}`}
			className="
			xl:text-[24px] text-[18px]
			 font-extralight"
		>
			{link.link}
		</Link>
	));

	return (
		<nav
			className="
			relative flex flex-col 
			xl:gap-[36px] gap-[22px] 
			pt-[8px] 
			w-max"
		>
			{rightMenu}
		</nav>
	);
}
