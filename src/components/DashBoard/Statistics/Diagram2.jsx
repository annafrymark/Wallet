import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './Diagram.module.css';
import { ReactSVG } from 'react-svg';
import { useDispatch } from 'react-redux';
import { getDetailedStatistics } from 'redux/transactions/operations';
// import { categories as categoryNames, categoryColors } from './categories';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Diagram = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().toLocaleString('en-US', { month: 'long' }));
    const [dataByMonth, setDataByMonth] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        fetchDetailedStatistics(selectedYear, selectedMonth);
    }, [selectedYear, selectedMonth]);

    const tab = [
    { title: 'Income', value: 8700, color: '#24CCA7' },
    { title: 'default transaction', value: 8700, color: '#808080' },
    { title: 'Main expenses', value: 8700, color: '#FED057' },
    { title: 'Products', value: 3800, color: '#FFD8D0' },
    { title: 'Car', value: 1500, color: '#FD9498' },
    { title: 'Self care', value: 800, color: '#C5BAFF' },
    { title: 'Child care', value: 2200, color: '#6E78E8' },
    { title: 'Household products', value: 300, color: '#4A56E2' },
    { title: 'Education', value: 3400, color: '#81E1FF' },
    { title: 'Leisure', value: 123, color: '#8A2BE2' },
    { title: 'Other expenses', value: 610, color: '#00AD84' },
    {
      _id: '6471096a9af3d469961187ef',
      title: 'Entertainment',
      type: 'EXPENSE',
      color: '#9AFA41',
    },
    ];
    const getTitleColor = title => {
    const item = tab.find(item => item.title === title);
    return item ? item.color : 'red';
  };

    
    const fetchDetailedStatistics = async (year, month) => {
        try {
            const response = await dispatch(getDetailedStatistics(year, month));
            const data = response.data.transaction;
            const categoryBalances = {};
            data.categoryBalances.forEach((category) => {
                categoryBalances[category.category] = category.balance;
            });

            setDataByMonth((prevDataByMonth) => ({
                ...prevDataByMonth,
                [month]: dataByMonth[month] || [],
                [month]: categoryNames.map((category) => ({
                    category,
                    value: categoryBalances[category] || 0,
                })),
            }));
        } catch (error) {
            console.error('Error fetching statistics:', error);
        }
    };
};