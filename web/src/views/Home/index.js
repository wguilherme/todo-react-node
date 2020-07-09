import React, { useState } from 'react';
import * as S from './styles'
// nossos componentes

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'

const [filterActivated, setFilterActivated] = useState("today");
function Home() {
  return (
   <S.Container>
      <Header/>

      <S.FilterArea>

      <button type="button" onClick={() => setFilterActivated("all")}>

      <FilterCard title="todos" activated={filterActivated =='all'}  />
      </button>

      <button type="button" onClick={() => setFilterActivated("today")}>
      <FilterCard title="hoje" activated={filterActivated =='today'} />
      </button>

      <button onClick={() => setFilterActivated("week")}>
      <FilterCard title="semana" activated={filterActivated =='week'} />
      </button>

      <button type="button" onClick={() => setFilterActivated("month")}>
      <FilterCard title="mes" activated={filterActivated =='month'} />
      </button>

      <button type="button" onClick={() => setFilterActivated("year")}>
      <FilterCard title="ano" activated={filterActivated =='year'} />
      </button>

      </S.FilterArea>
      
      <Footer/>
   </S.Container>
  )
}

export default Home;
