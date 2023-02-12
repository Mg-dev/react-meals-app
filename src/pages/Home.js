import { useGlobalContext } from "../Context"
import Meals from '../components/Meals'
import Modal from "../components/Modal";

const Home = () => {
const {showModal}  = useGlobalContext();
console.log(showModal)
    return (
    <main>
      
      {/* <Favorites /> */}
      <Meals />
      {showModal&& <Modal />}
    </main>
    )
}

export default Home;