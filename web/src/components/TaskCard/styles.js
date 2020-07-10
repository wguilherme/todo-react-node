import styled from 'styled-components'

export const Container = styled.div`
width: 250px;
height: 200px;

border-radius: 10px;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

display: flex;
align-items: center;
justify-content: center;

flex-direction: column;
margin: 10px;

&:hover {
   opacity: 0.5;
   cursor: pointer;
   transition: all 0.3s ease;
}

`

export const TopCard = styled.div`
display: flex;
align-items: center;
justify-content: center;

flex-direction: column;
`
export const BottomCard = styled.div`

width: 100%;
display: flex;
justify-content: space-around;
strong {
   color: #ee6b26
}
span {
   color: gray;
}
`