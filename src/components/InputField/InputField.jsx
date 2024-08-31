import "./InputField.scss";

const InputField = ({ labelName, labelId, ...otherProps }) => {
  return (
    <div className="input-field">
      <label htmlFor={labelId}>{labelName}:</label>
      <input id={labelId} required {...otherProps} />
    </div>
  );
};

export default InputField;
