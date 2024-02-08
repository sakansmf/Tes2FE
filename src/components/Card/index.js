import Icon from "react-native-vector-icons/FontAwesome"
import { Image, View, Text } from 'react-native';
import tw from "twrnc"

export default function Card() {
  return (
    <View style={tw`w-full bg-white`}>
      <View style={tw`w-full bg-black justify-center items-center h-46`}>
        <Image source={require('../../../assets/images/logo.png')} style={{ height: 100, width: "50%", padding: 16 }} />
      </View>
      <View style={tw`px-4 py-4 flex flex-row justify-between w-full items-center`}>
        <View style={tw`flex flex-row gap-2`}>
          <View style={tw`w-2 h-2 rounded-full bg-black`} />
          <View style={tw`w-2 h-2 rounded-full bg-gray-400`} />
          <View style={tw`w-2 h-2 rounded-full bg-gray-400`} />
          <View style={tw`w-2 h-2 rounded-full bg-gray-400`} />
        </View>
        <View>
          <Text style={tw`text-xs text-green-300`}>View All <Icon name="chevron-right" size={12} /></Text>
        </View>
      </View>
    </View>)
}