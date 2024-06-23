import React, { useState } from 'react';
import './container.css';

const Container = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setCardNumber(value);
    
    if (isValid !== null) {
      setIsValid(null);
    }
  };

  const handleValidation = () => {
    if (cardNumber.length !== 16) {
      setIsValid(false);
      return;
    }

    setIsValid(luhnCheck(cardNumber));
  };

  const luhnCheck = (num) => {
    let arr = (num + '')
      .split('')
      .reverse()
      .map(x => parseInt(x));
    let lastDigit = arr.splice(0, 1)[0];
    let sum = arr.reduce(
      (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),
      0
    );
    sum += lastDigit;
    return sum % 10 === 0;
  };

  const isDisabled = cardNumber.length !== 16;

  const generateCardDisplay = () => {
    const maxLength = 16;
    const maskedNumber = '•••• •••• •••• ••••'; 
    let displayNumber = '';

    for (let i = 0; i < maxLength; i++) {
      if (i < cardNumber.length) {
        displayNumber += cardNumber[i];
      } else {
        displayNumber += maskedNumber[i];
      }

      if ((i + 1) % 4 === 0 && i !== maxLength - 1) {
        displayNumber += ' ';
      }
    }

    return displayNumber;
  };

  return (
    <div className='cont'>
      <h1>Validador de Tarjetas de Crédito</h1>
      <input
        type="text"
        value={cardNumber}
        onChange={handleChange}
        placeholder="Ingrese el número de la tarjeta (16 dígitos)"
        maxLength={16}
      />
      <button onClick={handleValidation} disabled={isDisabled}>
        Validar
      </button>
      {isValid !== null && !isValid && (
        <p>El número de tarjeta no es válido.</p>
      )}
      {isValid && (
        <p>La tarjeta es válida.</p>
      )}

      <div className="card-display">
        <h2>Representación de la Tarjeta</h2>
        <div className="card-number">
          {generateCardDisplay()}
        </div>
      </div>
    </div>
  );
};

export default Container;
