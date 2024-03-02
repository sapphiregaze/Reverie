import { View, Text, Pressable, TextInput } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const LoginScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-[#FCFAF6] p-12">
      <Pressable
        className="-ml-4 mt-6"
        onPress={() => navigation.navigate("Landing")}
      >
        <Text className="text-xl font-semibold text-gray-900">
          <Icon name="back" size={24} color="#111827" />
          &nbsp;Go Back
        </Text>
      </Pressable>
      <View className="flex flex-col items-center justify-center">
        <Text className="mb-8 mt-32 text-center text-3xl font-semibold">
          Login
        </Text>
        <View className="mb-6 w-full">
          <Text className="my-2 ml-2 font-semibold">Username</Text>
          <TextInput
            className="mb-2 w-full rounded-3xl bg-gray-200 p-4 shadow-2xl"
            placeholder="Enter your username"
          />
          <Text className="my-2 ml-2 font-semibold">Password</Text>
          <TextInput
            className="mb-2 w-full rounded-3xl bg-gray-200 p-4 shadow-2xl"
            placeholder="Enter your password"
            secureTextEntry={true}
          />
        </View>
        <Pressable
          className="m-2 w-full rounded-3xl border-2 border-[#6E4AFF] bg-[#FCFAF6] p-2"
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="text-center text-xl font-semibold text-[#6E4AFF]">
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
