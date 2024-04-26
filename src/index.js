import React from 'react'
import ReactDOM from 'react-dom/client'
import Wrapper from './components/Wrapper'
import MainDiv from './components/MainDiv'
import Buttons from './components/Buttons'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<>
    <MainDiv>
        <Wrapper>
            <Buttons/>
        </Wrapper>
    </MainDiv>
    </>
)