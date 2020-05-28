import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import Medidas from '../medidas/Medidas';
import Cores from '../cores/Cores';


const ContatoInput = (props) => {
    const [nome, setNome] = useState ('');
    const [telefone, setTelefone] = useState ('');

    const capturaNome = (nome) => {
        setNome(nome)
      };
    
      const capturaTelefone = (telefone) => {
        setTelefone(telefone)
      };
    
    return (
        <View style = {styles.contato}>
            <TextInput
              placeholder = "Nome"
              style = {styles.contatoInputText}
              onChangeText = {capturaNome}
              value = {nome}
            />
            <TextInput
              placeholder = "Telefone"
              style = {styles.contatoInputText}
              onChangeText = {capturaTelefone}
              value = {telefone}
               keyboardType = {'number-pad'}
            />
            <Button
              title = "Add"
              onPress = {() => props.onAdicionarContato(nome, telefone)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    contato: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    contatoInputText: {
      width: Medidas.width80,
      borderBottomColor: Cores.preto,
      borderBottomWidth: Medidas.borderBottomWidth1,
      padding: Medidas.padding2,
      marginBottom: Medidas.marginBottom8
    }
});

export default ContatoInput;