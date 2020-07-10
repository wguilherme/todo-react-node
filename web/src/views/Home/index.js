import React, { useState, useEffect } from 'react';
import * as S from './styles'

import api from '../../services/api'

// nossos componentes
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'

function Home() {
  const [filterActivated, setFilterActivated] = useState("all");
  const [tasks, setTasks] = useState([]);


  //get tasks
  async function loadTasks(){
    await api.get(`/task/filter/${filterActivated}/11:11:11:11:11:11`)
    .then(response => {

      setTasks(response.data);

    })
  }

  useState(() => {
    loadTasks();
  }, [filterActivated])


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

    {
      <TaskCard/>
    }

      </S.Content>

      
      <Footer/>
   </S.Container>
  )
}

export default Home;
