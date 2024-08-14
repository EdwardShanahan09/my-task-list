const InputField = ({ labelName, labelId, ...otherProps }) => {
  return (
    <div className="mb-4">
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={labelId}
      >
        {labelName}:
      </label>
      <input
        className="block w-full px-3 py-2 placeholder-gray-400 text-gray-900 bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        id={labelId}
        required
        {...otherProps}
      />
    </div>
  );
};

export default InputField;
