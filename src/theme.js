import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: '#ffffff',
    fontColor: '#000000',
}

export const darkTheme = {
    body: '#000000',
    fontColor: '#ffffff'
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body}
    }
`;