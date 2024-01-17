import Image from 'next/image';
import { Poiret_One } from 'next/font/google';
import Logo from '@/app/assets/svg/Logo-svg';
import LogoLink from '@/app/assets/svg/Logo-link-svg';

const poiret = Poiret_One({ subsets: ['cyrillic'], weight: '400' });

export default function Estate() {
	return (
		<div className="relative text-3xl cursor-default overflow-hidden">
			<Image
				src={'/images/estate/estate_background.png'}
				width={1920}
				height={2300}
				alt="Main background image"
				priority={true}
				className="absolute top-0 left-0 
				bg-contain bg-no-repeat bg-center -z-10"
				style={{ width: '100%', height: 'auto' }}
			/>
			<section
				className="z-50
				xl:p-[220px] xl:pt-[331px] 
				lg:p-[100px] lg:pt-[184px]
				sm:p-[43px] sm:pt-[374px]				
				p-[30px] pt-[201px]
				pb-0 
			"
			>
				<span className="absolute top-[30px] right-[217px] text-[20px] leading-[140%] hidden xl:block">
					+7 919 48 41 786
				</span>

				<span
					className="inline-flex justify-end items-center 
				xl:max-w-[418px] max-w-[294px] 
				xl:text-[20px] text-[16px]
				 text-font_light leading-[140%] border-l-2 
				 xl:pl-[35px] pl-[29px] z-50"
				>
					Уютная усадьба в атмосфере первозданной природы, <br />{' '}
					укрытая природой от окружения
				</span>

				<h1
					className="
					xl:text-[198px] sm:text-[155px] text-[84px]
					xl:mt-[330px] lg2:mt-[275px] lg:mt-[207px] sm:mt-[84px] mt-[66px]
					mb-[54px] sm:mb-[138px]
					leading-[80%] 
					lg:w-full sm:w-[659px]
					lg:h-full sm:h-max h-[132px]			
					-tracking-[5px] 
					font-mirra flex 
					lg:justify-between 
					flex-wrap lg:flex-nowrap 
					justify-center"
				>
					<span>Усадьба</span>
					<span
						className="
						relative					
						sm:w-[237px] w-[85px]
						text-center
						lg:w-max"
					>
						в
						<div className="absolute top-1/2 left-1/2 -translate-x-[52%] -translate-y-[57%] max-w-max">
							<Logo className="xl:w-[354px] xl:h-[374px] sm:w-[297px] sm:h-[297px] w-[134px] h-[134px]" />
						</div>
					</span>
					<span>карелии</span>
				</h1>

				<form
					className="
					relative 
					w-full
					z-30 flex 
					justify-between justify-items-center items-center
					lg:flex-row flex-col				 
					xl:h-[81px] lg:h-[54px] sm:h-[360px] h-[367px]
					bg-accent_input 
				 	
				 	lg:px-0 lg:py-0
				 	sm:pt-[57px] sm:pb-[86px] sm:px-[114px]	
					pt-[41px] px-[25px]	pb-[110px]	 
				 "
				>
					<span
						className="font-mirra text-secondary flex justify-center 
					xl:pt-[23px] xl:pb-[12px] xl:pl-[45px] 
					lg:pt-[18px] lg:pb-[10px] lg:pl-[45px]					
					items-center 
					lg:w-[278px] xl:w-[357px]
					xl:text-[66px] lg:text-[44px] text-[68px]					
					xl:leading-[90px]
					lg:leading-[39px]
					leading-[89%]
					"
					>
						Арендовать
					</span>

					<div className="flex lg:flex-row flex-col justify-between w-full lg:w-[556px] xl:w-[714px]">
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Ваше имя"
							className="xl:h-[81px] h-[54px] 
						input-number appearance-none 						
						placeholder:text-secondary focus:placeholder:text-font_light bg-accent_input 
						border-secondary outline-none 
						lg:border-l-[1px] lg:border-y-0 border-t-[1px]
						xl:py-[22px] xl:px-[37px] 
						xl:text-[20px] text-[16px]
						lg:py-[16px] lg:px-[37px] 
						w-full lg:w-[278px] xl:w-[357px]
						lg:text-left text-center"
						/>

						<input
							type="number"
							name="number"
							id="number"
							placeholder="Телефон"
							className="xl:h-[81px] h-[54px] 
						input-number appearance-none 						
						placeholder:text-secondary focus:placeholder:text-font_light bg-accent_input 
						border-secondary outline-none 
						lg:border-l-[1px] lg:border-y-0 border-y-[1px]
						xl:py-[22px] xl:px-[37px] 
						xl:text-[20px] text-[16px]
						lg:py-[16px] lg:px-[37px] 
						w-full lg:w-[278px] xl:w-[357px]
						lg:text-left text-center"
						/>
					</div>

					<button
						type="submit"
						className="
						lg:relative absolute
						lg:left-0 lg:bottom-0 lg:translate-x-0
						-bottom-[27px] left-1/2 -translate-x-1/2
						flex justify-center items-center 
						xl:text-[24px] text-[18px] 
						font-light bg-accent 
						xl:h-[81px] h-[54px] 
						xl:py-[26px] xl:px-[116px]
						lg:py-[16px] lg:px-[91px]
						py-[26px] sm:px-[120px] px-[96px]
						hover:bg-accent_light"
					>
						Отправить
					</button>
				</form>

				<div
					className="flex flex-wrap  
					xl:mt-[265px] lg:mt-[141px] sm:mt-[187px] mt-[115px]
					[&>*]:w-max-content 
					xl:[&>*]:h-[96px] lg:[&>*]:h-[73px] 
					[&>div]:flex [&>div]:flex-col [&>div]:justify-between
					lg:gap-x-[118px] lg:gap-y-[38px]
					lg2:gap-x-[144px] lg2:gap-y-[131px]
					sm:gap-x-[48px] sm:gap-y-[38px]
					gap-x-[20px] gap-y-[38px]
					font-extralight not-italic lineheight-normal"
				>
					<div className="sm:pr-[18px] pr-[28px]">
						<div>
							<span
								className={`${poiret.className} xl:text-[65px] sm:text-[56px] text-[44px]`}
							>
								0,5
							</span>
							<span
								className={`${poiret.className} xl:text-[65px] sm:text-[56px] pl-[10px]`}
							>
								га
							</span>
						</div>

						<span className="text-secondary xl:text-[24px] text-[18px] w-[132px] sm:w-full">
							Площадь усадьбы
						</span>
					</div>
					<div>
						<div>
							<span
								className={`${poiret.className} xl:text-[65px] sm:text-[56px] text-[44px]`}
							>
								0,25
							</span>
							<span
								className={`${poiret.className} xl:text-[65px] sm:text-[56px] pl-[10px]`}
							>
								га
							</span>
						</div>
						<span className="text-secondary xl:text-[24px] text-[18px] w-[132px] sm:w-full">
							Собственный берег
						</span>
					</div>
					<div className="pr-[18px]">
						<div>
							<span
								className={`${poiret.className} xl:text-[65px] sm:text-[56px] text-[44px]`}
							>
								200
							</span>
							<span
								className={`${poiret.className} xl:text-[65px] sm:text-[56px] text-[44px] pl-[10px] relative`}
							>
								м
								<span className="xl:text-[30px] text-[24px] absolute top-[3px]">
									2
								</span>{' '}
							</span>
						</div>

						<span className="text-secondary xl:text-[24px] text-[18px]">
							Master House
						</span>
					</div>
					<div className="pr-[28px]">
						<div>
							<span
								className={`${poiret.className} xl:text-[65px] sm:text-[56px] text-[44px]`}
							>
								150
							</span>
							<span
								className={`${poiret.className} xl:text-[65px] sm:text-[56px] text-[44px] pl-[10px] relative`}
							>
								м
								<span className="xl:text-[30px] text-[24px]  absolute top-[3px]">
									2
								</span>{' '}
							</span>
						</div>

						<span className="text-secondary xl:text-[24px] text-[18px]">
							Guest House
						</span>
					</div>
					<div>
						<div>
							<span
								className={`${poiret.className} xl:text-[65px] sm:text-[56px] text-[44px]`}
							>
								230
							</span>
							<span
								className={`${poiret.className} xl:text-[65px] sm:text-[56px] text-[44px] pl-[10px] relative`}
							>
								м
								<span className="xl:text-[30px] text-[24px]  absolute top-[3px]">
									2
								</span>{' '}
							</span>
						</div>

						<span className="text-secondary xl:text-[24px] text-[18px]">
							Spa house
						</span>
					</div>
				</div>

				<div
					className="
				xl:pt-[207px] lg:mt-[96px] sm:mt-[211px] mt-[155px]
				xl:w-[948px] lg:w-[671px] 
				font-mirra 
				xl:text-[150px] sm:text-[106px] text-[56px]
				xl:leading-[121px] sm:leading-[85px] leading-[49px]
				text-secondary"
				>
					В вашем распоряжении
				</div>
			</section>

			<div
				className="absolute 
			bottom-0 right-1/2 
			lg:translate-x-1/2 sm:translate-x-3/4 
			xl:-translate-y-[182%] sm:-translate-y-[92%]
			-translate-y-[62%] translate-x-[95%] 

			"
			>
				<LogoLink
					color="#805140"
					className="xl:w-[230px] sm:w-[178px] w-[153px]"
				/>
			</div>

			<Image
				src={'/images/estate/tree.png'}
				width={1120}
				height={797}
				alt="tree"
				priority={true}
				className="absolute bottom-0 right-0 
				lg:translate-x-[15%] 							
				lg:translate-y-[0%]
				sm:translate-x-[40%] 
				sm:-translate-y-[15%]
				translate-x-[35%]
				-translate-y-[25%]
				z-20
				xl:w-[1120px] xl:h-[797px]
				sm:w-[583px] sm:h-[415px]
				w-[299px] h-[215px]

				
				 "
			/>
		</div>
	);
}
