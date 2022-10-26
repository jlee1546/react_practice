import React from "react";

function Input() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  console.log(formData);

  function changeHandler(event) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={changeHandler}
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={changeHandler}
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={changeHandler}
        value={formData.email}
      />
    </form>
  );
}

export default Input;
