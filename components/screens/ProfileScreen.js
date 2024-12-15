import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { UserContext } from "../Api/Usercontext";

export default function ProfileScreen() {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Image
        source={require('../Image/profile.jpeg')} 
        style={{ width: 200, height: 200, borderRadius: 100 }} 
      />
      <Text style={styles.name}>Usuario: {user?.username}</Text>
      <Text><Text>Email:</Text>  lucaosafadao@gmail.com</Text>
      <Text><Text>Pedidos:</Text>  Concluidos: +99 Pedidos</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eefafc",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 16,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
