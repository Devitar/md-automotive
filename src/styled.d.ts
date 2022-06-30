import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string
        colors: {
            background: string
            backgroundSecondary: string
            primary: string
            secondary: string
        }
    }
}