import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from './CartContext'; // Import the useCart hook

const Header = ({ navigation }) => {
    const { cartItems } = useCart();

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                <View style={styles.cartIcon}>
                    <Text style={styles.cartText}>🛒</Text>
                    {cartItems.length > 0 && (
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{cartItems.length}</Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
            <Text style={styles.title}>Shop</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 5,
    },
    cartIcon: {
        position: 'relative',
    },
    cartText: {
        fontSize: 24,
    },
    badge: {
        position: 'absolute',
        right: -10,
        top: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Header;
