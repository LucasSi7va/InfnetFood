import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TextInput } from 'react-native';
import CartMock from '../Mock';

const ShopcartScreen = () => {
  const [isAddressVisible, setIsAddressVisible] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [confirmedAddress, setConfirmedAddress] = useState(null);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [confirmedCard, setConfirmedCard] = useState(null);

  const renderCartItem = ({ item }) => (
    <Text style={styles.item}>
      {item.name} x{item.quantity} - R$ {(item.price * item.quantity).toFixed(2)}
    </Text>
  );

  const handleAddressSelection = () => {
    setIsAddressVisible(true); 
  };

  const handleCardSelection = () => {
    setIsCardVisible(true); 
  };

  const handleConfirmAddress = () => {
    setConfirmedAddress({
      address,
      cep,
      houseNumber,
    });
    setIsAddressVisible(false); 
  };

  const handleConfirmCard = () => {
    setConfirmedCard({
      cardNumber,
      expiryDate,
      cvv,
    });
    setIsCardVisible(false); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do Pedido</Text>

      <FlatList
        data={CartMock.cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCartItem}
      />

      <Text style={styles.total}>Total: R$ {CartMock.calculateTotal()}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Escolher Endereço" onPress={handleAddressSelection} />
      </View>

     
      {isAddressVisible && !confirmedAddress && (
        <View style={styles.addressContainer}>
          <Text style={styles.addressLabel}>Endereço de Entrega:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu endereço"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="CEP"
            value={cep}
            onChangeText={setCep}
          />
          <TextInput
            style={styles.input}
            placeholder="Número da Casa"
            value={houseNumber}
            onChangeText={setHouseNumber}
          />

          <View style={styles.buttonContainer}>
            <Button title="Confirmar Endereço" onPress={handleConfirmAddress} />
          </View>
        </View>
      )}

      
      {confirmedAddress && (
        <View style={styles.confirmedAddressContainer}>
          <Text style={styles.confirmedAddressTitle}>Endereço Confirmado:</Text>
          <Text>Endereço: {confirmedAddress.address}</Text>
          <Text>CEP: {confirmedAddress.cep}</Text>
          <Text>Número da Casa: {confirmedAddress.houseNumber}</Text>
        </View>
      )}

    
      <View style={styles.buttonContainer}>
        <Button title="Adicionar Cartão de Crédito" onPress={handleCardSelection} />
      </View>

  
      {isCardVisible && !confirmedCard && (
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabel}>Dados do Cartão de Crédito:</Text>
          <TextInput
            style={styles.input}
            placeholder="Número do Cartão"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Validade (MM/AA)"
            value={expiryDate}
            onChangeText={setExpiryDate}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
            <Button title="Confirmar Cartão" onPress={handleConfirmCard} />
          </View>
        </View>
      )}

     
      {confirmedCard && (
        <View style={styles.confirmedCardContainer}>
          <Text style={styles.confirmedCardTitle}>Cartão Confirmado:</Text>
          <Text>Número do Cartão: {confirmedCard.cardNumber}</Text>
          <Text>Validade: {confirmedCard.expiryDate}</Text>
          <Text>CVV: {confirmedCard.cvv}</Text>
        </View>
      )}

      <View style={styles.finalButtonContainer}>
        <Button title="Confirmar a Compra" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eefafc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  addressContainer: {
    marginTop: 20,
  },
  addressLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    marginTop: 20,
  },
  cardLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 10,
  },
  confirmedAddressContainer: {
    marginTop: 30,
  },
  confirmedAddressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  confirmedCardContainer: {
    marginTop: 30,
  },
  confirmedCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  finalButtonContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
});

export default ShopcartScreen;
