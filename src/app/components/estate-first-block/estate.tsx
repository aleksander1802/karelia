import Image from 'next/image';
import { Poiret_One } from 'next/font/google';
import Logo from '@/app/assets/svg/Logo-svg';
import LogoLink from '@/app/assets/svg/Logo-link-svg';

const poiret = Poiret_One({ subsets: ['cyrillic'], weight: '400' });

export default function Estate() {
	const estateDescription =
		'Уютная усадьба в атмосфере первозданной природы, укрытая природой от окружения';

	const width = 1120;
	const height = 797;

	const imageStyle = {
		width: width || 1120,
		height: height || 797,
	};

	return (
		<div className="estate relative min-h-screen bg-cover bg-no-repeat bg-center text-3xl cursor-default">
			<div className="p-[220px] pt-[331px] pb-0">
				<div className="inline-flex justify-end items-center max-w-[418px] h-[78px] text-[20px] text-font_light leading-[140%] border-l-2 pl-[35px]">
					{estateDescription}
				</div>
				<h1 className="text-[198px] pt-[370px] pb-[138px] leading-[95px] -tracking-[5px] font-mirra flex justify-between ">
					Усадьба
					<span className="relative">
						в
						<div className="absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-[57%] max-w-max">
							<Logo width="354" />
						</div>
					</span>
					карелии
				</h1>

				<form className="relative z-30 flex justify-between flex-row justify-items-center items-center h-[81px] bg-primary [&>*]:w-[357px] ">
					<span className="font-mirra text-secondary flex pt-[23px] pr-[38px] pb-[12px] pl-[45px] justify-end items-center text-[66px] leading-[90px]">
						Арендовать
					</span>

					<input
						type="text"
						name="name"
						id="name"
						placeholder="Ваше имя"
						className="h-[74px] placeholder:text-secondary focus:placeholder:text-font_light bg-primary border-l-[1px] border-l-secondary outline-none py-[22px] px-[37px] text-[20px]"
					/>

					<input
						type="number"
						name="number"
						id="number"
						placeholder="Телефон"
						className="h-[74px] placeholder:text-secondary focus:placeholder:text-font_light bg-primary border-l-[1px] border-l-secondary outline-none input-number py-[22px] px-[37px] text-[20px]"
					/>

					<button
						type="submit"
						className="flex justify-center items-center text-[24px] font-light bg-accent h-[81px] py-[26px] px-[116px] hover:bg-accent_light"
					>
						Отправить
					</button>
				</form>

				<div
					className={`flex flex-wrap  pt-[265px] [&>*]:w-max-content [&>*]:h-[96px]  [&>div]:flex [&>div]:flex-col [&>div]:justify-between  gap-x-[144px] gap-y-[131px]
					font-extralight not-italic`}
				>
					<div className="pr-[18px]">
						<div>
							<span className={`${poiret.className} text-[65px]`}>
								0,5
							</span>
							<span
								className={`${poiret.className} text-[65px] pl-[10px]`}
							>
								га
							</span>
						</div>

						<span className="text-secondary text-[24px]">
							Площадь усадьбы
						</span>
					</div>
					<div>
						<div>
							<span className={`${poiret.className} text-[65px]`}>
								0,25
							</span>
							<span
								className={`${poiret.className} text-[65px] pl-[10px]`}
							>
								га
							</span>
						</div>
						<span className="text-secondary text-[24px]">
							Собственный берег
						</span>
					</div>
					<div className="pr-[18px]">
						<div>
							<span
								className={`${poiret.className} text-[65px] `}
							>
								200
							</span>
							<span
								className={`${poiret.className} text-[65px] pl-[10px] relative`}
							>
								м
								<span className="text-[30px] absolute top-[3px]">
									2
								</span>{' '}
							</span>
						</div>

						<span className="text-secondary text-[24px]">
							Master House
						</span>
					</div>
					<div>
						<div>
							<span
								className={`${poiret.className} text-[65px] `}
							>
								150
							</span>
							<span
								className={`${poiret.className} text-[65px] pl-[10px] relative`}
							>
								м
								<span className="text-[30px] absolute top-[3px]">
									2
								</span>{' '}
							</span>
						</div>

						<span className="text-secondary text-[24px]">
							Guest House
						</span>
					</div>
					<div>
						<div>
							<span
								className={`${poiret.className} text-[65px] `}
							>
								230
							</span>
							<span
								className={`${poiret.className} text-[65px] pl-[10px] relative`}
							>
								м
								<span className="text-[30px] absolute top-[3px]">
									2
								</span>{' '}
							</span>
						</div>

						<span className="text-secondary text-[24px]">
							Spa house
						</span>
					</div>
				</div>

				<div className="pt-[207px] w-[948px] font-mirra text-[150px] leading-[121px] text-secondary">
					В вашем распоряжении
				</div>
			</div>

			<div className="absolute bottom-0 right-1/2 translate-x-[50%] -translate-y-[92%]">
				<LogoLink
					color="#805140"
					width="230"
				/>
			</div>

			<Image
				src={'/images/estate/tree.png'}
				width={1120}
				height={797}
				alt="tree"
				priority={true}
				className="absolute  bottom-0 right-0 translate-x-[15%] translate-y-[26%] z-20"
				style={imageStyle}
			/>
		</div>
	);
}
