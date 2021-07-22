import React, { Fragment } from "react";
import UserList from "./UserList";

const Users = ({ users }) => {
  return (
		<Fragment>
			
			{users.map((user) => (
				//  console.log(user)
				<UserList usersList={user} key={user.id} />
			))}
</Fragment>
	);
};
export default Users;
