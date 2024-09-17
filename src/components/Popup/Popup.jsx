const Popup = ({ isOpen, isClose, children }) => {
  return (
    <div className="popup">
      <div className="popup__content">{children}</div>

      <button className="popup__close">Close</button>
    </div>
  );
};

export default Popup;
