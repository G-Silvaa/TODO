import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 78px auto;
grid-template-areas:
"header"
"content";
align-items: center;
justify-content: center;

background-color: ${({ theme }) => theme.COLORS. BACKGROUND_PRIMARY};

header{
    position: fixed;
    top: 0;
}

`;

export const Form = styled.div`
grid-area: content;

    width: 330px;
    height: 250px;
    
    display: flex;
    flex-direction: column;
    
    
    h1{
        
    color:${({ theme })=> theme.COLORS.TEXT_SECONDARY};
    padding-left: 10px;
    font-size: 22px;
    font-weight: 600;
    border-left: 7px solid ${({ theme })=> theme.COLORS.BRAND};
    margin-bottom: 24px;
    
  

    }

    span{
        color: rgba(197, 197 ,197,02);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Karla;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    input{
        width: 316px;
        height: 38px;
        background-color: transparent;
        border: 1px solid #6C757D;
        margin-bottom:12px;
        border-radius: 4px;
        color: white;
        outline: 0;
        padding-left:10px
       
    }

    

   

  

    button{
        background-color: ${({ theme }) => theme.COLORS.BRAND};
        padding: 9px 132px;
        margin-top: 12.5px;
        border: none;
        width: 316px;
        cursor: pointer;
       

        color: rgba(233, 236, 239, 0.70);
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;


    }


  

`;