import styled from 'styled-components'

export const Container = styled.header`

grid-area: header;
width: 100%;
height: 78px;
padding: 19px 32px 19px 32px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${({ theme }) => theme.COLORS. BACKGROUND_SECONDARY};
.teste{
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: center;
    align-items: center;
    gap: 2px;
}
>h1 {
    color: white;
    
    
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
}

#color {
    color: ${({ theme }) => theme.COLORS.BRAND};
    display: inline-block;
}

span {
color: ${({ theme }) => theme.COLORS.BRAND};
text-align: center;
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

`;