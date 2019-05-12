import React from "react";

const Form  = (props) =>  {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  }
  return (
    <div className="d-flex justify-content-center">
      <form className="form-inline" onSubmit={props.onSubmit}>
        <input type="text" placeholder="City Name" className="form-control" onChange={handleChange}/>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Form;
