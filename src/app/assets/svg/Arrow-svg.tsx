const NavigationArrow = ({ color = '#E6E6E6' }: { color?: string }) => {
	let fillColor: string = color;

	return (
		<svg
			width="29"
			height="34"
			viewBox="0 0 29 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="cursor-pointer"
		>
			<path
				d="M0 17L28.5 0.545517L28.5 33.4545L0 17Z"
				fill={fillColor}
			/>
		</svg>
	);
};

export default NavigationArrow;
