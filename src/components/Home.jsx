
import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider';
import Hero from './Hero';
import Slider from './Slider';

const Home = () => {
    const data = useContext(AuthContext)
    console.log(data)
    return (
        <div className='w-[100%] md:w-[95%] lg:w-[90%] m-auto'>
            <Hero></Hero>
            <Slider></Slider>
        </div>
    );
};

export default Home;