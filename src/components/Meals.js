import { useGlobalContext } from "../Context";
const Meals = () => {
    const {meals,loading,selectMeal} = useGlobalContext();
    console.log(meals)
    
    if(loading){
        
            return (
                <section className="container d-flex justify-content-center">
                    <h3 className="text-center text-danger position-absolute bottom-50">loading...</h3>
                </section>
            ) 
        
    }

    if(meals.length<1){
        return (
        <section className="container d-flex justify-content-center">
            <h3 className="text-center text-danger position-absolute bottom-50">No meals matched your search term. Please try again.</h3>
        </section>
        )
    }
        return (
            <section className="container">
             <div className="row justify-content-between ">
                 
             {meals.map(singleMeal=>{
                 const {idMeal, strMeal: title, strMealThumb: image} = singleMeal
                 return(
                     <div key={idMeal} className="card mb-3 col-4" >
                         <div className="card-img-top">
                             <img onClick={()=>selectMeal(idMeal)} src={image} alt="meal-image" style={{width:"100%",cursor:"pointer"}}/>
                         </div>
                         <div className="card-body d-flex justify-content-between">
                         <h4 className="text-dark">{title}</h4>
                         <button className="btn btn-danger">like</button>
                         </div>
                     </div>
                 )
             })}
             </div>
            </section>
         )
    
    
    
}

export default Meals