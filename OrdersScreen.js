import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Header, Card, Button, Icon } from 'react-native-elements';

const OrdersScreen = ({ navigation }) => {
  // Example order data
  const orders = [
    { orderNumber: '001', customer: 'John Doe', date: '2024-10-01', total: '$150.00' },
    { orderNumber: '002', customer: 'Jane Smith', date: '2024-10-02', total: '$200.00' },
    { orderNumber: '003', customer: 'Mark Johnson', date: '2024-10-03', total: '$250.00' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Header
        centerComponent={{ text: 'Orders', style: { color: '#fff', fontSize: 18 } }}
        leftComponent={
          <Icon
            name="arrow-back"
            type="material"
            color="#fff"
            onPress={() => navigation.navigate('Dashboard')}
          />
        }
      />

      {/* Orders List */}
      {orders.map((order, index) => (
        <Card key={index} containerStyle={styles.card}>
          <Card.Title>Order #{order.orderNumber}</Card.Title>
          <Card.Divider />
          <View style={styles.cardContent}>
            <Text>Customer: {order.customer}</Text>
            <Text>Date: {order.date}</Text>
            <Text>Total: {order.total}</Text>
          </View>
        </Card>
      ))}

      {/* Back to Dashboard Button */}
      <Button
        title="Back to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
        buttonStyle={styles.button}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 10,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: 'column',
  },
  button: {
    backgroundColor: '#517fa4',
    margin: 20,
  },
});

export default OrdersScreen;