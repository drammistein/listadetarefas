import React from "react"
import { useState, KeyboardEvent } from "react";
import { idText } from "typescript";
import * as myStyle from './styles';
import DeleteImg from '../../images/Delete.png';
import { Produtos } from '../Produtos';

    type Props = {
        data: {
            id: number;
            nome: string;
        }
        onAdd: (taskName: any) => void;
        onDelete: (taskNumber: number) => void;
    }

export const ItemDescricao = ({ data, onDelete, onAdd }: Props) => {  
    const [inputText, setInputText] = useState('');

    //Adicionando - evento pelo enter pressionado
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onAdd(inputText);
            setInputText('');
        }
    }
    //Adicionando - evento pelo click 
    const handleAddClick = () => {
        if(inputText !== '') {
            onAdd(inputText);
            setInputText('');
        }    
    }
    //Deletando
    const handleDeleteClick = () => {
            onDelete(data.id);
    }
    return (
        <myStyle.Container>
            <li>{data.nome}</li> 
            <myStyle.Img src={DeleteImg} onClick={handleDeleteClick} />
        </myStyle.Container>
    );
}


