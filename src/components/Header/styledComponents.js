import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Navbar = styled.nav `
display: flex;
justify-content: space-between;
align-items: center;
background: #1E1E30;
max-width: 1440px;
height: 80px;
padding: 0px 83px;
`
export const WebHeader = styled(Link) `
text-decoration: none;
display: flex;
justify-content: flex-start;
align-items: center;`

export const Heading = styled.h1 `
font-family: Roboto;
font-size: 20px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color: #F8FAFC; `

export const Spaner = styled.span `
font-family: Bree Serif;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: center;
color: #3B82F6; `

export const TabItems = styled.ul `
display: flex;
justify-content: center;
align-items: center;
width: 185px;
height: 24px;
`


export const Item = styled(Link) `
text-decoration: none;
width: 65px;
height: 24px;
`