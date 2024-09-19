import React, { Fragment, useEffect, useState } from 'react'
import FoodList from '../components/FoodList/FoodList';
import axios from 'axios';
import Banner from '../components/Banner/Banner';
import FoodCategories from '../components/FoodCategories/FoodCategories';

const AllFoods = () => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    console.log('First use effect with empty dependency array');
    setIsLoading(true);
    axios.get('http://localhost:8080/api/v1/foods')
      .then((res) => {
        setFoodList(() => [...res.data]);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
    })
  }, []);


  if (isLoading) {
    return <p>Loading the data........</p>
  }

  if (error != null && isLoading == false) {
    return <p>Oops Something Went Wrong: { error }</p>
  }

  return (
    <Fragment>
      <Banner />
      <FoodCategories/>
      <FoodList foodList={ foodList} />
    </Fragment>
   
  )
}

export default AllFoods