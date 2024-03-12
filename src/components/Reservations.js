import '../App.css';
import restaurant from '../assets/restaurant.jpg';
import restaurantchef from '../assets/restaurant chef B.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Reservations = ({ state, dispatch }) => {
    const {diners, occasion, time} = state;

    const [seatingOption, setSeatingOption] = useState ('');
    const [date, setDate] = useState('');

    const [errorDate, setErrorDate] = useState(false);
    const [errorTime, setErrorTime] = useState(false);
    const [errorDiners, setErrorDiners] = useState(false);
    const [errorOccasion, setErrorOccasion] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const isFormValid = () => {
        return(
            time !== 'Time' &&
            diners !== 'Number of Diners' &&
            occasion !== 'Occasion' &&
            date &&
            seatingOption
        );
    };

    return (
        <main className='booking'>
            <h1 className='heading1'>Little Lemon</h1>
            <h3 className='heading2'>Chicago</h3>
            <section>
                <p className='p1'>Find a table for any occasion</p>
            </section>
            <section className='images'>
                <img src={restaurant} alt='restaurant' className='restaurant' />
                <img src={restaurantchef} alt='restaurant chef' className='restaurant' />
            </section>
            <section>
                <form className='book' onSubmit={handleSubmit}>
                    <fieldset>
                        <div className='dateTime'>
                            <div >
                                {errorDate && date === '' ? <div className='errorMessage'>*Required</div>: ''}
                                <input
                                data-testid="date-input"
                                className='date'
                                type='date'
                                id='date'
                                name='date'
                                min='2024-03-02'
                                value={date}
                                onChange={e => setDate(e.target.value)}
                                onBlur={()=>{setErrorDate(true)}}
                            />
                            </div>
                            <div>
                                {errorTime && time === 'Time' ? <div className='errorMessage'>*Required</div>: ''}
                                <select data-testid="time-input" className='time' value={time} onChange={(e) => dispatch({type: "setTime", enter: e.target.value})} onBlur={()=>{setErrorTime(true)}}>
                                    <option value='Time'>Time</option>
                                    <option value='5pm'>5pm</option>
                                    <option value='6pm'>6pm</option>
                                    <option value='7pm'>7pm</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            {errorDiners && diners === 'Number of Diners' ? <div className='errorMessage'>*Required</div>: ''}
                            <select data-testid="diners-input" className='noOfDiners' value={diners} onChange={(e) => dispatch({type: "setDiners", enter: e.target.value})} onBlur={()=>{setErrorDiners(true)}} >
                                <option value="Number of Diners">Number of Diners</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div>
                            {errorOccasion && occasion === 'Occasion' ? <div className='errorMessage'>*Required</div>: ''}
                            <select data-testid="occasion-input" className='occasion' value={occasion} onChange={(e) => dispatch({type: "setOccasion", enter: e.target.value})} onBlur={()=>{setErrorOccasion(true)}} >
                                <option value="Occasion">Occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset className='seatingOptions'>
                        <div><h3>Seating options<span className='errorMessage'>*Required</span></h3></div>
                        <div className='radioOption'>
                            <label htmlFor='standard' className='standardLabel'>
                                Standard
                            </label>
                            <input className='standard' id='standard' type='radio' value='standard' name='seating' checked={seatingOption === 'standard'} onChange={() => setSeatingOption('standard')} />
                        </div>
                        <div className='radioOption'>
                            <label htmlFor='outside' className='outsideLabel'>
                                Outside
                            </label>
                            <input className='outside' id='outside' type='radio' value='outside' name='seating' checked={seatingOption === 'outside'} onChange={() => setSeatingOption('outside')} />
                        </div>
                    </fieldset>
                    <Link to='/login'>
                    <button type='submit' className='button letsGo' disabled={!isFormValid()} >
                        Lets Go
                    </button>
                    </Link>
                </form>
            </section>
        </main>
    );
}

export default Reservations;