import { useReducer } from "react";
const initialState = {
  id: "",
  name: "",
  email: "",
  password: "",
};
const reducer = (currentState, action) => {
  return {
    ...currentState,
    [action.fieldName]: action.fieldValue,
  };
};

function RegisterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    // console.log(fieldName);
    // console.log(fieldValue);
    dispatch({
      fieldName: fieldName,
      fieldValue: fieldValue,
    });
  };
  return (
    <>
      <div className="container">
        <h2>Registration Form</h2>
        <form>
          <input
            type="number"
            name="id"
            placeholder="Id"
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="register-btn">Register</button>
        </form>

        <div className="user-list">
          <h3>Registered Users:</h3>
          <div className="user-card">
            <p>
              <strong>Id:{state.id}</strong>
            </p>
            <p>
              <strong>Name:{state.name}</strong>
            </p>
            <p>
              <strong>Email:{state.email}</strong>
            </p>
            <p>
              <strong>Password:{state.password}</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterReducer;
