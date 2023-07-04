import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../images/loader.gif';
import Review1 from '../images/pic1.png';
import Review2 from '../images/pic2.png';
import Review3 from '../images/pic3.png';

import HomeImage from '../images/home-img.png';
import RequestRecipeForm from './RequestRecipeForm';

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchRecipes = () => {
    setLoading(true);
    // Fetch recipes from the API based on search query
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    // Fetch recipes from the API
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => setRecipes(data.meals || []))
      .catch((error) => console.log(error));

    // Fetch categories from the API
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories || []);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => console.log(error));
  }, []);

  return (

    <div className="homepage">
       <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      {loading ? (
        <div className="loader-container">
          <img src={Loader} alt="Loading..." />
        </div>
      ) : (
        <>
          <section className="home">
            <div className="content">
              <h3>food made with love</h3>
              <p>Discover delicious recipes for every occasion.</p>
              <div className="box-container">
            <input type="text" placeholder="Search recipes" value={searchQuery} onChange={handleSearch} />

            <button onClick={searchRecipes}> <i class="fa fa-search search-icon" aria-hidden="true"></i></button>
          </div>
            </div>
            <div className="image">
              <img src={HomeImage} alt="Home" />
            </div>
          </section>


        <section className="recipe-list" id="recipe-list">
          <h2 className="heading"><span> Yummy Taste!</span></h2>

      <div className="box-container">
        {recipes.length > 0 ? (
          recipes.map((meal) => (
          <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal}>
           <div className="box">
            <img className="image" src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="content">
               <img src={meal.strMealThumb} alt={meal.strMeal} />
               <h3>{meal.strMeal}</h3>
              </div>
            </div>
          </Link>
    ))
  ) : (
    <p>Recipe Not found ? Please scroll down and request</p>
  )}
    </div>

  </section>

        <section className="recipe-list">
          <h2><br/><span>Choose from a variaty of trusted recipe categories </span></h2>
            <div className="box-container">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <Link to={`/category/${encodeURIComponent(category.strCategory)}`} key={category.idCategory}>
                    <div className="box">
                      <img className="image" src={category.strCategoryThumb} alt={category.strCategory} />
                      <div className="content">
                        <img src={category.strCategoryThumb} alt={category.strCategory} />
                        <h3>{category.strCategory}</h3>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No categories available</p>
              )}
            </div>
          </section>

          <RequestRecipeForm />

       <section className="review" id="review">
          <h1 className="heading">our customers <span>reviews</span></h1>
             <div className="box-container">
               <div className="box">
                <img src={Review1} alt="" />
                <h3>john deo</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                 <p>
                  Everything I’ve ever wanted in a recipe app. I can do multiple things in one place
                 </p>
                </div>
                <div className="box">
                  <img src={Review2} alt="" />
                  <h3>john deo</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                   </div>
                  <p>
                   Everything I’ve ever wanted in a recipe app. I can do multiple things in one place
                  </p>
                </div>
                 <div className="box">
                  <img src={Review3} alt="" />
                  <h3>john deo</h3>
                    <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                   </div>
                  <p>
                   Everything I’ve ever wanted in a recipe app. I can do multiple things in one place
                 </p>
                </div>
           </div>
    </section>

        </>
      )}
    </div>
  );
}

export default HomePage;
