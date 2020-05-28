import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { Platform } from "react-native";
import Cores from "../cores/Cores";

import TelaDetalhes from '../telas/TelaDetalhes';
import TelaPrincipal from '../telas/TelaPrincipal';
import TelaNovo from '../telas/TelaNovo';

const Navigator = createStackNavigator(
    {
        TelaPrincipal: TelaPrincipal,
        TelaDetalhes: TelaDetalhes,
        TelaNovo: TelaNovo
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Cores.primary : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
        }
    });

export default createAppContainer(Navigator);