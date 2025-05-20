import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCart } from './CartContext'; // Import the useCart hook

const products = [
    { id: '1', name: 'Laptop', price: '₹19.99', discount: '15% off', offer: 'Limited Time Offer',image: 'https://th.bing.com/th/id/OIP.S0KxjC9Rba7rMJWM7zZO8gHaFO?w=263&h=186&c=7&r=0&o=5&pid=1.7', category: 'Laptop' },
    { id: '2', name: 'Laptop', price: '₹39.99',discount: '30% off', offer: 'Buy 2 Get 1 Free', image: 'https://th.bing.com/th/id/OIP.8dONY82usxXQzZHJ_OgwfQHaFR?w=255&h=181&c=7&r=0&o=5&pid=1.7', category: 'Laptop' },
    { id: '3', name: 'Laptop', price: '₹49.99',discount: '15% off', offer: 'Limited Time Offer' ,image: 'https://th.bing.com/th/id/OIP.LtWByu1arehvM0oTsvo4aQHaFM?w=190&h=180&c=7&r=0&o=5&pid=1.7', category: 'Laptop' },
    { id: '4', name: 'Laptop', price: '₹29.99', discount: '30% off', offer: 'Buy 2 Get 1 Free',image: 'https://th.bing.com/th/id/OIP.upD1uD46mQmFBQsRSzm86wHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7', category: 'Laptop' },
    { id: '5', name: 'Laptop', price: '₹59.99', discount: '15% off', offer: 'Limited Time Offer',image: 'https://th.bing.com/th/id/OIP.rquJBH2dsXegikTHzCBbGQHaEA?w=285&h=180&c=7&r=0&o=5&pid=1.7', category: 'Laptop' },
    { id: '6', name: 'Laptop', price: '₹14.99',discount: '25% off', offer: 'Seasonal Sale', image: 'https://th.bing.com/th/id/OIP.u-WMhEdVK8Djt3-3mB5x_AHaF7?w=234&h=186&c=7&r=0&o=5&pid=1.7', category: 'Laptop' },
];




const Laptop = ({ navigation }) => {
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
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
});

export default Laptop;
