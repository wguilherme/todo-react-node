import styled from 'styled-components'

export const Container = styled.div`
width: 220px;
height: 60px;

padding: 10px;

background: ${props => props.activated ? '#F06B1F' : '#20295f'};
border-radius: 5px;

display: flex;
flex-direction: column;
justify-content: space-around;


img {
   width: 25px;
   height: 25px;
}

span {
   color: white;
   font-weight: bold;
   align-self: flex-end;
   font-size: 18px;
}

&:hover {
   background: #F06B1F;
   cursor: pointer;
}


`

