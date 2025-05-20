import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useCart } from './CartContext'; // Import the useCart hook

const CartScreen = () => {
    const { cartItems, removeFromCart, updateItemQuantity } = useCart();

    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('₹', '')); // Convert price to number
        return total + (price * item.quantity); // Multiply by quantity
    }, 0).toFixed(2); // Keep two decimal places

    const renderCartItem = ({ item }) => {
        return (
            <View style={styles.cartItem}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>Price: {item.price}</Text>
                    <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
                </View>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                        <Text style={styles.quantityButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => updateItemQuantity(item.id, item.quantity + 1)}>
                        <Text style={styles.quantityButton}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(item)}>
                    <Text style={styles.removeButton}>Remove</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {cartItems.length === 0 ? (
                <Text style={styles.emptyMessage}>Your cart is empty!</Text>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        renderItem={renderCartItem}
                        keyExtractor={item => item.id}
                    />
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total: ₹{totalAmount}</Text>
                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={styles.buyButtonText}>Buy</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 2,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
    },
    productName: {
        fontSize: 16,
        color: '#333',
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
    },
    productQuantity: {
        fontSize: 14,
        color: '#666',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Center the buttons and quantity text
        marginHorizontal: 7, // Reduce horizontal margin
    },
    quantityButton: {
        padding: 7, // Reduce padding for buttons
        backgroundColor: '#007BFF',
        color: '#fff',
        borderRadius: 5,
        marginHorizontal: 9, // Reduce space between buttons
    },
    quantityText: {
        fontSize: 16,
        marginHorizontal: 5, // Reduce space around quantity text
    },
    removeButton: {
        color: 'red',
        fontWeight: 'bold',
    },
    emptyMessage: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 2,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    buyButton: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#007BFF',
        borderRadius: 9,
        width: 120,
        alignItems: 'center',
    },
    buyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default CartScreen;
