import styled from 'styled-components';

export const StyledSpinner = styled.div`
border-top: 5px solid #C7B418;
border-radius: 50%;
width: 50px;
height: 50px;
filter: drop-shadow(1px 4px 3px #729372);
animation: spin 0.8s linear infinite;
margin: 20px auto;


@keyframes spin {
    0% {
        transformL rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}


`