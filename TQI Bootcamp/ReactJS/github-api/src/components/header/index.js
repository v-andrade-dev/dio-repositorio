import React, { useState } from 'react'
import * as S from './styled'
import useGithub from '../../hooks/github'

export default function Header() {
    const{getUser} = useGithub();
    const [usernameSearch, setUsernameSearch] = useState();

    const submitGetUser = ()=>{
        if(!usernameSearch) return;

        return getUser(usernameSearch);
    }

  return (
    <header>
        <S.Wrapper>
            <input type="text" 
                placeholder='Digite um username...' 
                onChange={(event)=>setUsernameSearch(event.target.value)}>    
            </input>
            <button type='submit' onClick={submitGetUser}>Buscar</button>
        </S.Wrapper>
    </header>
  )
}
