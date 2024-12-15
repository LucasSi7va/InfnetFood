import React, { useState, useContext } from "react";
import { View, Image, Text, TextInput, Button, StyleSheet, SafeAreaView } from "react-native";
import { UserContext } from "../Api/Usercontext";

export default function LoginScreen({ statesLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errormesager, seterrormesager] = useState("");
  const { setUser } = useContext(UserContext);

  const Login = () => {
    if (username === "zebunda" && password === "123") {
      statesLogin();
      setUser({username})
      seterrormesager("");
    } else {
      seterrormesager("Usuario ou a senha esta errada");
    }
  };

  return (
     <View style={styles.container}>
      <Text style={{fontSize: 24,fontWeight: "bold",textAlign: "center",}}>Bem Vindo ao InfnetFood</Text>
      <Image source={require('../Image/logoLogin.webp')} style={{width:200  , height: 200 , borderRadius: 50  ,margin:"auto"}}/>
      


     <SafeAreaView style={styles.header}>
     
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {errormesager ? <Text style={styles.error}>{errormesager}</Text> : null}
      <Button title="Entrar" onPress={Login} />
    </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: "#eefafc",
    padding: 50,
    height:"100%"
  },
  header:{
      gap:5,
  },


  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  error:{
    color:"red",
    textAlign:"center",
    padding: 3,
    fontSize: 20,
  }

});
