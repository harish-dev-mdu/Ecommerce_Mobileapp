// import React from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useCart } from './CartContext'; // Import the useCart hook

// const products = [
//     { id: '1', name: 'Shirt', price: '₹19.99', discount: '20% off', offer: 'Buy 1 Get 1 Free', image: 'http://ts2.mm.bing.net/th?id=OIP.xDBgUX23MDEl8NYOJnpFbgAAAA&pid=15.1', category: 'men' },
//     { id: '2', name: 'Jeans', price: '₹39.99', discount: '10% off', offer: 'Free Shipping', image: 'https://th.bing.com/th/id/OIP.i9fOcRUSnqPL7a7MmvJSOgHaM1?w=184&h=320&c=7&r=0&o=5&pid=1.7', category: 'men' },
//     { id: '3', name: 'Jacket', price: '₹49.99', discount: '15% off', offer: 'Limited Time Offer', image: 'https://th.bing.com/th/id/OIP.9c7qLgDo7sqwJOwLcTQcJAHaIt?w=184&h=217&c=7&r=0&o=5&pid=1.7', category: 'men' },
//     { id: '4', name: 'Shorts', price: '₹29.99', discount: '25% off', offer: 'Seasonal Sale', image: 'http://ts1.mm.bing.net/th?id=OIP.NrwYL4tGUb-PY-9eT1ofMAAAAA&pid=15.1', category: 'men' },
//     { id: '5', name: 'T-shirt', price: '₹59.99', discount: 'Free Shipping', offer: 'Limited Stock', image: 'https://th.bing.com/th?q=Polo+TShirt&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247', category: 'men' },
//     { id: '6', name: 'Cap', price: '₹14.99', discount: '30% off', offer: 'Buy 2 Get 1 Free', image: 'https://th.bing.com/th/id/OIP.uYzkvMU1-F6q3Ei3nlJKjwHaJ4?w=133&h=180&c=7&r=0&o=5&pid=1.7', category: 'men' },
// ];

// const Men = ({ navigation }) => {
//     const { addToCart, removeFromCart, toggleWishlist, removeFromWishlist, wishlistItems, cartItems } = useCart();

//     const renderProduct = ({ item }) => {
//         const isInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === item.id);
//         const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

//         return (
            
//             <View style={styles.productCard}>
//                 <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { product: item })}>
//                     <Image source={{ uri: item.image }} style={styles.productImage} />
//                     <Text style={styles.productName}>{item.name}</Text>
//                     <Text style={styles.productPrice}>{item.price}</Text>
//                     <Text style={styles.productDiscount}>{item.discount}</Text>
//                     <Text style={styles.productOffer}>{item.offer}</Text>
//                 </TouchableOpacity>

//                 <View style={styles.iconContainer}>
//                     <TouchableOpacity onPress={() => {
//                         if (isInWishlist) {
//                             removeFromWishlist(item);
//                         } else {
//                             toggleWishlist(item);
//                         }
//                     }}>
//                         <Icon 
//                             name={isInWishlist ? "heart" : "heart-outline"} 
//                             size={24} 
//                             color={isInWishlist ? "red" : "#000"} 
//                         />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => {
//                         if (isInCart) {
//                             removeFromCart(item);
//                         } else {
//                             addToCart(item);
//                         }
//                     }}>
//                         <Icon 
//                             name={isInCart ? "cart" : "cart-outline"} 
//                             size={24} 
//                             color={isInCart ? "green" : "#000"} 
//                         />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={products}
//                 renderItem={renderProduct}
//                 keyExtractor={item => item.id}
//                 numColumns={2}
//                 contentContainerStyle={styles.productList}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#f9f9f9',
//         padding: 10,
//     },
//     productList: {
//         paddingBottom: 20,
//     },
//     productCard: {
//         flex: 1,
//         margin: 5,
//         padding: 10,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         borderRadius: 8,
//         elevation: 3,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//     },
//     productImage: {
//         width: 100,
//         height: 100,
//         marginBottom: 10,
//     },
//     productName: {
//         fontSize: 16,
//         color: '#333',
//         textAlign: 'center',
//     },
//     productPrice: {
//         fontSize: 14,
//         color: '#666',
//         textAlign: 'center',
//     },
//     productDiscount: {
//         fontSize: 12,
//         color: 'red',
//         textAlign: 'center',
//         marginTop: 4,
//     },
//     productOffer: {
//         fontSize: 12,
//         color: 'green',
//         textAlign: 'center',
//         marginTop: 2,
//     },
//     iconContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//         marginTop: 10,
//     },
// });

// export default Men;


import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCart } from './CartContext'; // Import the useCart hook

const products = [
    { id: '1', name: 'Shirt', price: '₹19.99', discount: '20% off', offer: 'Buy 1 Get 1 Free', image: 'http://ts2.mm.bing.net/th?id=OIP.xDBgUX23MDEl8NYOJnpFbgAAAA&pid=15.1', category: 'men' },
    { id: '2', name: 'Jeans', price: '₹39.99', discount: '10% off', offer: 'Free Shipping', image: 'https://th.bing.com/th/id/OIP.i9fOcRUSnqPL7a7MmvJSOgHaM1?w=184&h=320&c=7&r=0&o=5&pid=1.7', category: 'men' },
    { id: '3', name: 'Jacket', price: '₹49.99', discount: '15% off', offer: 'Limited Time Offer', image: 'https://th.bing.com/th/id/OIP.9c7qLgDo7sqwJOwLcTQcJAHaIt?w=184&h=217&c=7&r=0&o=5&pid=1.7', category: 'men' },
    { id: '4', name: 'Shorts', price: '₹29.99', discount: '25% off', offer: 'Seasonal Sale', image: 'http://ts1.mm.bing.net/th?id=OIP.NrwYL4tGUb-PY-9eT1ofMAAAAA&pid=15.1', category: 'men' },
    { id: '5', name: 'T-shirt', price: '₹59.99', discount: 'Free Ship', offer: 'Limited Stock', image: 'https://th.bing.com/th?q=Polo+TShirt&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247', category: 'men' },
    { id: '6', name: 'Cap', price: '₹14.99', discount: '30% off', offer: 'Buy 2 Get 1 Free', image: 'https://th.bing.com/th/id/OIP.uYzkvMU1-F6q3Ei3nlJKjwHaJ4?w=133&h=180&c=7&r=0&o=5&pid=1.7', category: 'men' },
];






const Men = ({ navigation }) => {
    const { addToCart, removeFromCart, toggleWishlist, removeFromWishlist, wishlistItems, cartItems } = useCart();

    const renderProduct = ({ item }) => {
        const isInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === item.id);
        const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

        return (
            // <View style={styles.productCard}>
            //     <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { product: item })}>
            //         <Image source={{ uri: item.image }} style={styles.productImage} />
            //         <Text style={styles.productName}>{item.name}</Text>
            //         <Text style={styles.productPrice}>{item.price}</Text>
            //         <Text style={styles.productDiscount}>{item.discount}</Text>
            //         <Text style={styles.productOffer}>{item.offer}</Text>
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
        <ImageBackground 
            source={{ uri: 'https://cdn.dribbble.com/users/11040/screenshots/938040/bg.png' }} // Replace with your image URL
            style={styles.background}
            resizeMode="cover" // Adjust as needed
        >
            <View style={styles.container}>
           
                <FlatList
                    data={products}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.productList} />
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
        </ImageBackground>
       
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(249, 249, 249, 0.8)', // Optional: semi-transparent background for better readability
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
    productDiscount: {
        fontSize: 12,
        color: 'red',
        textAlign: 'center',
        marginTop: 4,
    },
    productOffer: {
        fontSize: 12,
        color: 'green',
        textAlign: 'center',
        marginTop: 2,
    },
    badge: {
        position:'absolute',
        top: 9,  // Adjust as needed
        left: 4, // Adjust as needed
        backgroundColor: 'orange',
        borderRadius: 12,  // Half of the width/height for a circle
        width: 36,  // Set a fixed width
        height: 32, // Set a fixed height (same as width)
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
    },
    badgeText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
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
      cartBadge: {
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
      cartBadgeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
      },
});

export default Men;
