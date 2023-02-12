import React, {useContext,useEffect,useState} from 'react'
import axios from 'axios'
import { gsap } from "gsap";
const AppContext = React.createContext();
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [meals, setMeals] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedMeal, setSelectedMeal] = useState(null)

    const closeModal = () => {
      setShowModal(false)
    }
    const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    console.log(idMeal)
      meal = meals.find((meal) => meal.idMeal === idMeal);
    
    setSelectedMeal(meal);
    setShowModal(true)
  }
    
    const fetchMeals = async (url) => {
      setLoading(true)
      try {
        const {data} = await axios(url)
        if(data.meals){
          setMeals(data.meals)
        }else{
          setMeals([])
        }
      }
      catch (e) {
        console.log(e.response)
      }
      setTimeout(() => {
          setLoading(false)
      }, 500);
    }
    const fetchRandomMeal = () => {
        fetchMeals(randomMealUrl);
    }
    useEffect((url)=>{
        fetchMeals(allMealsUrl)
    },[])
    useEffect(() => {
      console.log(searchTerm)
      if(!searchTerm) return
      //`${...}` is string interpolation with template literal
      fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])
    
return (
    <AppContext.Provider value={{meals,loading,fetchRandomMeal,setSearchTerm
      ,closeModal,showModal,selectMeal,selectedMeal}}
    >
        {children}
    </AppContext.Provider>
)
}

export {AppProvider, AppContext}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }