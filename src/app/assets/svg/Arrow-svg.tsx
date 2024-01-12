const NavigationArrow = ({ className = '' }: { className?: string }) => {
	return (
		<svg
			width="29"
			height="34"
			viewBox="0 0 29 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`cursor-pointer hover:fill-accent_slider duration-300 disabled:opacity-[0.35] fill-font_light ${className}`}
		>
			<path d="M0 17L28.5 0.545517L28.5 33.4545L0 17Z" />
		</svg>
	);
};

export default NavigationArrow;
