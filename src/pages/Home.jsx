import CarList from "../components/CarList";
import { CarData } from "../data/data";

const Home = () => {
    return (
        <div className="text-black bg-gray-100 h-full">
            {/* car list container. */}
            <CarList carData={CarData} />
        </div>
    )
}

export default Home;