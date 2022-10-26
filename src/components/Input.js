import React from "react";

function Input() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
  });
  console.log(formData.employment);

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
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
      <textarea
        placeholder="Comments"
        name="comments"
        onChange={changeHandler}
        value={formData.comments}
      />
      <div>
        <input
          type="checkbox"
          id="isFriendly"
          onChange={changeHandler}
          checked={formData.isFriendly}
          name="isFriendly"
        />
        <label htmlFor="isFriendly">Are you friendly</label>
      </div>
      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={changeHandler}
        />
        <label htmlFor="unemployed">Unemployed</label>

        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={changeHandler}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={changeHandler}
        />
        <label htmlFor="part-time">Part-time</label>
      </fieldset>
    </form>
  );
}

export default Input;
