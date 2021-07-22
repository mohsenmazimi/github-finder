import React from "react";

const ClearData = ({type}) => {
	return (
		<div className='m-auto text-center mt-3'>
			<button style={{display:{type}}} className='btn btn-light w-75'>
				Submit
			</button>
		</div>
	);
};
export default ClearData;
