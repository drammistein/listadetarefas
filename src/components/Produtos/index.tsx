import { useState } from "react";
import { ItemDescricao } from "../ItemDescricao";
import PlusImg from '../../images/icon.png';

import * as myStyle from './styles';

export const Produtos = () => {
    const [list, setList] = useState([    
        {id: 1, nome: 'Comprar Televisão'},
        {id: 2, nome: 'Comprar Notebook'},
        {id: 3, nome: 'Comprar Iphone'}
    ]);

    const [inputText, setInputText] = useState('');

  //Adicionando - evento pelo click 
  const handleAddClick = () => {
    if(inputText !== '') {
        list.push({
          id: list.length +1,
          nome: ''
        });
        setInputText('');
    }    
  } 
    //Adicionando um item
  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      nome: taskName,
    });
    setList(newList);
  }
    //Deletando um item
  const handleDeleteTask = (taskNumber: number) => {
    let newList = [...list];
    newList.splice(-1)
    setList(newList);
  }
    return (
      <>
        <myStyle.InputAdd>
            <input 
              type="text"
              placeholder="Adicionar"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
            /> 
          <myStyle.Img src={PlusImg} onClick={handleAddClick}/> 
        </myStyle.InputAdd>
        <myStyle.Container> 
            <ul>
                {list.map((item, index) => (            
                    <ItemDescricao 
                        onAdd = {handleAddTask}
                        onDelete = {handleDeleteTask}    
                        key={index} data={item}   />
                ))}
            </ul>   
        </myStyle.Container>   
      </>           
    );
}


