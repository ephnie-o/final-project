import '../App.css';
import salad from '../assets/greek salad.jpg';
import bruschetta from '../assets/bruchetta.jpeg';
import lemon from '../assets/lemon dessert.jpg';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
        <section className='about'>
            <h1 className='heading1'>Little Lemon</h1>
            <h3 className='heading2'>Chicago</h3>
            <p className='p1'>We are a family owned Mediterranean restaurant, focused on traditional Recipes served with a mordern twist.</p>
            <Link to='/reservations'>
            <button className='button'>Reserve a Table</button>
            </Link>
        </section>
        <section className='delivery'>
            <h3>ORDER FOR DELIVERY</h3>
            <section className='delivery-menu'>
                <button>Lunch</button>
                <button>Mains</button>
                <button>Desserts</button>
                <button>A La Carte</button>
                <button>Specials</button>
            </section>
        </section>
        <section className='lunch-menu'>
            <section className='meal'>
                <section className='description'>
                    <h4>Greek Salad</h4>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <p>$12.99</p>
                </section>
                <section className='meal-img'>
                    <img height='100px'src={salad} alt='greek salad'/>
                </section>
            </section>
            <section className='meal'>
                <section className='description'>
                    <h4>Brushetta</h4>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.</p>
                    <p>$7.99</p>
                </section>
                <section className='meal-img'>
                    <img height='100px' width='150px' src={bruschetta} alt='a bruschetta'/>
                </section>
            </section>
            <section className='meal'>
                <section className='description'>
                    <h4>Lemon Dessert</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla odio enim vitae.</p>
                    <p>$6.99</p>
                </section>
                <section className='meal-img'>
                    <img src={lemon} alt='a lemon dessert' height='100px' width='150px' />
                </section>
            </section>
        </section>
        </>
    );
}

export default Homepage;