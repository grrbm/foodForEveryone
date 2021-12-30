import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainContainer } from '@/Containers'
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline'
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list-box' : 'ios-list'
          }

          // You can return any component that you like here!
          return <Icon name="rocket" size={30} color="#900" />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={MainContainer} />
    </Tab.Navigator>
  )
}

export default MainNavigator
