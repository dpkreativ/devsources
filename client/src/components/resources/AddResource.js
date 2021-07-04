import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Button from "../button/Button";

const CustomForm = styled.form`
  .input-box {
    padding: 0.5rem 0;
  }

  .form-input {
    border-radius: 0.5rem;
    padding: 0.5rem;
    border: 2px solid var(--secondary-color);
    width: 100%;
    outline: 0;
  }
`;

const AddResource = () => {
  const [resource, setResource] = useState({
    name: "",
    description: "",
    link: "",
  });

  const nameChange = (e) => {
    setResource({ ...resource, name: e.target.value });
  };

  const descriptionChange = (e) => {
    setResource({ ...resource, description: e.target.value });
  };

  const linkChange = (e) => {
    setResource({ ...resource, link: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newResource = {
      name: resource.name,
      description: resource.description,
      link: resource.link,
    };

    await axios
      .post(`https://devsources-api.herokuapp.com/resources`, newResource)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location.reload();
  };
  return (
    <div>
      <CustomForm>
        <div className="input-box">
          <input
            type="text"
            placeholder="Title of resource"
            value={resource.name}
            onChange={nameChange}
            className="form-input"
          />
        </div>
        <div className="input-box">
          <textarea
            type="text"
            placeholder="Description"
            value={resource.description}
            onChange={descriptionChange}
            className="form-input"
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Link to resource"
            value={resource.link}
            onChange={linkChange}
            className="form-input"
          />
        </div>
        <div className="input-box">
          <Button onClick={handleSubmit}>Submit Suggestion</Button>
        </div>
      </CustomForm>
    </div>
  );
};

export default AddResource;
