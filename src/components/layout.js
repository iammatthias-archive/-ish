/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import React from "react"

import { Global, css } from '@emotion/core'

const Layout = ({ children }) => {
    return (

        <Styled.root>
            <Global
                styles={css`
                @import url('https://fonts.googleapis.com/css?family=Lobster|Open+Sans&display=swap');
body:before, body:after {
     content: "";
     position: fixed;
     background: #ffffff;
     left: 0;
     right: 0;
     height: 32px;
     z-index: 999;
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
     margin: 0;
}
 main {
     background: #ff6f61 linear-gradient(382deg, rgba(255,111,97,1) 0%, rgba(255,240,237,1) 100%);
     display: flex;
     flex-direction: column;
     height: calc(100vh - 64px);
     padding: 32px;
     position: relative;
     top: 32px;
}
            `}
            />
            <main><div>{children}</div></main>

        </Styled.root>
    )
}



export default Layout
