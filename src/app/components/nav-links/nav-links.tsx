import Link from 'next/link';

export default function NavLinks() {
	const navLinks = [
		{
			link: 'Основной дом',
		},
		{
			link: 'Спа-комплекс',
		},
		{
			link: 'Природа',
		},
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

	const menu = navLinks.map((link, index) => (
		<Link
			key={index}
			href={`#${link.link}`}
			className="
			xl:text-[24px] lg:text-[18px]
			 font-extralight"
		>
			{link.link}
		</Link>
	));

	return (
		<nav
			className="relative flex flex-col 
		xl:gap-[36px] lg:gap-[22px] 
		pt-[8px] 
		w-max"
		>
			{menu}
		</nav>
	);
}
