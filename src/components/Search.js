import React from "react";
class Search extends React.Component {
	state ={
		textSearch:''
	}
	onchangeText = (e) => {
			this.setState({textSearch:e.target.value})
	}
	onsubmitFrom = (e) => {
		e.preventDefault();
		const { submitSearch } = this.props;
		submitSearch(this.state.textSearch)
	}
	render() {
		return (
			<div className="w-75 m-auto">
				<form onSubmit={this.onsubmitFrom}>
					<div className='mb-3'>
						<label htmlFor='exampleInputEmail1' className='form-label'>
							Profile Github Search
						</label>
						<input
							type='text'
							className='form-control'
              id='exampleInputEmail1'
              placeholder="Enter Profile Github Search..."
							aria-describedby='emailHelp'
							value={this.state.textSearch}
							onChange={this.onchangeText}
						/>
					
					</div>
          <div className="m-auto">
          <button  type='submit' className='btn btn-primary w-100'>
						Submit
					</button>

        </div>
				</form>
			</div>
		);
	}
}
export default Search;
