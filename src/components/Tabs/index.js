import React from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'

export default function Tabs({ translateY }) {
  return (
    <Animated.View  style={[styles.container, {transform:[{
      translateY: translateY.interpolate({
        inputRange: [0,380],
        outputRange: [0,30],
        extrapolate: 'clamp'
      })
    }],
    opacity: translateY.interpolate({
      inputRange: [0, 380],
      outputRange: [1, 0.17],
      extrapolate: 'clamp'
    })}]}>
      <ScrollView 
       contentContainerStyle = {{
         paddingLeft: 10, paddingRight: 20
       }} 
       horizontal = {true}
       showsHorizontalScrollIndicator = {false}
       >
        <View style={styles.tabItem}>
          <MaterialIcons name='person-add' size={24} color='#fff' />
          <Text style={styles.tabText}>Indicar Amigos</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons name='chat-bubble-outline' size={24} color='#fff' />
          <Text style={styles.tabText}>Cobrar</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons name='arrow-downward' size={24} color='#fff' />
          <Text style={styles.tabText}>Depositar</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons name='arrow-upward' size={24} color='#fff' />
          <Text style={styles.tabText}>Transferir</Text>
        </View>
        <View style={styles.tabItem}>
          <MaterialIcons name='lock' size={24} color='#fff' />
          <Text style={styles.tabText}>Bloquear Cartao</Text>
        </View>
      </ScrollView>
    </Animated.View>
  );
}
