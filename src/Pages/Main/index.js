import React from 'react';
import { View, Text, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'


import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import Menu from '../../components/Menu'

import styles from './styles'

export default function Main() {

  let offset = 0

  const translateY = new Animated.Value(0)
  const animatedEvent = Animated.event([
    {
      nativeEvent: {
        translationY: translateY 
      }
    }
  ], {
    useNativeDriver: true
  }, 
  )

  function onHandlerStateChange(event) {
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY

      if(translationY >= 100){
        opened = true
      }else{
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

    Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })

    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Menu translateY={translateY} />
        <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
        >
        <Animated.View style={[styles.card, {transform:[{
            translateY: translateY.interpolate({
              inputRange:[-350 ,0, 380],
              outputRange:[-50 ,0, 380],
              extrapolate: 'clamp'
            }),
        }]}]}>
          <View style={styles.cardHeader}>
            <MaterialIcons name='attach-money' size={28} color='#666' />
            <MaterialIcons name='visibility-off' size={28} color='#666' />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.title}>Saldo Disponivel</Text>
            <Text style={styles.description} >R$ 4.000,00 </Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.annotation}>
              Transferência recebida de Alexandre Rocha hoje as 14:53
            </Text>
          </View>
        </Animated.View>
        </PanGestureHandler>
      </View>
      <Tabs translateY={translateY} />
    </View>
  );
}
