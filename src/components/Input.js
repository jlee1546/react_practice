import React from "react";

function Input() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    comments: "",
    okToMail: true,
  });

  function clickHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  console.log(formData.okToMail);
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
      <textarea
        value={formData.comments}
        name="comments"
        placeholder="Comments"
        onChange={clickHandler}
      />

      <button>Submit</button>
      <div>
        <input
          type="checkbox"
          id="okToMail"
          name="okToMail"
          checked={formData.okToMail}
          onChange={clickHandler}
        />
        <label htmlFor="okToMail">Like to sign up for newsletter?</label>
      </div>
    </form>
  );
}
export default Input;
