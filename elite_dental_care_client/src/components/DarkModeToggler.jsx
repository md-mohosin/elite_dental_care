import React from 'react';
import { useDarkMode } from '../context/ThemeContext';

const DarkModeToggler = () => {

    const { darkMode, setDarkMode } = useDarkMode()

    return (
        <div>
            <button onClick={() => setDarkMode(!darkMode)}
                className='btn btn-outline btn-sm transition-all'>
                {darkMode ? '🌞Light' : '🌙Dark'}
            </button>
        </div>
    );
};

export default DarkModeToggler;