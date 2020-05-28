import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Medidas from '../medidas/Medidas';

const ContatoItem = (props) => {
  return (
    <View style = {styles.listaDeContatos}>
      <Text>{props.id}</Text>
      <Text>{props.nome}</Text>
      <Text>{props.telefone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listaDeContatos: {
    padding: Medidas.padding12,
    //backgroundColor: Cores.cinza,
    //borderColor: Cores.preto,
    //borderWidth: Medidas.borderBottomWidth1,
    marginBottom: Medidas.marginBottom8,
    borderRadius: Medidas.borderRadius8
  }
});

export default ContatoItem;