import React from 'react'
import * as S from './styled'

export default function RepositoryItem({name, linkToRepo, fullName, description}) {
  return (
    <S.Wrapper>
        <h3>Name: {name}</h3>
        <h4>Full Name:</h4>
        <a href={linkToRepo} target={"_blank"} rel={"noreferrer"}>
          {fullName}</a>
        <p>{description}</p>

    </S.Wrapper>
  )
}
