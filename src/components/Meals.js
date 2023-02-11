import { useGlobalContext } from "../Context";
const Meals = () => {
    const {meals,loading} = useGlobalContext();
    console.log(meals)
    
    if(loading){
        
            return (
                <section className="container vh-100 d-flex justify-content-center">
                    <h3 className="text-center text-danger">loading...</h3>
                </section>
            ) 
        
    }

    if(meals.length<1){
        return (
            <section className="container vh-100">
                <p className="text-danger">No meals matched your search term. Please try again.</p>
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
                             <img src={image} alt="meal-image" style={{width:"100%"}}/>
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