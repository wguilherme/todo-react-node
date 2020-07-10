import React, { useState } from 'react';
import * as S from './styles'
// nossos componentes

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'

function Home() {
  const [filterActivated, setFilterActivated] = useState("all");
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

      <S.Title>
        <h3>Tarefas</h3>
      </S.Title>
      <S.Content>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>
      <TaskCard/>

      </S.Content>

      
      <Footer/>
   </S.Container>
  )
}

export default Home;
