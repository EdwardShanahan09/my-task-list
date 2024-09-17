import { useState, useContext, useEffect } from "react";
import { createCategory, listCategories } from "../../lib/database/database";
import { UserContext } from "../../context/UserContext";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import "./Categories.scss";
import CreateCategoryCard from "../../components/CreateCategoryCard/CreateCategoryCard";

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
    <div className="categories">
      <h2>Categories</h2>

      <div className="categories__container">
        <CreateCategoryCard />

        {categories.map((category) => (
          <CategoryCard title={category.title} key={category.$id} />
        ))}

        {/* <input
          onChange={(event) => setCategory(event.target.value)}
          type="text"
          value={category}
        />
        <button onClick={handleNewCategory}>Add Category</button> */}
      </div>
    </div>
  );
};

export default Categories;
