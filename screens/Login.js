import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export default function Login({ navigation }) {
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (password === "AZERTY123") {
      navigation.navigate("TabNavigator");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        onChangeText={(value) => setPassword(value)}
        style={styles.input}
        placeholder="Password"
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Connect</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 100,
    backgroundColor: "#eee",
  },
});