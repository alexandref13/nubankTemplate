import React from 'react';
import { View, Image, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

import logo from '../../assets/Nubank_Logo.png'

import styles from './styles';

export default function Header() {
  return (
    <View  style={styles.container}>
        <View style = {styles.top}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.title}>Alexandre</Text>
        </View>
        <MaterialIcons name='keyboard-arrow-down' size={20} color = '#fff' />
    </View>
  );
}
