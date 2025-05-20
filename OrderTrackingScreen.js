import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const OrderTrackingScreen = ({ route }) => {
  const { trackingLocation } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Tracking</Text>
      <Text style={styles.infoText}>Your order is currently in transit.</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: trackingLocation.latitude,
          longitude: trackingLocation.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={trackingLocation}
          title="Current Location"
        />
      </MapView>

      <Button
        title="Back to Orders"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
  },
  map: {
    height: 300,
    borderRadius: 10,
  },
  backButton: {
    marginTop: 20,
  },
});

export default OrderTrackingScreen;
