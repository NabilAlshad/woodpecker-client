import React, { useState } from "react";

const AddServices = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("description", info.description);

    fetch("https://sleepy-reaches-65292.herokuapp.com/services", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="col-md-6">
      <h1>AddServices</h1>
      <form target="_blank|_self|_parent|_top|framename">
        <div className="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            required
            onBlur={handleBlur}
            type="text"
            name="name"
            class="form-control mb-2"
            id="exampleFormControlInput1"
            placeholder="name"
          ></input>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="">service Description</label>
          <textarea
            required
            onBlur={handleBlur}
            class="form-control "
            name="description"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group mt-3">
          <input
            class="form-control mt-3"
            onChange={handleFileChange}
            type="file"
            id="exampleFormControlTextarea1"
            rows="3"
          ></input>
        </div>
        <input
          onClick={onSubmit}
          type="submit"
          className="btn btn-danger mt-3"
        ></input>
      </form>
    </div>
  );
};

export default AddServices;
