import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Medidas from '../medidas/Medidas';
import Cores from '../cores/Cores';
import ContatoItem from './ContatoItem';


const ContatoCartao = (props) => {
  return (
      <TouchableOpacity 
        delayLongPress = {1100} 
        onLongPress = {props.onDelete.bind(this, props.id)}
        onPress = {props.onEdit.bind(this, props.id)}
        style = {{...estilo.contatocartao, ...props.estilo}}>
        
        <ContatoItem
          id = {props.id}
          nome = {props.nome}
          telefone = {props.telefone}
        />

      </TouchableOpacity>
  );
};

const estilo = StyleSheet.create({
    contatocartao: {
        width: Medidas.width300,
        maxWidth: Medidas.maxWidth85,
        alignItems: 'center',
        shadowColor: Cores.preto,
        shadowOffset:{
            width: Medidas.width0,
            height: Medidas.height2
        },
        marginTop: Medidas.marginTop5,
        shadowRadius: Medidas.shadowRadius6,
        shadowOpacity: Medidas.shadowOpacity32,
        backgroundColor: Cores.branco,
        elevation: Medidas.elevation12
    }
})

export default ContatoCartao;