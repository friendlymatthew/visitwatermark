export default function CarouselButton({ href, prev }) {
	return (
		<div>
			{prev == true ? (
				<a href={href} className="btn btn-circle">
					❮
				</a>
			) : (
				<a href={href} className="btn btn-circle">
					❯
				</a>
			)}
		</div>
	);
}
