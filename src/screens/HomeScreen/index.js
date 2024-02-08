import { Button, Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import tw from "twrnc"
import Layouts from '../../layouts';
import Card from '../../components/Card';
import { useEffect, useRef, useState } from 'react';
import ModalCustom from '../../components/Modal';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from '../../../helpers';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false)
  const token = getToken();
  const navigator = useNavigation()

  console.log(token)

  useEffect(() => {
    if (!token) {
      navigator.navigate("Login")
    }
  }, [])

  return (
    <Layouts currentScreen={"home"}>
      <View style={tw`w-full px-4 shadow-xl bg-white`}>
        <Image source={require('../../../assets/images/logo.png')} style={{ height: 50, width: 100 }} />
      </View>
      {
        modalVisible && <ModalCustom onCloseModal={() => setModalVisible(!modalVisible)} />
      }
      <View>
        <ImageBackground source={require('../../../assets/images/motif.png')} resizeMode="cover" style={{ height: 200, width: "100%", padding: 16 }}>
          <View style={tw`w-full p-4 shadow-xl bg-white rounded`}>
            <View>
              <Text>Good, Afternoon</Text>
              <Text style={tw`font-bold`}>Guntur Saputro</Text>
            </View>
            <View style={tw`mt-8 flex flex-row justify-between`}>
              <TouchableOpacity style={tw`bg-white shadow w-16 h-16 rounded-full justify-center items-center`} onPress={() => setModalVisible(!modalVisible)}>
                <Image source={require('../../../assets/images/qr.png')} style={{ height: 30, width: 50 }} />

              </TouchableOpacity>
              <View style={tw`flex flex-col justify-between py-4`}>
                <View style={tw`flex flex-row gap-20`}>
                  <Text>Saldo</Text>
                  <Text> Rp. 279.000</Text>
                </View>
                <View style={tw`flex flex-row gap-20`}>
                  <Text>Points</Text>
                  <Text style={tw` text-green-300`}>Rp.      4.900</Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground >
        <Card />
      </View >
    </Layouts >
  );
}
