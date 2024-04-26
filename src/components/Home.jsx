
import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider';

const Home = () => {
    const data = useContext(AuthContext)
    console.log(data)
    return (
        <div className='w-[100%] md:w-[95%] lg:w-[90%]'>
            <h1>Home</h1>
        </div>
    );
};

export default Home;