import * as React from "react";
import { View, Text, Image, Pressable, Alert } from "react-native";

const LandingScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-[#FCFAF6] p-12">
      <Text className="text-5xl text-center">
        Level up your <Text className="font-bold">daily routine</Text> together.
      </Text>
      <Image source={require("../assets/hero.png")} />
      <Pressable
        className="m-2 bg-[#6E4AFF] w-full rounded-3xl p-2"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-xl font-semibold text-center text-[#FCFAF6]">
          Login
        </Text>
      </Pressable>
      <Pressable
        className="m-2 bg-[#FCFAF6] w-full rounded-3xl p-2 border-[#6E4AFF] border-2"
        onPress={() => navigation.navigate("Register")}
      >
        <Text className="text-xl  font-semibold text-center text-[#6E4AFF]">
          Register
        </Text>
      </Pressable>
    </View>
  );
};

export default LandingScreen;
