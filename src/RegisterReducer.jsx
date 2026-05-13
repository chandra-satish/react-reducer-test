import { useReducer, useState } from "react";
const initialState = {
  id: "",
  name: "",
  email: "",
  password: "",
};
const reducer = (currentState, action) => {
  // return {
  //   ...currentState,
  //   [action.fieldName]: action.fieldValue,
  // };
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...currentState,
        [action.payload.fieldName]: action.payload.fieldValue,
      };
    case "RESET_FORM":
      return initialState;
    default:
      return currentState;
  }
};

function RegisterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState([]);
  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    // console.log(fieldName);
    // console.log(fieldValue);
    dispatch({
      type: "UPDATE_FIELD",
      payload: {
        fieldName: fieldName,
        fieldValue: fieldValue,
      },
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setUser([...user, state]);
    dispatch({
      type: "RESET_FORM",
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
            value={state.id}
            placeholder="Id"
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={state.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={state.password}
            placeholder="Password"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="register-btn">
            Register
          </button>
        </form>
        {user.length > 0 && (
          <div className="user-list">
            <h3>Registered Users:</h3>
            {user.map((item, index) => {
              return (
                <div className="user-card" key={index}>
                  <p>
                    <strong>Id:{item.id}</strong>
                  </p>
                  <p>
                    <strong>Name:{item.name}</strong>
                  </p>
                  <p>
                    <strong>Email:{item.email}</strong>
                  </p>
                  <p>
                    <strong>Password:{item.password}</strong>
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default RegisterReducer;
