import { render, screen, cleanup, fireEvent, getByLabelText, getByTestId } from '@testing-library/react';
import Reservations from '../components/Reservations';
import { MemoryRouter } from 'react-router-dom'; 
import { act } from 'react-dom/test-utils';

afterEach(() => {
    cleanup();
});

test('render a static text', () => {
const mockDispatch = jest.fn();
const mockState = {
    diners: '2',
    occasion: 'Birthday',
    time: '6pm',
};

    render(
        <MemoryRouter>
            <Reservations state={mockState} dispatch={mockDispatch} />
        </MemoryRouter>
    );
    const heading = screen.getByText(/Little Lemon/i);
    expect(heading).toBeInTheDocument();

});

test('time input displays and updates correctly', () => {
    const mockDispatch = jest.fn();
    const mockState = {
    diners: 'Number of Diners',
    occasion: 'Occasion',
    time: 'Time',
    };

    render(
        <MemoryRouter>
            <Reservations state={mockState} dispatch={mockDispatch} />
        </MemoryRouter>
    );

    const timeInput = screen.getByTestId('time-input') ;
    expect(timeInput.value).toBe(mockState.time);

});

test('form is submitted when the button is clicked', () => {
    const mockDispatch = jest.fn();
    console.log('Number of dispatch calls:', mockDispatch.mock.calls.length);

    render(
        <MemoryRouter>
            <Reservations state={{}} dispatch={mockDispatch} />
        </MemoryRouter>
    );

    fireEvent.change(screen.getByTestId('time-input'), { target: { value: '6pm' } });
    fireEvent.change(screen.getByTestId('diners-input'), { target: { value: '2' } });
    fireEvent.change(screen.getByTestId('occasion-input'), { target: { value: 'Birthday' } });
    fireEvent.change(screen.getByTestId('date-input'), { target: { value: '2024-03-02' } });
    fireEvent.click(screen.getByLabelText('Standard'));

    fireEvent.click(screen.getByText('Lets Go'));

    expect(mockDispatch).toHaveBeenCalledTimes(3);
  });

