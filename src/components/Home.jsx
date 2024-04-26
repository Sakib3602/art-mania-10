
import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider';

const Home = () => {
    const data = useContext(AuthContext)
    console.log(data)
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;