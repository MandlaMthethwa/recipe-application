import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../images/loader.gif';

function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recipe details from the API
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data.meals[0] || null);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const handleCheckboxChange = (index) => {
    setRecipe((prevRecipe) => {
      const updatedInstructions = [...prevRecipe.strInstructions.split('\n')];
      updatedInstructions[index] = updatedInstructions[index].startsWith('✓')
        ? updatedInstructions[index].slice(2)
        : `✓ `;

      // Check if all checkboxes are checked
      const allChecked = updatedInstructions.every((instruction) => instruction.startsWith('✓'));

      if (allChecked) {
        // Trigger the animation
        const letsEatElement = document.querySelector('.lets-eat');
        if (letsEatElement) {
          letsEatElement.classList.add('animate');
        }
      }

      return {
        ...prevRecipe,
        strInstructions: updatedInstructions.join('\n'),
      };
    });
  };

  const renderInstructions = () => {
    const instructions = recipe.strInstructions.split('\n');
    return (
      <ul>
        {instructions.map((instruction, index) => (
          <li key={index}>
            <h3>
              {instruction}
              <input
                type="checkbox"
                checked={instruction.startsWith('✓')}
                onChange={() => handleCheckboxChange(index)}
              />
            </h3>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="recipe-details-page">
      {loading ? (
        <div className="loader-container">
          <img src={Loader} alt="Loading..." />
        </div>
      ) : recipe ? (
        <>
          <h2>{recipe.strMeal}</h2>
          <section className="speciality">

          <div className="box-container">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
            <h2>Ingredients</h2>
            <div className="box-container">
              {Object.entries(recipe)
                .filter(([key]) => key.startsWith('strIngredient') && recipe[key])
                .map(([key, value]) => (
                  <div className="box" key={key}>
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${value}-Small.png`}
                      alt={value}
                    />
                    {value}
                  </div>
                ))}
            </div>
          </section>
          <h2>Instructions</h2>
          <table>
            <tr>
              <td>
                {renderInstructions()}
              </td>
            </tr>
          </table>
          {/* <h3>Cooking Time</h3>
          <p>{recipe.strCookTime}</p>
          <CountdownTimer time={recipe.strCookTime} /> */}
        </>
      ) : (
        <p>Recipe details not found</p>
      )}
    </div>
  );
}

function CountdownTimer({ time }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    if (remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [remainingTime]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return [minutes, seconds];
  };

  return (
    <div className="countdown-timer">
      <p>Remaining Time: {formatTime(remainingTime)}</p>
      {remainingTime === 0 && <p>Timer Finished!</p>}
    </div>
  );
}

export default RecipeDetailsPage;
