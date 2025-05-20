import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCart } from './CartContext'; // Import the useCart hook

const products = [
    { id: '1', name: 'shoe', price: '₹19.99', discount: '20% off', offer: 'Buy 1 Get 1 Free',  image: 'https://th.bing.com/th/id/OIP.sA1OOol-g-ZWP5aSQEYNXwAAAA?w=257&h=180&c=7&r=0&o=5&pid=1.7://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9ziHZfu5wgLS3clYr19lxFMW8fJJASoB5g&s', category: 'Shoes' },
    { id: '2', name: 'shoe', price: '₹39.99',  discount: '10% off', offer: 'Limited Stock',image: 'https://th.bing.com/th/id/OIP.yKFIP4BkzsW9CAGHz6p5pwHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7', category: 'Shoes' },
    { id: '3', name: 'shoe', price: '₹49.99',  discount: '20% off', offer: 'Buy 1 Get 1 Free', image: 'https://th.bing.com/th/id/OIP.JHLWM9Gy15uaaAsg8-LFygHaFj?w=250&h=187&c=7&r=0&o=5&pid=1.7', category: 'Shoes' },
    { id: '4', name: 'shoe', price: '₹29.99',  discount: '10% off', offer: 'Limited Stock',image: 'https://th.bing.com/th/id/OIP.87m6vDUac28PPaGhzvHBvgHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7', category: 'Shoes' },
    { id: '5', name: 'shoe', price: '₹59.99',  discount: '20% off', offer: 'Buy 1 Get 1 Free', image: 'https://th.bing.com/th/id/OIP.vUEtb_7EDqh_7ZyNKc7zFQAAAA?w=174&h=180&c=7&r=0&o=5&pid=1.7', category: 'Shoes' },
    { id: '6', name: 'shoe', price: '₹14.99', discount: '10% off', offer: 'Limited Stock', image: 'https://th.bing.com/th/id/OIP.HLq4zcQVoU2J4-Ge5erl1gHaFN?w=249&h=180&c=7&r=0&o=5&pid=1.7', category: 'Shoes' },
];

const Shoes = ({ navigation }) => {
    const { addToCart, removeFromCart, toggleWishlist, removeFromWishlist, wishlistItems, cartItems } = useCart();

    const renderProduct = ({ item }) => {
        const isInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === item.id);
        const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

        return (
            // <View style={styles.productCard}>
            //     <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreens', { product: item })}>
            //         <Image source={{ uri: item.image }} style={styles.productImage} />
            //         <Text style={styles.productName}>{item.name}</Text>
            //         <Text style={styles.productPrice}>{item.price}</Text>
            //     </TouchableOpacity>
            <View style={styles.productCard}>
            {/* Discount Badge */}
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.discount}</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { product: item })}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <Text style={styles.productOffer}>{item.offer}</Text>
            </TouchableOpacity>
            

                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => {
                        if (isInWishlist) {
                            removeFromWishlist(item);
                        } else {
                            toggleWishlist(item);
                        }
                    }}>
                        <Icon 
                            name={isInWishlist ? "heart" : "heart-outline"} 
                            size={24} 
                            color={isInWishlist ? "red" : "#000"} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (isInCart) {
                            removeFromCart(item);
                        } else {
                            addToCart(item);
                        }
                    }}>
                        <Icon 
                            name={isInCart ? "cart" : "cart-outline"} 
                            size={24} 
                            color={isInCart ? "green" : "#000"} 
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.productList}
            />
            <View style={styles.bottomNavbar}>
                     <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('ProfileScreen')}>
            <Icon name="person-outline" size={40} color="#000" />
            <Text style={styles.bottomNavText}>Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.bottomNavItem}onPress={() => navigation.navigate('DashboardScreen')}>
            <Icon name="person-outline" size={40} color="#000" />
            <Text style={styles.bottomNavText}>Customer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('CartScreen')}>
            <Icon name="cart-outline" size={40} color="#000" />
            <Text style={styles.bottomNavText}>Cart</Text>
            {cartItems.length > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
              </View>
            )}
          </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('WishlistScreen')}>
                    <Icon name="heart-outline" size={40} color="#000" />
                    <Text style={styles.bottomNavText}>Wishlist</Text> 
                  </TouchableOpacity>
                  </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 10,
    },
    productList: {
        paddingBottom: 20,
    },
    productCard: {
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    productImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    productName: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
    bottomNavbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#fff',
        elevation: 4,
      },
      bottomNavItem: {
        alignItems: 'center',
      },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    badge: {
        position: 'absolute',
        top: 5,  // Adjust as needed
        left: 5, // Adjust as needed
        backgroundColor: 'orange',
        borderRadius: 12,  // Half of the width/height for a circle
        width: 28,  // Set a fixed width
        height: 24, // Set a fixed height (same as width)
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },

    badgeText: {
        color: '#fff',
        fontSize: 10,
        textAlign: 'center',
    },
});

export default Shoes;
