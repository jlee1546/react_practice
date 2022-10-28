import React from "react";

function Input() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  function clickHandler(event) {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function submitFormData(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={submitFormData}>
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={clickHandler}
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={clickHandler}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={clickHandler}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={clickHandler}
      />
      <input
        name="passwordConfirmation"
        type="password"
        placeholder="Confirm"
        value={formData.passwordConfirmation}
        onChange={clickHandler}
      />
      <button>Submit</button>
    </form>
  );
}
export default Input;
