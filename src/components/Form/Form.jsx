import "./Form.scss";

const Form = ({ handleSubmit, title, children }) => {
  return (
    <div className="form">
      <h2 className="form__title">{title}</h2>
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
};

export default Form;
