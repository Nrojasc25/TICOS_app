import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Events from './screens/Events';
import Points from './screens/Points';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Events"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Events') {
              iconName = focused ? 'calendar' : 'calendar-outline'; // Change these icons as desired
            } else if (route.name === 'Points') {
              iconName = focused ? 'star' : 'star-outline'; // Change these icons as desired
            }

            // Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Points" component={Points} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
