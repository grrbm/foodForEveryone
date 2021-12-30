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
          color = focused ? '#900' : '#222'
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home'
          } else if (route.name === 'Likes') {
            iconName = focused ? 'heart' : 'heart'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user'
          } else if (route.name === 'History') {
            iconName = focused ? 'history' : 'history'
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={30} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={MainContainer} />
      <Tab.Screen name="Likes" component={MainContainer} />
      <Tab.Screen name="Profile" component={MainContainer} />
      <Tab.Screen name="History" component={MainContainer} />
    </Tab.Navigator>
  )
}

export default MainNavigator
