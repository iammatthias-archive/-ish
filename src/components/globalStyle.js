import { css } from '@emotion/core'

export const GlobalStyles = css`
body:before, body:after {
     content: "";
     position: fixed;
     background: #ffffff;
     left: 0;
     right: 0;
     height: 32px;
}
 body:before {
     top: 0;
}
 body:after {
     bottom: 0;
}
 body {
     border-left: 32px solid #ffffff;
     border-right: 32px solid #ffffff;
}
 main {
     background: #ff6f61;
     display: flex;
     flex-direction: column;
     height: calc(100vh - 32px);
     padding: 32px;
}

`

export default GlobalStyles
