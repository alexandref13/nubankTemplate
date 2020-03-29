import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, Animated } from 'react-native';


import styles from './styles'

export default function Menu({ translateY }) {
  return (
      <Animated.ScrollView  
      style={[styles.container, {opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
      })}]}
      >
          <View style = {styles.code}>
            <QRCode 
            value='https://rockeseat.com.br'
            size={80}
            backgroundColor = '#8b10ae'
            color='#fff'
            />
          </View>
          <View style={styles.nav}>
              <View style={styles.navItem}>
                  <MaterialIcons name='help-outline' size={20} color='#fff' />
                  <Text style={styles.navText}>Me ajuda</Text>
              </View>
              <View style={styles.navItem}>
                  <MaterialIcons name='person-outline' size={20} color='#fff' />
                  <Text style={styles.navText}>Perfil</Text>
              </View>
              <View style={styles.navItem}>
                  <MaterialIcons name='credit-card' size={20} color='#fff' />
                  <Text style={styles.navText}>Configurações do cartão</Text>
              </View>
              <View style={styles.navItem}>
                  <MaterialIcons name='smartphone' size={20} color='#fff' />
                  <Text style={styles.navText}>Configurações do app</Text>
              </View>
          </View>

        <TouchableOpacity style={styles.singOutButton} onPress={() => {}}>
            <Text style={styles.singOutButtonText}>SAIR DO APP</Text>
        </TouchableOpacity>
      </Animated.ScrollView>
  );
}