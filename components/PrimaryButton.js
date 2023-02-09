export default function PrimaryButton({ title, type, color }) {
	return (
		<div className="border-[#c7ddf3] border-2 w-full">
			<input
				value={title}
				type={type}
				className={`bg-[#c7ddf3] w-full hover:bg-[#a5c1e2] hover:text-white px-5 py-2 text-black font-body text-center border-2 cursor-pointer border-black`}
			/>
		</div>
	);
}
