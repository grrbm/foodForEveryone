import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { useTheme } from '@/Hooks'

const LoginContainer = () => {
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const [selectedTab, setSelectedTab] = useState(0)
  const navigateToMain = () => {
    var dest = 'Main'
    console.log('navigating to ' + dest)
    navigateAndSimpleReset(dest)
  }
  return (
    // <View style={[Layout.fill, Layout.colCenter]}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tabs}>
          <TouchableOpacity onPress={() => setSelectedTab(0)}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab(1)}>
            <Text>Sign-up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        {selectedTab === 0 ? (
          <View>
            <Text>Email address</Text>
            <TextInput autoFocus />
            <Text>Password</Text>
            <TextInput />
            <Text>Forgot password?</Text>
            <TouchableOpacity
              style={[
                Common.button.outlineRounded,
                Gutters.regularBMargin,
                styles.button,
              ]}
              onPress={navigateToMain}
            >
              <Text style={[Fonts.textRegular, styles.buttonText]}>Login</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text>Footer 2</Text>
        )}
      </View>
    </View>
  )
}

export default LoginContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    flex: 2,
    backgroundColor: '#f2f2f2',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#fff',
  },
})
