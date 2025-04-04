import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, Image } from 'react-native';
import ImagePickerExample from './Components/GalleryScreen';
import GalleryScreen2 from './Components/GalleryScreen2';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTitle: '', // เอาชื่อออก
          headerLeft: () => (
            <Image
              source={require('./assets/icon.png')}
              style={{ width: 120, height: '100%', marginLeft: 15 }}
              resizeMode="contain"
            />
          ),
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: '#fff',
            height: 80,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: -4 },
            elevation: 5,
            position: 'absolute',
            paddingTop: 10,
          },
          tabBarIcon: ({ focused, color }) => {
            const icons = {
              ExpoDoc: 'image',
              MutiPics: 'images',
            };
            return (
              <Ionicons
                name={
                  focused ? icons[route.name] : `${icons[route.name]}-outline`
                }
                size={30} // ขนาดไอคอนที่กำหนด
                color={color || '#000'}
              
              />
            );
          },
        })}>
        <Tab.Screen
          name="ExpoDoc"
          component={ImagePickerExample}
          options={{
            headerRight: () => (
              <Text style={{ marginRight: 15, fontSize: 16, color: 'black', }}>Gallery | Expo Doc</Text>
            ),
          }}
        />
        <Tab.Screen
          name="MutiPics"
          component={GalleryScreen2}
          options={{
            headerRight: () => (
              <Text style={{ marginRight: 15, fontSize: 16, color: 'black', }}>Gallery | Muti Picture</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
