import '../App.css';
import { Link } from 'react-router-dom';

const Confirmation = () => {
    return(
        <main className='background'>
          <div>
            <svg className='confirmationIcon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checkbox" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 11l3 3l8 -8" />
              <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
            </svg>
          </div>
          <div>
            <h1 className='thankYou'>Thank You!</h1>
          </div>
          <div>
            <h2 className='message'>Your Reservations Requirement Was Successfully Submitted!</h2>
          </div>
          <Link to='/'>
            <button className='button confirmationButton' type="submit" >
                        Go back to Home
            </button>
          </Link>
        </main>
    );
}

export default Confirmation;