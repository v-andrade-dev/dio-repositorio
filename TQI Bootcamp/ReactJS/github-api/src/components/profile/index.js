import React from 'react'
import * as S from './styled'
import useGithub from '../../hooks/github'

function Profile (){
  
  const {githubState} = useGithub();

  return (
    <S.Wrapper>
        <S.WrapperImage           
          alt="user avatar" src={githubState.user.avatar_url}>
        </S.WrapperImage>

      <S.WrapperUser>
        <div>
          <h2>{githubState.user.name}</h2>
          <S.WrapperUserInfo>
            <h3>User: </h3>
            <a 
              href={githubState.user.html_url} target={'_blank'} 
              rel={'noreferrer'}>
              {githubState.user.login}
            </a> 
            </S.WrapperUserInfo>

            <S.WrapperUserInfo>
              <h3>Company:</h3>
              <span>{githubState.user.company}</span>
            </S.WrapperUserInfo>

            <S.WrapperUserInfo>
              <h3>Location:</h3>
              <span>{githubState.user.location}</span>
            </S.WrapperUserInfo>

            <S.WrapperUserInfo>
              <h3>Blog:</h3>
              <a href={githubState.user.blog}>{githubState.user.blog}</a>
            </S.WrapperUserInfo>
        </div>

        <S.WrapperConnection>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
              <h4>Following</h4>
              <span>{githubState.user.following}</span>
            </div>
          <div>
             <h4>Gists</h4>
             <span>{githubState.user.public_gists}</span>
          </div>
          <div>
             <h4>Repositories</h4>
             <span>{githubState.user.public_repos}</span>
          </div>

        </S.WrapperConnection>     
      </S.WrapperUser>
    
    </S.Wrapper>
  )
}

export default Profile;
