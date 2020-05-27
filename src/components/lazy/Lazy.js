import React, {Suspense} from 'react'

export default ({children}) => (
  <Suspense fallback={<div>Loading ...</div>}>
    {children}
  </Suspense>
)

/*
const SpinnerStyled = styled.div`
  padding: 30px;
  text-align: center;
  display: block;
  width: 100%;
  * {
    margin: auto;
  }
`
*/
