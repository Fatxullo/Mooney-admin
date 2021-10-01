import styled from "styled-components";

export const MenuWrapper = styled.div `
    width: 19%;
    background-color: white;
    height: 95vh;
    border-radius: 25px;
    padding: 20px 0;
`;

export const Container = styled.div `
    width: 220px;
    margin: auto;
   

`;

export const LogoBox = styled.div `
    display: flex;
    align-items: center;
    div{
        i{
            color: rgb(146, 109, 252);
            font-size: 25px;
        }
    }

`;

export const LogoName = styled.div `
    font-size: 27px;
    color: rgb(146, 109, 252);
    font-weight: 700;
    margin-bottom: 8px;
    margin-left: 20px;
    
`;

export const Menu = styled.ul `
    margin-top: 70px;
    padding: 0;
    li{
        width: fit-content;
        list-style: none;
        margin-bottom: 20px;
            &:hover a{
                color: rgb(146, 50, 252);
            }
            &:hover i{
                color: rgb(146, 50, 252);
            }

        a{
            margin-left: 15px;
            font-size: 20px;
            font-weight: 600;
            text-decoration: none;
            transition: .2s;
            color: grey;
            
        }
        i{
            margin-right: auto;   
            font-size: 20px;
            color: grey;
            cursor: grab;
        }
    }

`;

export const BookBox = styled.div `
    margin-top: 70px;
    div{
        width: 115px;
        margin: auto;
        border-radius: 15px;
        overflow: hidden;

        img{
            width: 100%;
        }
    }
    p{
        font-size: 15px;
        text-align: center;
        color: grey;
        margin: 0;
        margin-top: 5px;
    }
    a{
    text-decoration: none;
    color: white;
    padding: 10px 40px;
    border-radius: 20px;
    background: rgb(170,165,255);
    background: linear-gradient(90deg, rgba(170,165,255,0.8718837876947654) 51%, rgba(113,232,255,1) 100%);
    display: block;
    margin: auto;
    margin-top: 10px;
    width: fit-content;
    
    }

`;

export const Name = styled.div `
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;

`;