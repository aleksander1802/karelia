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
			className="text-[24px] font-extralight"
		>
			{link.link}
		</Link>
	));

	return <nav className="flex flex-col gap-[36px] pt-[8px] w-max">{menu}</nav>;
}
