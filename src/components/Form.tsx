import React from "react";
import AddInput from "./AddInput";
import AddButton from "./AddButton";

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ onSubmit }: FormProps) => (
  <form className="form" onSubmit={onSubmit}>
    <AddInput />
    <AddButton />
  </form>
);

export default Form;
