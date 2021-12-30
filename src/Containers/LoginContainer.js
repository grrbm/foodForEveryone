import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const LoginContainer = () => {
  return (
    // <View style={[Layout.fill, Layout.colCenter]}>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tabs}>
          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Sign-up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
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
})
