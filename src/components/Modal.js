import { useGlobalContext } from "../Context"
import { useRef } from "react"
import {gsap as gasp} from 'gsap'
import '../App.css'
const Modal = () => {
    const {closeContainer} = useRef(null)
    const {closeModal,selectedMeal} = useGlobalContext();
    const {strMealThumb: image, strMeal: title, strInstructions: text, strSource: source} = selectedMeal
    
    // const closeHandle = () => {
    //     gasp.to(closeContainer.current, { rotation: 45, y: 5 });
  
    //   gasp.to(closeContainer.current.parentElement, {
    //     scale: 0,
    //     duration: 0.5,
    //     ease: "power2.in",
    //     onComplete: () => {
    //       window.close();
    //     }
    //   });
        return(
            <aside className="modal-overlay">
                <div className="modal-container col-6">
                    <div className="p-2">
                    <h5 className="fs-3 d-inline-block">{title}</h5>
                    <div ref={closeContainer}  className="float-end close-modal">
                    <svg style={{cursor: "pointer"}} onClick={closeModal} width="40px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </div>
                    </div>
                    <img src={image} width="auto" className="img modal-img"/>
                    <div className="modal-content">
                    
        <p>Cooking Instructions</p>
        <p> {text}</p>
        <a href={source} target="_blank">Original Source</a>
        
                    </div>
                </div>
            </aside>
            )
            
    } 

export default Modal