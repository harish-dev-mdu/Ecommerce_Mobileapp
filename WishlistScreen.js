import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useCart } from './CartContext'; // Import the useCart hook

const WishlistScreen = () => {
    const { wishlistItems, toggleWishlist } = useCart();

    const renderWishlistItem = ({ item }) => {
        return (
            <View style={styles.wishlistItem}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                </View>
                <TouchableOpacity onPress={() => toggleWishlist(item)}>
                    <Text style={styles.removeButton}>Remove from Wishlist</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {wishlistItems.length === 0 ? (
                <Text style={styles.emptyMessage}>Your wishlist is empty!</Text>
            ) : (
                <FlatList
                    data={wishlistItems}
                    renderItem={renderWishlistItem}
                    keyExtractor={item => item.id}
                />
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
    wishlistItem: {
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
    removeButton: {
        color: 'red',
        fontWeight: 'bold',
    },
    emptyMessage: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    },
});

export default WishlistScreen;
