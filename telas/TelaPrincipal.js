import React, { useState, useEffect } from 'react';
import { View, Alert, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ContatoInput from '../componentes/ContatoInput';
import ContatoItem from '../componentes/ContatoItem';
import ContatoCartao from '../componentes/ContatoCartao';
import BotaoCabecalho from '../componentes/BotaoCabecalho';

const TelaPrincipal = ({ route, navigation }) => {
  const [contatos, setContatos] = useState ([]);
  const [id, setId] = useState (10);

  useEffect(() => {
  
    if(navigation.getParam('novoContato')){  
      setContatos(contatos => {
        const nome = navigation.getParam('nome');
        const telefone = navigation.getParam('telefone');
        setId(id + 2);
        navigation.setParams({novoContato:false});
        return [...contatos, {
          id: id.toString(),
          nome: nome,
          telefone: telefone
        }];
      });
    }

    if(navigation.getParam('salvarContato')){
      const idAntigo = navigation.getParam('id');
      const nome = navigation.getParam('nome');
      const telefone = navigation.getParam('telefone');
      navigation.setParams({salvarContato:false});
      setContatos(
        contatos.map(contato => {
          if(contato.id == idAntigo)
            return {id: idAntigo, nome: nome, telefone: telefone};
          else
            return contato;
        })
      );    
    }

  });

  const removerContato = (idASerRemovida) => {
    setContatos (contatos => {
      return contatos.filter ((contato) => {
        return contato.id !== idASerRemovida;
      })
    });
  };

  const editarContato = idASerEditada => navigation.navigate({routeName: 'TelaDetalhes', params: {id: idASerEditada, contatos: contatos}});

  const apagarContato = (idASerApagada) => {
    Alert.alert(
      "Apagar contato?",
      "Essa ação não podera ser revertida!",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Apagar", onPress: () => removerContato(idASerApagada) }
      ],
      { cancelable: true }
    );
  }

	return (
      <View>
        <FlatList
          data = {contatos}
          renderItem = {
            contato => (
              // Mostra o ID (10) + nome + tel
              <ContatoCartao
                id = {contato.item.id}
                nome = {contato.item.nome}
                telefone = {contato.item.telefone}
                onDelete = {apagarContato}
                onEdit = {editarContato}
              />
            )
          }
        />
      </View>
	);
}

TelaPrincipal.navigationOptions = (dadosNav) => {
    return {
        headerTitle: 'Tela Principal',
        headerRight:
            <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('TelaNovo') }}
                />
            </HeaderButtons>
    }
}

export default TelaPrincipal;