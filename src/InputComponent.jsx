import React, { useState, useRef, useEffect } from "react";
import "./InputComponent.css";

function InputComponent(props) {
  const inputEl = useRef(null);
  const [value, setValue] = useState("");
  const [dirty, setDirty] = useState("");

  function EmptyCheck() {
    if (value.length == 0) {
      setDirty(" empty ");
    } else {
      setDirty("");
    }
  }

  return (
    <div className="flex flex-col  justify-center relative">
      <label for="{props.title}">{props.title}:</label>
      <input
        className={"custom_field " + dirty}
        type={props.type}
        name={props.title}
        id={props.title}
        placeholder={props.title}
        minlength="1"
        onBlur={() => setDirty(value.length == 0 ? " empty " : "")}
        ref={inputEl}
        onChange={(event) => {
          setValue(event.target.value);
          setDirty(event.target.value.length == 0 ? " empty " : "");
        }}
        value={value}
      />
      <img
        src="icon-error.svg"
        alt="error icon"
        className="absolute w-[20px] h-auto right-4  top-4 opacity-0"
      />
      <p className="text-right text-red-700 pt-1 italic hidden">
        <span className="capitalize"> {props.title} </span>cannot be empty
      </p>
    </div>
  );
}

export default InputComponent;
