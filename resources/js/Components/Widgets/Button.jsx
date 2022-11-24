export default function Button(props) {
	return (
		<div className='inline-block m-2'>
			<a href='#' className='inline-block p-2 font-semibold text-xl text-black-300 text-center hover:text-blue-600 invisible md:visible'>
				{props.name}
			</a>
		</div>
	);
}
