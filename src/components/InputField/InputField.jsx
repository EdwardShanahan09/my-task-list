const InputField = ({ labelName, labelId, ...otherProps }) => {
  return (
    <div className="mb-2">
      <label className="mb-2 block text-sm" htmlFor={labelId}>
        {labelName}:
      </label>
      <input id={labelId} required {...otherProps} />
    </div>
  );
};

export default InputField;
