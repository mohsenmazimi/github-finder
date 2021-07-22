import React from "react";
import "./userList.css";
const UserList = ({ usersList }) => {
	return (
		<div className='col-4 my-4'>
			<img
				style={{ width: "300px" }}
				src={usersList.avatar_url}
				alt=''
				className='image-fluid'
			/>
			<div className='text-center mt-3' style={{ width: "300px" }}>
				<p
					id='p-login'
					className='bg-primary py-2'
					style={{ fontSize: "20px" }}>
					{usersList.login}
				</p>
			</div>
		</div>
	);
};
export default UserList;
