import React, { useEffect, useState } from 'react';
import css from './currencies.module.css';
import axios from 'axios';

export const CurrencyTable = () => {
  // currencies = [
  //   { currency: 'USD', purchase: '27.55', sale: '27.65' },
  //   { currency: 'EUR', purchase: '30.00', sale: '30.10' },
  // ];

  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          'https://api.currencyapi.com/v3/latest?apikey=cur_live_uXxuu8XbnBZWLK3C9wx21MDeS9fitr8Wy3pKfp9w'
        );
        const currenciesData = response.data.data;
        setCurrencies(currenciesData);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchCurrencies();
  }, []);

  const currencyRound = value => {
    return value.toFixed(2);
  };

  const currencySaleCounter = value => {
    return (value - value * 0.05).toFixed(2);
  };

  return (
    <div className={css.CurrenciesTableContainer}>
      <div className={css.BackgroundContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 280 93"
          width="100%"
          height="100%"
        >
          <path
            d="M22.4 38.5645L0 61.8797V73C0 84.0457 8.95431 93 20 93H250C266.569 93 280 79.5686 280 63V20.1766C278.98 19.5416 277.495 19.3295 276.864 19.2798C271.954 18.8929 269.138 22.5841 265.216 26.0053L265.167 26.0478C264.008 27.06 261.108 29.5923 255.808 29.5923C250.432 29.5923 246.699 27.201 245.504 26.0053L227.584 7.17389C225.195 4.78259 219.968 0 214.144 0C208.32 0 203.691 4.78259 201.6 7.17389L118.72 87.4366C117.376 88.9312 113.254 91.9203 107.52 91.9203C101.786 91.9203 97.664 88.9312 96.32 87.4366L48.384 36.3227C46.7413 34.5292 41.9328 30.9423 35.84 30.9423C29.7472 30.9423 24.3413 36.0238 22.4 38.5645Z"
            fill="url(#paint0_linear_7_131)"
            fillOpacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_7_131"
              x1="140"
              y1="-8.06575"
              x2="140"
              y2="108.081"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <table className={css.CurrenciesTable}>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody>
          {currencies.PLN?.code && (
            <tr key={currencies.PLN.code}>
              <td>{currencies.PLN.code}</td>
              <td>{currencyRound(currencies.PLN.value)}</td>
              <td>{currencySaleCounter(currencies.PLN.value)}</td>
            </tr>
          )}
          {currencies.EUR?.code && (
            <tr key={currencies.EUR.code}>
              <td>{currencies.EUR.code}</td>
              <td>{currencyRound(currencies.EUR.value)}</td>
              <td>{currencySaleCounter(currencies.EUR.value)}</td>
            </tr>
          )}
          {currencies.USD?.code && (
            <tr key={currencies.USD.code}>
              <td>{currencies.USD.code}</td>
              <td>{currencyRound(currencies.USD.value)}</td>
              <td>{currencySaleCounter(currencies.USD.value)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
