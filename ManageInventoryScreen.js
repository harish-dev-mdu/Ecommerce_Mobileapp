import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, Button, Alert } from 'react-native';
import { Card } from 'react-native-elements';

const ManageInventoryScreen = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const addProduct = () => {
    if (!productName || !productQuantity) {
      Alert.alert('Error', 'Please enter both product name and quantity');
      return;
    }
    
    const newProduct = {
      id: Date.now().toString(),
      name: productName,
      quantity: parseInt(productQuantity),
    };

    setProducts([...products, newProduct]);
    setProductName('');
    setProductQuantity('');
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  const renderProduct = ({ item }) => (
    <Card containerStyle={styles.productCard}>
      <View style={styles.productContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
        <Button title="Remove" onPress={() => removeProduct(item.id)} color="red" />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Inventory</Text>
      <TextInput
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantity"
        value={productQuantity}
        onChangeText={setProductQuantity}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Add Product" onPress={addProduct} />
      
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        style={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  productList: {
    marginTop: 20,
  },
  productCard: {
    borderRadius: 10,
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productName: {
    fontSize: 18,
  },
  productQuantity: {
    fontSize: 16,
  },
});

export default ManageInventoryScreen;
