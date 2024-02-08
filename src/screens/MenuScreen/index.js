import * as React from 'react';
import { Button, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from "twrnc"
import Layouts from '../../layouts';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../../../helpers';

const Stack = createNativeStackNavigator()

export default function MenuScreen() {
  //make me list with format {id, category}
  const items = [1, 2, 3]
  const [currentSelectedTab, setCurrentSelectedTab] = React.useState(1)
  const data = [
    { id: 1, category: "Seasonal Product" },
    { id: 2, category: "Best Seller" },
    { id: 3, category: "Coffe" },
    { id: 4, category: "Chocolate" },
  ]
  const token = getToken();
  const navigator = useNavigation();

  React.useEffect(() => {
    if (!token) {
      navigator.navigate("Login")
    }
  }, [token])

  return (
    <Layouts currentScreen={"menu"}>
      <View style={tw`w-full p-4 text-center items-center bg-white`}>
        <Text style={tw`font-semibold`}>MENU</Text>
      </View>
      <View style={tw`bg-white`}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          key={item => item.id}
          renderItem={({ item }) =>
            <TouchableOpacity
              style={tw`${currentSelectedTab === item.id ? "border-b-2" : ""} py-2 mx-2`}
              title='Seasonal Product'
              color={"white"}
              onPress={() => setCurrentSelectedTab(item.id)}
            >
              <Text style={tw`px-3 py-3 ${currentSelectedTab === item.id ? "text-black font-semibold" : "text-gray-400 font-normal"}`}>{item.category}</Text>
            </TouchableOpacity>
          }
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`w-full`}>
          <Text style={tw`font-semibold py-4 px-4`}>Seasonal Product</Text>
          <View>
            {items.map((item, i) => <View key={i} style={tw`flex flex-row justify-between p-4 bg-white gap-4 ${i !== items.length - 1 ? "border-dashed border-b border-gray-300" : ""}`}>
              <Image source={require('../../../assets/images/OIP.jpeg')} style={{ height: 32, width: 32, marginTop: "auto", marginBottom: "auto" }} />
              <View style={tw`flex-1`}>
                <Text style={tw`font-semibold text-[14px]`}>Raisin Delight Frappe</Text>
                <Text style={tw`text-[10px] text-gray-400`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
              <View>
                <Text style={tw`font-bold text-[12px]`}>Rp. 39.000</Text>
              </View>
            </View>)}
          </View>
        </View>
        <View style={tw`w-full`}>
          <Text style={tw`font-semibold py-4 px-4`}>Best Seller</Text>
          <View>
            {items.map((item, i) => <View key={i} style={tw`flex flex-row justify-between p-4 bg-white gap-4 ${i !== items.length - 1 ? "border-dashed border-b border-gray-300" : ""}`}>
              <Image source={require('../../../assets/icons/home1.png')} style={{ height: 32, width: 32, marginTop: "auto", marginBottom: "auto" }} />
              <View style={tw`flex-1`}>
                <Text style={tw`font-semibold text-[14px]`}>Latte Freddo</Text>
                <Text style={tw`text-[10px] text-gray-400`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
              <View>
                <Text style={tw`font-bold text-[12px]`}>Rp. 39.000</Text>
              </View>
            </View>)}
          </View>
        </View>
        <View style={tw`w-full`}>
          <Text style={tw`font-semibold py-4 px-4`}>Best Seller</Text>
          <View>
            {items.map((item, i) => <View key={i} style={tw`flex flex-row justify-between p-4 bg-white gap-4 ${i !== items.length - 1 ? "border-dashed border-b border-gray-300" : ""}`}>
              <Image source={require('../../../assets/icons/home1.png')} style={{ height: 32, width: 32, marginTop: "auto", marginBottom: "auto" }} />
              <View style={tw`flex-1`}>
                <Text style={tw`font-semibold text-[14px]`}>frappucino</Text>
                <Text style={tw`text-[10px] text-gray-400`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
              <View>
                <Text style={tw`font-bold text-[12px]`}>Rp. 39.000</Text>
              </View>
            </View>)}
          </View>
        </View>
      </ScrollView>
    </Layouts >
  );
}
