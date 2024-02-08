import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../../store/actions/authActions";
import tw from "twrnc"
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [status, setStatus] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { login,
    isSuccessLogin,
    isLoadingLogin,
    isFailedLogin,
    errorMessageLogin
  } = useSelector(state => state.login)
  const navigator = useNavigation()

  const onClickLogin = () => {
    if (email !== "" && password !== "") {
      dispatch(loginAction({ username: email, password: password }))
      navigator.navigate("Home")
    }
  }

  useEffect(() => {
    if (isSuccessLogin) {
      navigator.navigate('Home')
    }
  }, [isSuccessLogin])

  return (
    <View style={tw`p-4 flex-1 justify-center bg-white`}>
      <StatusBar hidden />
      <View style={tw`flex justify-center items-center`}>
        {/* Image */}
        <Image source={require('../../../assets/images/logo.png')} style={{ height: 100, width: 200, marginBottom: 20 }} />
        <View style={tw`w-full`}>
          <TextInput onChangeText={(val) => setEmail(val)} placeholder="Email" style={tw`mb-4 w-full h-10 rounded border px-4`} />
          <TextInput onChangeText={(val) => setPassword(val)} placeholder="Password" style={tw`mb-4 w-full h-10 rounded border px-4`} />
          {isFailedLogin && <Text style={tw`text-red-500`}>{errorMessageLogin.message}</Text>}
          <TouchableOpacity onPress={onClickLogin} style={tw`bg-white shadow w-full h-10 rounded flex justify-center items-center text-black border border-gray-300`}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}