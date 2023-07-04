import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../images/loader.gif';

function CategoryPage() {
  const { categoryName } = useParams();
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch meals by category from the API
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryMeals(data.meals || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <section className="catergory-list">
      {loading ? (
        <div className="loader-container">
          <img src={Loader} alt="Loading..." />
        </div>
      ) : (
        <>
          <h2 className="heading"><span>{categoryName} Recipes</span></h2>

          <div className="box-container">
            {categoryMeals.length > 0 ? (
              categoryMeals.map((meal) => (
                <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal}>
                  <div className="box">
                    <img className="image" src={meal.strMealThumb} alt={meal.strMeal} />
                    <div className="content">
                      <h3>{meal.strMeal}</h3>
                      <p>{meal.strInstructions}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No recipes available for this category</p>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default CategoryPage;
