const LocationButtonSvg = ({ className }: { className?: string }) => {
	return (
		<svg
			width="60"
			height="60"
			viewBox="0 0 60 60"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<g id="raphael:location">
				<path
					id="Vector"
					d="M30 9C26.8174 9 23.7652 10.2337 21.5147 12.4297C19.2643 14.6256 18 17.604 18 20.7096C18 27.178 30 49 30 49C30 49 42 27.1795 42 20.7096C42 17.604 40.7357 14.6256 38.4853 12.4297C36.2348 10.2337 33.1826 9 30 9ZM30 26.3052C28.4791 26.3052 27.0206 25.7157 25.9452 24.6663C24.8698 23.6169 24.2656 22.1937 24.2656 20.7096C24.2656 19.2255 24.8698 17.8023 25.9452 16.7529C27.0206 15.7035 28.4791 15.114 30 15.114C31.5209 15.114 32.9794 15.7035 34.0548 16.7529C35.1302 17.8023 35.7344 19.2255 35.7344 20.7096C35.7344 22.1937 35.1302 23.6169 34.0548 24.6663C32.9794 25.7157 31.5209 26.3052 30 26.3052Z"
					stroke="#E6E6E6"
					strokeWidth="3"
				/>
			</g>
		</svg>
	);
};

export default LocationButtonSvg;
