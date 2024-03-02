import * as React from "react";
import { View, Text, Image, Pressable, Alert } from "react-native";

const LandingScreen = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center bg-[#FCFAF6] p-12">
      <Text className="text-center text-5xl">
        Level up your <Text className="font-bold">daily routine</Text> together.
      </Text>
      <Image source={require("../assets/hero.png")} />
      <Pressable
        className="m-2 w-full rounded-3xl bg-[#6E4AFF] p-2"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-center text-xl font-semibold text-[#FCFAF6]">
          Login
        </Text>
      </Pressable>
      <Pressable
        className="m-2 w-full rounded-3xl border-2 border-[#6E4AFF] bg-[#FCFAF6] p-2"
        onPress={() => navigation.navigate("Register")}
      >
        <Text className="text-center  text-xl font-semibold text-[#6E4AFF]">
          Register
        </Text>
      </Pressable>
    </View>
  );
};

export default LandingScreen;
