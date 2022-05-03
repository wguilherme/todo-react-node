import React from 'react';
import * as S from './styles'

import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'


function Header({lateCount, clickNotification}) {
  return (
    <S.Container>
      <S.LeftSide>
          <img src={logo} alt="Logo"/>

      </S.LeftSide>
      <S.RightSide>
        <a href="#">Início</a>
        <a href="#">Nova Tarefa</a>
        <a href="#">Sincronizar Celular</a>
        <button onClick={clickNotification} id="notification">
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </button>

      </S.RightSide>
 </S.Container>
  )
}

export default Header;
