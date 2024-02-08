import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from "twrnc"

export default function Layouts({ children, currentScreen }) {
  const navigation = useNavigation()
  return (
    <View style={tw`flex-1 w-full h-full bg-gray-100`}>
      <StatusBar hidden />
      {children}
      <View style={tw`flex flex-row px-4 py-2 shadow-xl justify-center gap-20 absolute w-full bottom-0 z-4 bg-white`}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={tw`flex flex-col gap-2 items-center`}>
            <Image source={currentScreen === "home" ? require('../../assets/icons/home1.png') : require('../../assets/icons/home2.png')} style={{ height: 24, width: 24 }} />
            <Text style={tw`text-xs`}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <View style={tw`flex flex-col gap-2 items-center`}>
            <Image source={currentScreen === "menu" ? require('../../assets/icons/menu1.png') : require('../../assets/icons/menu2.png')} style={{ height: 24, width: 24 }} />
            <Text style={tw`text-xs`}>Menu</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
