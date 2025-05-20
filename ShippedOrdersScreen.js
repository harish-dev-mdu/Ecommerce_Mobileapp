import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
// import MapView, { Marker } from 'react-native-maps';

const ShippedOrdersScreen = ({ navigation }) => {
  // Sample data for shipped orders
  const [shippedOrders, setShippedOrders] = useState([
    {
      id: 1,
      item: 'Product 1',
      quantity: 2,
      image: 'http://ts2.mm.bing.net/th?id=OIP.xDBgUX23MDEl8NYOJnpFbgAAAA&pid=15.1',
      customer: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '123-456-7890',
      },

      shippingDate: '2024-10-01',
      trackingLocation: { latitude: 37.78825, longitude: -122.4324 },
    },
    {
      id: 2,
      item: 'Product 2',
      quantity: 1,
      image: 'https://th.bing.com/th/id/OIP.u-WMhEdVK8Djt3-3mB5x_AHaF7?w=234&h=186&c=7&r=0&o=5&pid=1.7',     
       customer: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        contact: '098-765-4321',
      },
      shippingDate: '2024-09-29',
      trackingLocation: { latitude: 37.78815, longitude: -122.4318 },
    },
    {
      id: 3,
      item: 'Product 3',
      quantity: 5,
      image : 'https://th.bing.com/th?q=Heavy+Duty+Canvas+Bag&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
      customer: {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        contact: '555-123-4567',
      },
      shippingDate: '2024-10-02',
      trackingLocation: { latitude: 37.78805, longitude: -122.4315 },
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      {shippedOrders.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Shipped Orders</Text>
        </View>
      ) : (
        shippedOrders.map(order => (
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
                <Text style={styles.cardText}>Shipping Date: <Text style={styles.cardValue}>{order.shippingDate}</Text></Text>

                <TouchableOpacity
                  style={styles.trackButton}
                  onPress={() => navigation.navigate('OrderTrackingScreen', { trackingLocation: order.trackingLocation })}
                >
                  <Text style={styles.trackButtonText}>Track Order</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <MapView
              style={styles.map}
              initialRegion={{
                latitude: order.trackingLocation.latitude,
                longitude: order.trackingLocation.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              <Marker
                coordinate={order.trackingLocation}
                title={`Order ${order.id} Location`}
              />
            </MapView> */}
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
    fontSize: 10,
    color: '#333',
  },
  cardValue: {
    fontWeight: 'bold',
    color: '#517fa4',
  },
  trackButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  trackButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
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
  map: {
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default ShippedOrdersScreen;
