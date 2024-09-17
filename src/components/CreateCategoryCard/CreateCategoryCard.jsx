import Popup from "../Popup/Popup";
import "./CreateCategoryCard.scss";

const CreateCategoryCard = () => {
  return (
    <div className="create-category">
      <div className="create-category__card">
        <div>+</div>

        <Popup>
          <div>Hello </div>
        </Popup>
      </div>

      <div className="create-category__title">New</div>
    </div>
  );
};

export default CreateCategoryCard;
