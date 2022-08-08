import React from 'react';
import * as myStyle from './AppStyle'
import { Produtos } from './components/Produtos';

const App = () => {
  return (
     <myStyle.Container>
        <h1>Lista de Tarefas!</h1>
        <Produtos />
        <h3>Hoje é sábado.</h3> 
     </myStyle.Container>
        
  );
}

export default App;