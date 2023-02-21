export default function PrimaryButton({ title, type, color }) {
	return (
		<div className={`border-[${color}] border-2 w-full`}>
			<input
				value={title}
				type={type}
				className={`w-full bg-[${color}] hover:bg-[#a5c1e2] hover:text-white px-5 py-2 text-black font-body text-center border-2 cursor-pointer transition duration-300 ease-in border-black`}
			/>
		</div>
	);
}
