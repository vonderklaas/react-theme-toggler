import { useState } from 'react';
import './App.css';
import { lightTheme, darkTheme, GlobalStyles } from './theme';
import { ThemeProvider } from 'styled-components';
import { AppStyle } from './App.style';

const App = () => {

    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
            <GlobalStyles />
            <AppStyle>
                <h1>React.js and 'styled-components'</h1>
                <button className='button' onClick={ () => themeToggler() }>
                    <span>Toggle Theme</span>
                </button>
            </AppStyle>
        </ThemeProvider>
    );
}

export default App;