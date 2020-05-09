import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    padding: 20px;

    
    
    
`;

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    form {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin: 80px;
        border-radius: 50px;
        background-color: #ADD8E6;
        padding: 10px;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            img {
                height: 75px;
                margin-bottom: 10px;
            }

            h1 {
                font-size: 32px;
                font-weight: bold;
                color: #2E2E2E;
                margin-bottom: 60px;
            }
        }

        div {
            width: 100%;
            button {
            width: 100%;
            border-radius: 20px;
            border: 0;
            margin-top: 8px;
            margin-bottom: 8px;
            padding: 15px;
            font-size: 18px;
            background-color: #008B8B;
            color: #fff;
            font-weight: 500;
        }     
        }

        
        div {
            a {
                text-decoration: none;
                color: #00008B;
                font-weight: 500;
            }
        }
        
    }
`;
