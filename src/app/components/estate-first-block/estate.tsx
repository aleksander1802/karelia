import Image from 'next/image';
import { Poiret_One } from 'next/font/google';
import Logo from '@/app/assets/svg/Logo-svg';
import LogoLink from '@/app/assets/svg/Logo-link-svg';

const poiret = Poiret_One({ subsets: ['cyrillic'], weight: '400' });

export default function Estate() {
	return (
		<div className="estate relative min-h-screen bg-cover bg-no-repeat bg-center text-3xl cursor-default overflow-hidden">
			<div className="xl:p-[220px] xl:pt-[331px] pb-0 lg:p-[100px] lg:pt-[184px]">
				<span className="absolute top-[30px] right-[217px] text-[20px] leading-[140%] hidden xl:block">
					+7 919 48 41 786
				</span>
				<div className="inline-flex justify-end items-center xl:max-w-[418px] lg:max-w-[294px] xl:text-[20px] lg: text-[16px] text-font_light leading-[140%] border-l-2 xl:pl-[35px] lg:pl-[29px]">
					Уютная усадьба в атмосфере первозданной природы, <br />{' '}
					укрытая природой от окружения
				</div>
				<h1 className="xl:text-[198px] lg:text-[155px] xl:pt-[370px] lg:pt-[207px] pb-[138px] xl:leading-[95px] lg:leading-[99px] -tracking-[5px] font-mirra flex justify-between ">
					Усадьба
					<span className="relative">
						в
						<div className="absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-[57%] max-w-max">
							<Logo className="xl:w-[354px] xl:h-[374px] lg:w-[297px] lg:h-[297px]" />
						</div>
					</span>
					карелии
				</h1>

				<form className="relative z-30 flex justify-between flex-row justify-items-center items-center xl:h-[81px] lg:h-[54px] bg-primary xl:[&>*]:w-[357px] lg:[&>*]:w-[277px]">
					<span
						className="font-mirra text-secondary flex justify-center 
					xl:pt-[23px] xl:pb-[12px] xl:pl-[45px] 
					lg:pt-[18px] lg:pb-[10px] lg:pl-[45px]  
					items-center xl:text-[66px] lg:text-[44px] 					
					xl:leading-[90px]
					lg:leading-[39px]
					"
					>
						Арендовать
					</span>

					<input
						type="text"
						name="name"
						id="name"
						placeholder="Ваше имя"
						className="xl:h-[81px] lg:h-[54px] placeholder:text-secondary focus:placeholder:text-font_light bg-primary border-l-[1px] border-l-secondary outline-none 
						xl:py-[22px] xl:px-[37px] xl:text-[20px]
						lg:py-[16px] lg:px-[37px] lg:text-[16px]
						
						"
					/>

					<input
						type="number"
						name="number"
						id="number"
						placeholder="Телефон"
						className="xl:h-[81px] input-number appearance-none lg:h-[54px] placeholder:text-secondary focus:placeholder:text-font_light bg-primary border-l-[1px] border-l-secondary outline-none 
						xl:py-[22px] xl:px-[37px] xl:text-[20px]
						lg:py-[16px] lg:px-[37px] lg:text-[16px]"
					/>

					<button
						type="submit"
						className="flex justify-center items-center xl:text-[24px] lg:text-[18px] font-light bg-accent 
						xl:h-[81px] lg:h-[54px] 
						xl:py-[26px] xlpx-[116px]
						lg:py-[16px] lg:px-[91px]
						
						hover:bg-accent_light"
					>
						Отправить
					</button>
				</form>

				<div
					className="flex flex-wrap  
					xl:pt-[265px] lg:pt-[141px] 
					[&>*]:w-max-content xl:[&>*]:h-[96px] lg:[&>*]:h-[73px] [&>div]:flex [&>div]:flex-col [&>div]:justify-between  
					
					lg:gap-x-[118px] lg:gap-y-[38px]
					lg2:gap-x-[144px] lg2:gap-y-[131px]
					font-extralight not-italic lineheight-normal"
				>
					<div className="pr-[18px]">
						<div>
							<span
								className={`${poiret.className} xl:text-[65px] lg:text-[56px]`}
							>
								0,5
							</span>
							<span
								className={`${poiret.className} xl:text-[65px] lg:text-[56px] pl-[10px]`}
							>
								га
							</span>
						</div>

						<span className="text-secondary xl:text-[24px] lg:text-[18px]">
							Площадь усадьбы
						</span>
					</div>
					<div>
						<div>
							<span
								className={`${poiret.className} xl:text-[65px] lg:text-[56px]`}
							>
								0,25
							</span>
							<span
								className={`${poiret.className} xl:text-[65px] lg:text-[56px] pl-[10px]`}
							>
								га
							</span>
						</div>
						<span className="text-secondary xl:text-[24px] lg:text-[18px]">
							Собственный берег
						</span>
					</div>
					<div className="pr-[18px]">
						<div>
							<span
								className={`${poiret.className} xl:text-[65px] lg:text-[56px]`}
							>
								200
							</span>
							<span
								className={`${poiret.className} xl:text-[65px] lg:text-[56px] pl-[10px] relative`}
							>
								м
								<span className="xl:text-[30px] lg:text-[24px] absolute top-[3px]">
									2
								</span>{' '}
							</span>
						</div>

						<span className="text-secondary xl:text-[24px] lg:text-[18px]">
							Master House
						</span>
					</div>
					<div>
						<div>
							<span
								className={`${poiret.className} xl:text-[65px] lg:text-[56px]`}
							>
								150
							</span>
							<span
								className={`${poiret.className} xl:text-[65px] lg:text-[56px] pl-[10px] relative`}
							>
								м
								<span className="xl:text-[30px] lg:text-[24px] absolute top-[3px]">
									2
								</span>{' '}
							</span>
						</div>

						<span className="text-secondary xl:text-[24px] lg:text-[18px]">
							Guest House
						</span>
					</div>
					<div>
						<div>
							<span
								className={`${poiret.className} xl:text-[65px] lg:text-[56px]`}
							>
								230
							</span>
							<span
								className={`${poiret.className} xl:text-[65px] lg:text-[56px] pl-[10px] relative`}
							>
								м
								<span className="xl:text-[30px] lg:text-[24px] absolute top-[3px]">
									2
								</span>{' '}
							</span>
						</div>

						<span className="text-secondary xl:text-[24px] lg:text-[18px]">
							Spa house
						</span>
					</div>
				</div>

				<div
					className="
				xl:pt-[207px] lg:mt-[96px]  
				xl:w-[948px] lg:w-[671px] 
				font-mirra 
				xl:text-[150px] lg:text-[106px]
				xl:leading-[121px] lg:leading-[85px]
				text-secondary"
				>
					В вашем распоряжении
				</div>
			</div>

			<div className="absolute bottom-0 right-1/2 xl:translate-x-[50%] xl:-translate-y-[182%] lg:-translate-y-[92%]">
				<LogoLink
					color="#805140"
					className="xl:w-[230px] lg:w-[178px] "
				/>
			</div>

			<Image
				src={'/images/estate/tree.png'}
				width={1120}
				height={797}
				alt="tree"
				priority={true}
				className="absolute bottom-0 right-0 
				xl:translate-x-[15%] 
				lg:translate-x-[15%] 				
				lg:translate-y-[0%]
				z-20
				xl:w-[1120px] xl:h-[797px]
				lg:w-[583px] lg:h-[415px]
				 "
			/>
		</div>
	);
}
