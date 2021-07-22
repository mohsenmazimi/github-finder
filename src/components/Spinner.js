import React from 'react'

const Spinner = ({message}) => {
  return (
    <div>
      <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span className="visually-hidden">Loading...</span>
</button>
<button className="btn btn-primary" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  {message}
</button>
      </div>
    )
}
Spinner.defaultProps = {
    message:"loading..."
}
export default Spinner;