
import { useContext } from 'react';
import { AuthContext } from '../AuthProvaider';
import Hero from './Hero';
import Slider from './Slider';
import { useLoaderData } from 'react-router-dom';
import HomeCardSection from './HomeCardSection';

const Home = () => {
    const data = useContext(AuthContext)
    console.log(data)

    const cardData = useLoaderData()
    console.log(cardData)
    return (
        <div className='w-[100%] md:w-[95%] lg:w-[90%] m-auto'>
            <Hero></Hero>
            <Slider></Slider>
            <h1 className='text-[44px] lg:text-[54px] md:text-[54px] text-center font-[600]'>Craft Is Life</h1>
            <div className='w-[90%] lg:w-[60%] m-auto'>
            <p className='text-center'>Textile art weaves together tradition and innovation, crafting threads of creativity into tapestries of cultural expression. Embrace each stitch as a testament to the timeless art of handmade beauty.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>

                {
                    !data && <div className="🤚">
                    <div className="👉"></div>
                    <div className="👉"></div>
                    <div className="👉"></div>
                    <div className="👉"></div>
                    <div className="🌴"></div>		
                    <div className="👍"></div>
                </div>
                }
            {
                cardData?.map(card =>  <HomeCardSection key={card._id} cardData1={card}></HomeCardSection>)
            }
            </div>
           
        </div>
    );
};

export default Home;