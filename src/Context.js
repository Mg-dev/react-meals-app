import React, {useContext,useEffect,useState} from 'react'
import axios from 'axios'
const AppContext = React.createContext();
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState([])
    
    const fetchMeals = async (url) => {
      setLoading(true)
      try {
        const {data} = await axios(url)
        console.log(data.meals)
        setMeals(data.meals)
      }
      catch (e) {
        console.log(e.response)
      }
      setTimeout(() => {
          setLoading(false)
      }, 1000);
    }
    const fetchRandomMeal = (randomMealUrl) => {
        fetchMeals(randomMealUrl);
    }
    useEffect((url)=>{
        fetchMeals(allMealsUrl)
    },[])
  
    
return (
    <AppContext.Provider value={{meals,loading,fetchRandomMeal}}
    >
        {children}
    </AppContext.Provider>
)
}

export {AppProvider, AppContext}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }