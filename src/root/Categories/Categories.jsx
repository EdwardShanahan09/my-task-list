import { useState, useContext } from "react";
import { createCategory } from "../../lib/database/database";
import { UserContext } from "../../context/UserContext";

const Categories = () => {
  const [category, setCategory] = useState("");
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);

  const handleNewCategory = async () => {
    try {
      await createCategory(category, currentUser.$id);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div>
      <input
        onChange={(event) => setCategory(event.target.value)}
        type="text"
      />
      <button onClick={handleNewCategory}>Add Category</button>
    </div>
  );
};

export default Categories;
