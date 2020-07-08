import React from 'react';
import * as S from './styles'
// nossos componentes

import Header from '../../components/Header'
import Footer from '../../components/Footer'


function Home() {
  return (
   <S.Container>
      <Header/>
      <Footer/>
   </S.Container>
  )
}

export default Home;