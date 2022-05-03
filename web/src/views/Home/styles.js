import styled from 'styled-components';

export const Container = styled.div`
     width: 100%;



`
export const FilterArea = styled.div`

width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 30px;

> button {
   border: none;
   background: none;
   padding: 0;
   margin: 0;
}

`

export const Content = styled.div`
width: 100%;
justify-content: center;
display: flex;
flex-wrap: wrap;
`

export const Title = styled.div`
width: 100%;
border-bottom: 1px solid #20295F;
display: flex;
justify-content: center;
margin-bottom: 25px;

h3 {
   color:  #20295F;
   position: relative;
   text-align: center;
   top: 30px;
   background: white;
   padding: 0 10px;

}
`

