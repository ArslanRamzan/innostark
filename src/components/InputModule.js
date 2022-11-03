import React, { useState } from "react";

const AddNewItem = (props) => {

  const [inputText, setInputText] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputText(value);
    props.getValue(name, value);
  };

  return (<>
      <label>
        {props.label}
      </label>:
      <input
        className="input-text"
        placeholder={props.placeHolder}
        value={inputText}
        type={props.type}
        name={props.name}
        onChange={onChange}
        style={{
          width: '85%',
          marginLeft: '15px'
        }}
      />
    </>
  );
};

export default AddNewItem;
