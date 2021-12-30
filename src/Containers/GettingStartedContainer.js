import React, { useEffect } from 'react'
import { View, Text, Button, Image, Dimensions } from 'react-native'
import { navigateAndSimpleReset } from '@/Navigators/utils'

import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTheme } from '@/Hooks'

const GettingStartedContainer = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const navigateToLogin = () => {
    var dest = 'Login'
    console.log('navigating to ' + dest)
    navigateAndSimpleReset(dest)
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/Images/ToyFaces.png')}
        style={styles.logo}
        resizeMethod="scale"
      />
      <TouchableOpacity
        style={[
          Common.button.outlineRounded,
          Gutters.regularBMargin,
          styles.button,
        ]}
        onPress={navigateToLogin}
      >
        <Text style={[Fonts.textRegular, styles.buttonText]}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default GettingStartedContainer

const { height } = Dimensions.get('screen')
const height_logo = height * 0.28

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4B3A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 534,
  },
  button: {
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#FF4B3A',
  },
})
