import './App.css';

function Main() {
    return (
        <>
        <div className='about'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional Recipes served with a mordern twist.</p>
            <button>Reserve a Table</button>
        </div>
        <div className='delivery'>
            <h3>ORDER FOR DELIVERY</h3>
            <div className='delivery-menu'>
                <button>Lunch</button>
                <button>Mains</button>
                <button>Desserts</button>
                <button>A La Carte</button>
                <button>Specials</button>
            </div>
        </div>
        <div>
            <div>
                <h4>Greek Salad</h4>
            </div>
        </div>
        </>
    );
}

export default Main;