import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

const CompletedOrdersScreen = ({ navigation }) => {
  // Sample data for completed orders including customer details and agent feedback
  const [completedOrders, setCompletedOrders] = useState([
    {
      id: 1,
      item: 'Product 1',
      quantity: 2,
      image: 'https://th.bing.com/th/id/OIP.sA1OOol-g-ZWP5aSQEYNXwAAAA?w=257&h=180&c=7&r=0&o=5&pid=1.7://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9ziHZfu5wgLS3clYr19lxFMW8fJJASoB5g&s',
      customer: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '123-456-7890',
      },
      completionDate: '2024-10-01',
      agentFeedback: 'Delivered on time, customer satisfied.',
    },
    {
      id: 2,
      item: 'Product 2',
      quantity: 1,
      image: 'https://th.bing.com/th/id/OIP.WwStJoXhOM_Y41IZ_SAKOAHaGX?w=246&h=204&c=7&r=0&o=5&pid=1.7',    
        customer: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        contact: '098-765-4321',
      },
      completionDate: '2024-10-02',
      agentFeedback: 'Customer requested a follow-up call.',
    },
    {
      id: 3,
      item: 'Product 3',
      quantity: 5,
      image: 'https://th.bing.com/th?q=Heavy+Duty+Canvas+Bag&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
      customer: {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        contact: '555-123-4567',
      },
      completionDate: '2024-10-03',
      agentFeedback: 'Package damaged but resolved quickly.',
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      {completedOrders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Completed Orders</Text>
        </View>
      ) : (
        completedOrders.map(order => (
          <Card key={order.id} containerStyle={styles.card}>
            <Card.Title>{order.item}</Card.Title>
            <Card.Divider />
            <View style={styles.cardContent}>
              <Image source={{ uri: order.image }} style={styles.image} />
              <View style={styles.orderDetails}>
                <Text style={styles.cardText}>Customer: <Text style={styles.cardValue}>{order.customer.name}</Text></Text>
                <Text style={styles.cardText}>Email: <Text style={styles.cardValue}>{order.customer.email}</Text></Text>
                <Text style={styles.cardText}>Contact: <Text style={styles.cardValue}>{order.customer.contact}</Text></Text>
                <Text style={styles.cardText}>Quantity: <Text style={styles.cardValue}>{order.quantity}</Text></Text>
                <Text style={styles.cardText}>Completion Date: <Text style={styles.cardValue}>{order.completionDate}</Text></Text>
                <Text style={styles.cardText}>Agent Feedback: <Text style={styles.cardValue}>{order.agentFeedback}</Text></Text>
              </View>
            </View>
          </Card>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 15,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  cardText: {
    fontSize: 12,
    color: '#333',
  },
  cardValue: {
    fontWeight: 'bold',
    color: '#517fa4',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
});

export default CompletedOrdersScreen;
