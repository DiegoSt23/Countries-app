import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <p>This page can't be found :C</p>
      <NavLink to="/">
        <button>Back to Home</button>
      </NavLink>     
    </div>
  )
};

export default Error