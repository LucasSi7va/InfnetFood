import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CartMock from '../Mock';

const bebidas = [
  { name: 'Coca', image: require('../Image/comidas/coca_cola.png'), price: 5.0 },
  { name: 'Ice', image: require('../Image/comidas/Ice.png'), price: 4.5 },
  { name: 'Guaravita', image: require('../Image/comidas/guaravita.png'), price: 6.0 },
  { name: 'Fanta', image: require("../Image/comidas/fanta.jpg"), price: 5.50 },
  { name: 'Sprite', image: require("../Image/comidas/sprite.jpg"), price: 5.00 },
  { name: 'Água', image: require("../Image/comidas/agua_prata.jpg"), price: 2.00 },
  { name: 'Suco de Laranja', image: require("../Image/comidas/suco_laranja.jpeg"), price: 4.00 },
  { name: 'Suco de Uva', image: require("../Image/comidas/suco_uva.png"), price: 4.50 },
  { name: 'Refrigerante de Guaraná', image: require("../Image/comidas/guarana.jpg"), price: 5.00 },
  { name: 'Chá Gelado', image: require("../Image/comidas/cha_gelado.jpeg"), price: 4.50 },
];

const lanches = [
  { name: 'Hambúrguer', image: require('../Image/comidas/hamburguer.jpeg'), price: 12.0 },
  { name: 'Hot Dog', image: require('../Image/comidas/hot-dog.png'), price: 8.0 },
  { name: 'Sanduíche', image: require("../Image/comidas/sanduiche.jpeg"), price: 7.50 },
  { name: 'Pizza', image: require("../Image/comidas/pizza.jpg"), price: 18.00 },
  { name: 'Coxinha', image: require("../Image/comidas/coxinha.jpg"), price: 5.50 },
  { name: 'Kibe', image: require("../Image/comidas/kibe.jpeg"), price: 6.00 },
  { name: 'Pastel', image: require("../Image/comidas/pastel.jpg"), price: 6.50 },
  { name: 'Wrap', image: require("../Image/comidas/wrap.jpeg"), price: 9.00 },
  { name: 'Croissant', image: require("../Image/comidas/crossaint.jpg"), price: 7.00 },
  { name: 'Taco', image: require("../Image/comidas/taco.jpeg"), price: 8.50 },
];

const sobremesas = [
  { name: 'Sorvete', image: require('../Image/comidas/sorvete.jpeg'), price: 7.0 },
  { name: 'Pudim', image: require('../Image/comidas/pudim.jpg'), price: 6.0 },
  { name: 'Brownie', image: require("../Image/comidas/Brownie.jpg"), price: 6.50 },
  { name: 'Torta de Limão', image: require("../Image/comidas/Torta_de_Limão.jpg"), price: 8.00 },
  { name: 'Cheesecake', image: require("../Image/comidas/Cheesecake.jpeg"), price: 9.00 },
  { name: 'Mousse de Maracujá', image: require("../Image/comidas/Mousse_de_Maracujá.jpg"), price: 6.00 },
  { name: 'Brigadeiro', image: require("../Image/comidas/Brigadeiro.webp"), price: 3.00 },
  { name: 'Beijinho', image: require("../Image/comidas/Beijinho.jpg"), price: 3.50 },
  { name: 'Churros', image: require("../Image/comidas/Churros.jpg"), price: 5.00 },
  { name: 'Gelatina', image: require("../Image/comidas/Gelatina.jpg"), price: 2.50 },
];

const MarketScreen = () => {
  const navigation = useNavigation();
  const [cartCount, setCartCount] = useState(CartMock.cart.length);
  const [selectedCategory, setSelectedCategory] = useState('bebidas');

  const addToCart = (item) => {
    CartMock.addToCart(item);
    setCartCount(CartMock.cart.length);
  };

  const navigateToOrders = () => {
    navigation.navigate('Orders');
  };

  const renderItem = React.useMemo(() => ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>R$ {item.price.toFixed(2)}</Text>
      <Button title="Adicionar" onPress={() => addToCart(item)} />
    </View>
  ), []);

  const getCategoryData = () => {
    switch (selectedCategory) {
      case 'bebidas':
        return bebidas;
      case 'lanches':
        return lanches;
      case 'sobremesas':
        return sobremesas;
      default:
        return bebidas;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mercado</Text>
        <TouchableOpacity style={styles.cartIcon} onPress={navigateToOrders}>
          <FontAwesome name="shopping-cart" size={24} color="black" />
          <Text style={styles.cartCount}>{cartCount}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categorySelector}>
        <TouchableOpacity style={styles.categoryButton} onPress={() => setSelectedCategory('bebidas')}>
          <Text style={styles.categoryText}>Bebidas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => setSelectedCategory('lanches')}>
          <Text style={styles.categoryText}>Lanches</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => setSelectedCategory('sobremesas')}>
          <Text style={styles.categoryText}>Sobremesas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <FlatList
          data={getCategoryData()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2}  
          columnWrapperStyle={styles.columnWrapper}  
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eefafc',
    paddingVertical: 10,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCount: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  categorySelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  categoryContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',  
    marginBottom: 10,  
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,  
    width: '48%',  
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default MarketScreen;
