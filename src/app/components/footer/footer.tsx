import Link from 'next/link';

interface NavigationLinkInterface {
	link: string;
}

export default function Footer() {
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

	const NavigationLinks = ({
		links,
	}: {
		links: NavigationLinkInterface[];
	}) => {
		const menu = links.map((link, index) => (
			<Link
				key={index}
				href={`#${link.link}`}
				className="text-[24px] font-extralight"
			>
				{link.link}
			</Link>
		));

		return <nav className="flex flex-col gap-[36px] pt-[8px]">{menu}</nav>;
	};

	return (
		<div className="pt-[150px] pl-[220px] pb-[138px] pr-[291px] flex flex-row justify-between w-full">
			<div className='w-[355px] flex flex-col justify-between'>
				<h2 className='text-[90px] font-mirra leading-[96%] -tracking-[4.5px]'>estate in Karelia</h2>
				<p>Приватность, природа <br /> и комфорт на высшем уровне</p>
			</div>

			<div className="flex flex-row gap-[170px]">
				<div className="flex flex-col justify-between w-[330px]">
					<div className="flex flex-col text-[24px] gap-[7px]">
						<span>+7 919 432 584 32</span>
						<span>EstateinKarelia@gmail.com</span>
					</div>

					<span>2024</span>
				</div>

				<NavigationLinks links={navLinks} />
			</div>
		</div>
	);
}
