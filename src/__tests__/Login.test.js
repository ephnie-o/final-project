import React from 'react';
import { render, fireEvent, screen, cleanup, waitFor, userEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; // for extra matchers
import Login from '../components/Login'; // adjust the import path based on your project structure

afterEach(() => {
    cleanup();
});


test('displays error message for invalid email format', async() => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const emailInput = screen.getByPlaceholderText('*Email');
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.blur(emailInput);

    const errorMessage = screen.getByTestId('email');
    expect(errorMessage).toHaveTextContent('*Email is required');
});


test('displays error message for invalid first name', async() => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const firstNameInput = screen.getByPlaceholderText('*First Name');
    fireEvent.change(firstNameInput, { target: { value: '' } });
    fireEvent.blur(firstNameInput);

    const errorMessage = screen.getByTestId('firstname');
    expect(errorMessage).toHaveTextContent('*First name is required');
});

test('displays error message for invalid last name', async() => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const lastNameInput = screen.getByPlaceholderText('*Last Name');
    fireEvent.change(lastNameInput, { target: { value: '' } });
    fireEvent.blur(lastNameInput);

    const errorMessage = screen.getByTestId('lastname');
    expect(errorMessage).toHaveTextContent('*Last name is required');
});

test('displays error message for invalid phone number', async() => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const phoneNumberInput = screen.getByPlaceholderText('*Phone Number');
    fireEvent.change(phoneNumberInput, { target: { value: '' } });
    fireEvent.blur(phoneNumberInput);

    const errorMessage = screen.getByTestId('phonenumber');
    expect(errorMessage).toHaveTextContent('*Phone number is required');
});

test('displays error message for invalid password', async() => {
    render(<MemoryRouter><Login /></MemoryRouter>);
    const passwordInput = screen.getByPlaceholderText('*Password');
    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.blur(passwordInput);

    const errorMessage = screen.getByTestId('password');
    expect(errorMessage).toHaveTextContent('*Password should have at least 6 characters');
});

test('button is disabled until all requirements are fulfilled', async () => {
    render(<MemoryRouter><Login /></MemoryRouter>);

    const button = screen.getByText('Book');

    expect(button).toBeDisabled();

    fireEvent.change(screen.getByPlaceholderText('*First Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('*Last Name'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('*Phone Number'), { target: { value: '123456789' } });
    fireEvent.change(screen.getByPlaceholderText('*Email'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('*Password'), { target: { value: 'password123' } });

    fireEvent.blur(screen.getByPlaceholderText('*Password'));

    expect(button).not.toBeDisabled();
});
