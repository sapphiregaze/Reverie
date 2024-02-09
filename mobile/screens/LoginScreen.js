import { View, Text, Pressable, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const LoginScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-[#FCFAF6] p-12">
      <Pressable
        className="mt-6 -ml-4"
        onPress={() => navigation.navigate("Landing")}
      >
        <Text className="text-xl text-gray-900 font-semibold">
          <Icon name="back" size={24} color="#111827" />
          &nbsp;Go Back
        </Text>
      </Pressable>
      <View className="flex flex-col items-center justify-center">
        <Text className="text-3xl text-center font-semibold mt-32 mb-8">
          Login
        </Text>
        <View className="w-full mb-6">
          <Text className="ml-2 font-semibold my-2">Username</Text>
          <TextInput
            className="bg-gray-200 rounded-3xl w-full p-4 shadow-2xl mb-2"
            placeholder="Enter your username"
          />
          <Text className="ml-2 font-semibold my-2">Password</Text>
          <TextInput
            className="bg-gray-200 rounded-3xl w-full p-4 shadow-2xl mb-2"
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
        <Pressable
          className="m-2 bg-[#FCFAF6] w-full rounded-3xl p-2 border-[#6E4AFF] border-2"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-xl font-semibold text-center text-[#6E4AFF]">
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
