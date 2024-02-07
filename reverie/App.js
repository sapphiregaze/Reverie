import React from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-[#FCFAF6] p-12">
      <Text className="text-5xl text-center font-ui-sans-serif">
        Level up your <Text className="font-bold">daily routine</Text> together.
      </Text>
      <Image source={require("./assets/hero.png")} />
      <Pressable
        className="m-2 bg-[#6E4AFF] w-full rounded-3xl p-2"
        onPress={() => Alert.alert("Login button pressed")}
      >
        <Text className="text-xl text-center text-[#FCFAF6]">Login</Text>
      </Pressable>
      <Pressable
        className="m-2 bg-[#FCFAF6] w-full rounded-3xl p-2 border-[#6E4AFF] border-2"
        onPress={() => Alert.alert("Register button pressed")}
      >
        <Text className="text-xl text-center text-[#6E4AFF]">Register</Text>
      </Pressable>
    </View>
  );
}
