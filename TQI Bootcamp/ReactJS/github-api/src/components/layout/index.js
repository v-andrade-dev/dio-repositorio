import React from 'react';
import Header from '../header';
import * as S from './styled'
import useGithub from '../../hooks/github';

function Layout({children}) {
    const {githubState} = useGithub();

    return (
        <S.WrapperLayout>
            <Header></Header>
            {githubState.hasUser ? (
            <>
              {githubState.loading ?(<p>Loading</p>) : (
                <>
                    {children}
                </>
              )}
                </>) : (
                            <p>Nenhum usuario pesquisado</p>
                        )}
        </S.WrapperLayout>
    );
}

export default Layout;