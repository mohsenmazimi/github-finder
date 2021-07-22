import React from "react";
// import Github from "./api/Github";
import axios from "axios";
import Search from "./components/Search";
import Users from "./components/Users";
import Spinner from "./components/Spinner";
// import ClearData from "./components/ClearData";

class App extends React.Component {
	state = {
		users: {},
		textSearch: "",
		status: 0,
	};
	async componentDidMount() {
		const user = await axios.get("https://api.github.com/users");
		this.setState({ users: user.data, status: user.status });
	}
	onSubmitSearch = async (textSearch) => {
		if (textSearch !== "") {
			this.setState({ users: {}, status: 0 });
			// console.log(this.state);
			const user = await axios.get(
				`https://api.github.com/search/users?q=${textSearch}`
			);
			console.log(user);
			this.setState({ users: user.data.items, status: user.status });
			// console.log(user.data);
		}
	};
	CheckState = () => {
		return this.state.users !== [] ? "block" : "none";
	};
	ClearData = () => {
		if (this.state.users !== []) {
			this.setState({ users: [], status: 0 });
		}
	};
	renderContent() {
		const { status, users } = this.state;

		if (users === {}) {
			return "<h1 className='alert alert-danger text-center'>this is profile is note defind</h1>";
		}
		if (status === 200) {
			return <Users users={users} />;
		}
		return <Spinner message={"Loading Profile Github..."} />;
	}
	render() {
		const { CheckState } = this;
		return (
			<div>
				<Search submitSearch={this.onSubmitSearch} />
				<div className='m-auto text-center mt-3'>
					<button
						onClick={this.ClearData}
						style={{ display: { CheckState } }}
						className='btn btn-light w-75'>
						Clear
					</button>
				</div>

				<div className='container'>
					<div className='row'>{this.renderContent()}</div>
				</div>
			</div>
		);
	}
}
export default App;
