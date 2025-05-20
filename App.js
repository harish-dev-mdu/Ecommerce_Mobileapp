import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './CartContext'; // Import your CartProvider
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import WishlistScreen from './WishlistScreen';
import ProfileScreen from './ProfileScreen';
import Men from './Men';
import ProductDetailScreen from './ProductDetailScreen';
import ProductDetailScreens from './ProductDetailScreens';
import DashboardScreen from './DashboardScreen';
import OrdersScreen from './OrdersScreen';
import PendingOrdersScreen from './PendingOrdersScreen';
import CompletedOrdersScreen from './CompletedOrdersScreen';
import ManageInventoryScreen from './ManageInventoryScreen';
import CustomerSupportChatScreen from './CustomerSupportChatScreen';
import Women from './Women';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import Shoes from './Shoes';
import Makeupkit from './Makeupkit';
import Laptop from './Laptop';
import Watches from './Watches';
import Bags from './Bags';
import TaskList from './TaskList';

import ShippedOrdersScreen from './ShippedOrdersScreen';
import OrderTrackingScreen from './OrderTrackingScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignupScreen">
                    <Stack.Screen name="SignupScreen" component={SignupScreen} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="CartScreen" component={CartScreen} />
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                    <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
                    <Stack.Screen name="Men" component={Men} />
                    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                    <Stack.Screen name="Women" component={Women} />
                    <Stack.Screen name="Shoes" component={Shoes} />
                    <Stack.Screen name="Makeupkit" component={Makeupkit} />
                    <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
                    <Stack.Screen name="ProductDetailScreens" component={ProductDetailScreens} />
                    <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
                    <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
                    <Stack.Screen name="PendingOrdersScreen" component={PendingOrdersScreen} />
                    <Stack.Screen name="CompletedOrdersScreen" component={CompletedOrdersScreen} />
                    <Stack.Screen name="ManageInventoryScreen" component={ManageInventoryScreen} />
                    <Stack.Screen name="CustomerSupportChatScreen" component={CustomerSupportChatScreen} />

                    <Stack.Screen name="Bags" component={Bags} />
                    <Stack.Screen name="Watches" component={Watches} />
                    <Stack.Screen name="Laptop" component={Laptop} />
                    <Stack.Screen name="TaskList" component={TaskList} />
                    <Stack.Screen name="ShippedOrdersScreen" component={ShippedOrdersScreen} />
                    <Stack.Screen name="OrderTrackingScreen" component={OrderTrackingScreen} />

                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}
