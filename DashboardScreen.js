import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, Modal, TouchableOpacity } from 'react-native';
import { Header, Button, Card, Icon, SearchBar, ButtonGroup } from 'react-native-elements';
import { LineChart } from 'react-native-chart-kit';

const DashboardScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isNotificationsVisible, setNotificationsVisible] = useState(false);
  
  const handleSearch = (value) => setSearch(value);

  const filterOrders = (index) => {
    setSelectedStatus(index);
    const routes = [ 'PendingOrdersScreen', 'ShippedOrdersScreen', 'CompletedOrdersScreen'];
    navigation.navigate(routes[index]);
  };

  const toggleModal = () => setModalVisible(!isModalVisible);
  const closeModalAndNavigate = (page) => {
    toggleModal();
    navigation.navigate(page);
  };
  
  const toggleNotifications = () => setNotificationsVisible(!isNotificationsVisible);

  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{ data: [15000, 22000, 18000, 25000, 30000, 35000] }],
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        centerComponent={{ text: 'Customer Dashboard', style: styles.headerText }}
        rightComponent={
          <Icon
            name='logout'
            type='material-community'
            color='#fff'
            onPress={() => navigation.navigate('HomeScreen')}
          />
        }
        containerStyle={styles.header}
      />
      
      <SearchBar
        placeholder="Search Orders..."
        onChangeText={handleSearch}
        value={search}
        lightTheme
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
      />
      
      <ButtonGroup
        buttons={[ 'Pending', 'Shipped', 'Completed']}
        selectedIndex={selectedStatus}
        onPress={filterOrders}
        containerStyle={styles.filterButtonGroup}
      />
      
      {/* Summary Stats */}
      <Card containerStyle={styles.card}>
        <Card.Title>Orders Summary</Card.Title>
        <Card.Divider />
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>Total Orders: <Text style={styles.cardValue}>3</Text></Text>
          <Text style={styles.cardText}>Pending Orders: <Text style={styles.cardValue}>3</Text></Text>
          <Text style={styles.cardText}>Shipped Orders: <Text style={styles.cardValue}>8</Text></Text>
          <Text style={styles.cardText}>Completed Orders: <Text style={styles.cardValue}>3</Text></Text>
        </View>
      </Card>
      
      {/* Sales Overview */}
      <Card containerStyle={styles.card}>
        <Card.Title>Sales Overview</Card.Title>
        <Card.Divider />
        <LineChart
          data={chartData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#517fa4',
            backgroundGradientTo: '#517fa4',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: { borderRadius: 16 },
          }}
          style={styles.chart}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>Total Sales: <Text style={styles.cardValue}>$12,400</Text></Text>
        </View>
      </Card>
      
      {/* Notifications */}
      <Card containerStyle={styles.card}>
        <Card.Title>Notifications</Card.Title>
        <Card.Divider />
        <TouchableOpacity onPress={toggleNotifications}>
          <Text style={styles.cardText}>
            {isNotificationsVisible ? 'Hide Notifications' : 'Show Notifications'}
          </Text>
        </TouchableOpacity>
        {isNotificationsVisible && (
          <View style={styles.notificationsList}>
            <Text style={styles.cardText}>New Order Received</Text>
            <Text style={styles.cardText}>Stock Running Low</Text>
            <Text style={styles.cardText}>Customer Feedback Received</Text>
          </View>
        )}
      </Card>

      {/* Customer Support */}
      <Card containerStyle={styles.card}>
        <Card.Title>Customer Support</Card.Title>
        <Card.Divider />
        <Button title="Support Chat" onPress={() => navigation.navigate('CustomerSupportChatScreen')} buttonStyle={styles.manageButton} />
      </Card>

      {/* Modal for Order Management */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Order Status</Text>
            <Button title="Pending Orders" onPress={() => closeModalAndNavigate('PendingOrdersScreen')} buttonStyle={styles.modalButton} />
            <Button title="Shipped Orders" onPress={() => closeModalAndNavigate('ShippedOrdersScreen')} buttonStyle={styles.modalButton} />
            <Button title="Completed Orders" onPress={() => closeModalAndNavigate('CompletedOrdersScreen')} buttonStyle={styles.modalButton} />
            <Button title="Close" onPress={toggleModal} buttonStyle={styles.closeButton} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#517fa4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBar: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
  },
  searchBarInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  filterButtonGroup: {
    marginBottom: 20,
    borderRadius: 10,
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
    flexDirection: 'column',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  cardValue: {
    fontWeight: 'bold',
    color: '#517fa4',
  },
  notificationsList: {
    marginTop: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  chart: {
    borderRadius: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#517fa4',
    borderRadius: 5,
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default DashboardScreen;
