import { useState, useContext, useEffect } from "react";
import { createCategory, listCategories } from "../../lib/database/database";
import { UserContext } from "../../context/UserContext";

const Categories = () => {
  const [category, setCategory] = useState("");
  const { currentUser } = useContext(UserContext);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    if (!currentUser) return;

    try {
      const fetchedCategories = await listCategories(currentUser.$id);

      setCategories(fetchedCategories);
    } catch (error) {
      console.log("Failed to fetch categories", error);
      alert("Failed to fetch categories");
    }
  };

  const handleNewCategory = async () => {
    try {
      await createCategory(category, currentUser.$id);
      setCategory("");
      fetchCategories();
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [currentUser]);

  return (
    <div>
      <input
        onChange={(event) => setCategory(event.target.value)}
        type="text"
        value={category}
      />
      <button onClick={handleNewCategory}>Add Category</button>

      <ul>
        {categories.map((category) => (
          <li key={category.$id}>{category.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
