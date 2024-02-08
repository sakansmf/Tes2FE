import { Button, Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import tw from "twrnc"
import Icon from "react-native-vector-icons/Feather"

export default function ModalCustom({ onCloseModal }) {
  return (
    <View style={tw`absolute w-full h-full bg-white z-5 p-4`}>
      <TouchableOpacity style={tw`items-end`} onPress={onCloseModal}>
        <Icon name="x" size={24} />
      </TouchableOpacity>
      <View style={tw`justify-center items-center h-full`}>
        <View>
          <Text>Show the QR Code below to the cashier</Text>
        </View>
        <Image source={require('../../../assets/images/qr.png')} style={{ height: 150, width: 100 }} />

      </View>
    </View>
  )
}