import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Hooks'
import { Brand } from '@/Components'
import { setDefaultTheme } from '@/Store/Theme'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { StyleSheet } from 'react-native'

const LoginContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()

  const { t } = useTranslation()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigateAndSimpleReset('Main')
  }

  useEffect(() => {
    init()
  })

  return (
    // <View style={[Layout.fill, Layout.colCenter]}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
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
    backgroundColor: 'red',
  },
  header: {
    flex: 2,
  },
  footer: {
    flex: 1,
    backgroundColor: 'blue',
  },
})
