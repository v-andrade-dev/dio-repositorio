import React, { useEffect, useState } from 'react'
import RepositoryItem from '../repository-item'
import * as S from './styled'
import useGithub from '../../hooks/github'

export default function Repositories() {

  const {githubState, getUserRepos, getUserStarred} = useGithub();
  const [hasUserRepos, setUserRepos] = useState(false);

  useEffect(()=>{
    if(githubState.user.login){
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);


    }
    setUserRepos(githubState.repositories)

  },[githubState.user.login])


  return (
    <>
      {hasUserRepos ? (
        <S.WrapperTabs
          selectedTabClassName = "is-selected"
          selectedTabPanelClassName = "is-selected"
        >  
          <S.WrapperTabList>
              <S.WrapperTab>Repositories</S.WrapperTab>
              <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem  
                    key={item.id}
                    name={item.name} 
                    fullName={item.full_name}
                    linkToRepo={item.html_url}
                    description={item.description}
                  />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>

          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item) => (
                <RepositoryItem  
                    key={item.id}
                    name={item.name} 
                    fullName={item.full_name}
                    linkToRepo={item.html_url}
                    description={item.description}

                  />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (<> </>)}
    </>

  )
}
