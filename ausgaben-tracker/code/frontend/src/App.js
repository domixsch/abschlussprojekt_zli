import bg from './img/bg.png'
import styled from 'styled-components'

function App() {
  return (
    <AppStyled bg={bg} className="App">
      <main>
        
      </main>
    </AppStyled>
  );
}
  const AppStyled = styled.div`
  <AppStyled
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;



  

export default App;
