import React, { useState } from "react";
import { View, Text, Image, Button, StyleSheet, ScrollView } from "react-native";

function SettingsScreen() {
  const [showPlaces, setShowPlaces] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    {
      id: 1,
      nome: 'BurguerKing',
      imagem: require('../Image/restaurantes/map/BurguerKing.jpg'),
      categoria: 'Hambúrguer',
      descricao: 'Melhor hambúrguer da cidade',
      itens: ['Whopper', 'Cheese Burger', 'Frango Frito']
    },
    {
      id: 2,
      nome: 'Casa-Urich',
      imagem: require('../Image/restaurantes/map/Casa-Urich.jpg'),
      categoria: 'Brasileira',
      descricao: 'Comida caseira de qualidade',
      itens: ['Feijoada', 'Arroz e Feijão', 'Bife a Cavalo']
    },
    {
      id: 3,
      nome: 'Dapala',
      imagem: require('../Image/restaurantes/map/Dapala.jpg'),
      categoria: 'Pizza',
      descricao: 'As melhores pizzas',
      itens: ['Mussarela', 'Calabresa', 'Portuguesa']
    },
    {
      id: 4,
      nome: 'Delirio',
      imagem: require('../Image/restaurantes/map/Delirio.jpg'),
      categoria: 'Contemporânea',
      descricao: 'Sabores modernos com um toque clássico',
      itens: ['Risoto de Frutos do Mar', 'Filé ao Molho Madeira', 'Salada Gourmet']
    },
    {
      id: 5,
      nome: 'Giuseppe',
      imagem: require('../Image/restaurantes/map/Giuseppe.jpg'),
      categoria: 'Italiana',
      descricao: 'Culinária italiana autêntica',
      itens: ['Lasanha Bolonhesa', 'Spaghetti Carbonara', 'Pizza Margherita']
    },
    {
      id: 6,
      nome: 'Jappa',
      imagem: require('../Image/restaurantes/map/Jappa.jpg'),
      categoria: 'Japonesa',
      descricao: 'Sushi e Temaki frescos todos os dias',
      itens: ['Sushi Especial', 'Temaki de Salmão', 'Yakissoba']
    },
    {
      id: 7,
      nome: 'KFC',
      imagem: require('../Image/restaurantes/map/kfc.jpg'),
      categoria: 'Fast-food (Frango)',
      descricao: 'O frango mais crocante da cidade',
      itens: ['Balde de Frango', 'Chicken Tenders', 'Sanduíche Zinger']
    },
    {
      id: 8,
      nome: 'McDonald',
      imagem: require('../Image/restaurantes/map/McDonald.jpg'),
      categoria: 'Fast-food (Hambúrguer)',
      descricao: 'A rede de hambúrgueres mais famosa do mundo',
      itens: ['Big Mac', 'McChicken', 'McFlurry']
    },
    {
      id: 9,
      nome: 'Restaurante-Singular',
      imagem: require('../Image/restaurantes/map/Restaurante-Singular.jpg'),
      categoria: 'Alta Gastronomia',
      descricao: 'Pratos refinados para momentos especiais',
      itens: ['Menu Degustação', 'Filé ao Ponto', 'Tarte Tatin']
    },
    {
      id: 10,
      nome: 'Restaurante 365',
      imagem: require('../Image/restaurantes/map/restaurante-365.jpg'),
      categoria: 'Buffet Variado',
      descricao: 'Opções variadas para todos os gostos',
      itens: ['Buffet Self-Service', 'Pratos Veganos', 'Sobremesas Caseiras']
    }
  ];

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setShowPlaces(false); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.welcomeText}>Bem-vindo ao App InfnetFood</Text>

      <Text style={styles.localText}>Local Principal:</Text>

      <Image source={require('../Image/mapa.png')} style={styles.mainImage} />

      <View style={styles.title}>
        <Image source={require('../Image/Lord.jpg')} style={styles.lordImage} />
        <Text style={styles.lordText}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Lord:</Text> Melhor food do world
        </Text>
      </View>

      <Text style={styles.buttonText}>Se quiser ver mais locais onde tem, só clicar no botão abaixo:</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Ver Mais Locais" onPress={() => setShowPlaces(!showPlaces)} />
      </View>

      {showPlaces && (
        <View style={styles.placesContainer}>
          {places.map(place => (
            <View key={place.id} style={styles.placeItem}>
              <Image source={place.imagem} style={styles.placeImage} />
              <Text style={styles.placeName}>{place.nome}</Text>
              <Button title={`Ver ${place.nome}`} onPress={() => handlePlaceClick(place)} />
            </View>
          ))}
        </View>
      )}

      {selectedPlace && (
        <View style={styles.placeDetailsContainer}>
          <Text style={styles.placeDetailsName}>{selectedPlace.nome}</Text>
          <Image source={selectedPlace.imagem} style={styles.placeDetailsImage} />
          <Text style={styles.placeCategory}>Categoria: {selectedPlace.categoria}</Text>
          <Text style={styles.placeDescription}>{selectedPlace.descricao}</Text>

          <Text style={styles.menuTitle}>Mais Pedidos:</Text>
          {selectedPlace.itens.map((item, index) => (
            <Text key={index} style={styles.menuItem}>{item}</Text>
          ))}

          <Button title="Voltar" onPress={() => setSelectedPlace(null)} />
        </View>
      )}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    backgroundColor:"#eefafc",
  },
  welcomeText: {
    color: "#4cb6ff", 
    fontWeight: "bold", 
    fontSize: 30, 
    padding: 20,
    textAlign: 'center',
  },
  localText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainImage: {
    width: 400,
    height: 300,
    alignSelf: 'center', 
    marginTop: 20,
  },
  title: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center', 
  },
  lordImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 10,
  },
  lordText: {
    textAlign: "center", 
  },
  buttonContainer: {
    marginTop: 20, 
    width: '80%', 
    alignItems: 'center', 
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  placesContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center', 
  },
  placeItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  placeImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  placeDetailsContainer: {
    marginTop: 30,
    alignItems: 'center',
    padding: 20,
  },
  placeDetailsName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  placeDetailsImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeCategory: {
    fontSize: 18,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  placeDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    fontSize: 16,
    marginBottom: 5,
  }
});

export default SettingsScreen;
