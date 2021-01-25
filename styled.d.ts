import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string
    colors: {
      primary: string
      secondary: string
      contrastText: string
      mainBg: string
      wrong: string
      success: string
    }
  }
}
