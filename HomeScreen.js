// import React, { useState } from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useCart } from './CartContext';

// const products = [
//   { id: '7', name: 'Shirt', price: '₹19.99', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9ziHZfu5wgLS3clYr19lxFMW8fJJASoB5g&s', category: 'men' },
//   { id: '8', name: 'Women Dress', price: '₹19.99', image: 'https://th.bing.com/th/id/OIP.YPVzNBMeNiSff3uxRoJx_QHaRQ?w=150&h=350&c=7&r=0&o=5&pid=1.7', category: 'Women' },
//   { id: '9', name: 'Shoe', price: '₹19.99', image: 'https://th.bing.com/th/id/OIP.mzlM3eHqst5W3RjvSlAwVQHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7', category: 'Shoes' },
//   { id: '10', name: 'Wrist Watch', price: '₹19.99', image: 'https://th.bing.com/th?q=World%27s+Most+Expensive+Watches&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247', category: 'Watches' },
//   { id: '11', name: 'Handbag', price: '₹19.99', image: 'https://th.bing.com/th/id/OIP.r0E1GJYjbZOb8sW339EoJQHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7', category: 'Bags' },
//   { id: '12', name: 'Makeupkit', price: '₹19.99', image: 'https://th.bing.com/th/id/OIP.cC6BIDMCXADtiNZZ7UGRngHaJt?w=137&h=180&c=7&r=0&o=5&pid=1.7', category: 'Makeupkit' },
// ];

// const HomeScreen = ({ navigation }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const { cartItems, addToCart, removeFromCart, wishlistItems, toggleWishlist, removeFromWishlist } = useCart();

//   const renderProduct = ({ item }) => {
//     const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
//     const isInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === item.id);

//     return (
//       <View style={styles.productCard}>
//         <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { product: item })}>
//           <Image source={{ uri: item.image }} style={styles.productImage} />
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>{item.price}</Text>
//         </TouchableOpacity>

//         <View style={styles.iconContainer}>
//           <TouchableOpacity onPress={() => {
//             if (isInWishlist) {
//               removeFromWishlist(item);
//             } else {
//               toggleWishlist(item);
//             }
//           }}>
//             <Icon 
//               name={isInWishlist ? "heart" : "heart-outline"} 
//               size={24} 
//               color={isInWishlist ? "red" : "#000"} 
//             />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => {
//             if (isInCart) {
//               removeFromCart(item);
//             } else {
//               addToCart(item);
//             }
//           }}>
//             <Icon 
//               name={isInCart ? "cart" : "cart-outline"} 
//               size={24} 
//               color={isInCart ? "green" : "#000"} 
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.searchBar}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search products..."
//           value={searchTerm}
//           onChangeText={setSearchTerm}
//         />
//         <TouchableOpacity>
//           <Icon name="search-outline" size={30} color="#000" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.navbar}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Men')}>
//             <Icon name="man-outline" size={30} color="#000" />
//             <Text style={styles.navText}>Men</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Women')}>
//             <Icon name="woman-outline" size={30} color="#000" />
//             <Text style={styles.navText}>Women</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Shoes')}>
//             <Icon name="footsteps-outline" size={30} color="#000" />
//             <Text style={styles.navText}>Shoes</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Makeupkit')}>
//             <Icon name="color-palette-outline" size={30} color="#000" />
//             <Text style={styles.navText}>Makeupkit</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Laptop')}>
//             <Icon name="laptop-outline" size={30} color="#000" />
//             <Text style={styles.navText}>Laptop</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Watches')}>
//             <Icon name="watch-outline" size={30} color="#000" />
//             <Text style={styles.navText}>Watches</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Bags')}>
//             <Icon name="bag-handle-outline" size={30} color="#000" />
//             <Text style={styles.navText}>Bags</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>

//       <FlatList
//         data={products}
//         renderItem={renderProduct}
//         keyExtractor={item => item.id}
//         numColumns={2}
//         contentContainerStyle={styles.productList}
//       />

//       <View style={styles.bottomNavbar}>
//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('ProfileScreen')}>
//           <Icon name="person-outline" size={30} color="#000" />
//           <Text style={styles.bottomNavText}>Profile</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('OrderDetailsScreen', { orderId: item.id })}>
//           <Icon name="person-outline" size={30} color="#000" />
//           <Text style={styles.bottomNavText}>Customer</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('CartScreen')}>
//           <Icon name="cart-outline" size={30} color="#000" />
//           <Text style={styles.bottomNavText}>Cart</Text>
//           {cartItems.length > 0 && (
//             <View style={styles.cartBadge}>
//               <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.bottomNavItem} onPress={() => navigation.navigate('WishlistScreen')}>
//           <Icon name="heart-outline" size={30} color="#000" />
//           <Text style={styles.bottomNavText}>Wishlist</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f9f9',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#fff',
//     elevation: 4,
//     marginBottom: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   navbar: {
//     paddingVertical: 15,
//     backgroundColor: '#fff',
//     elevation: 4,
//   },
//   navItem: {
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#333',
//   },
//   productList: {
//     padding: 10,
//     flexGrow: 1,
//   },
//   productCard: {
//     flex: 1,
//     margin: 5,
//     padding: 10,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     borderRadius: 8,
//     elevation: 3,
//   },
//   productImage: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//   },
//   productName: {
//     fontSize: 16,
//     color: '#333',
//     textAlign: 'center',
//   },
//   productPrice: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 10,
//     width: '100%',
//   },
//   bottomNavbar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//     elevation: 4,
//   },
//   bottomNavItem: {
//     alignItems: 'center',
//   },
//   bottomNavText: {
//     fontSize: 12,
//     color: '#333',
//   },
//   cartIconContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative', // Set position relative to allow badge positioning
//   },
//   cartBadge: {
//     position: 'absolute',
//     right: -10, // Adjust right position
//     top: -10, // Adjust top position
//     backgroundColor: 'red',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartBadgeText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
// });


// export default HomeScreen;



import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCart } from './CartContext';

const products = [
  { id: '7', name: 'Shirt', price: '₹19.99',discount: '20% off', offer: 'Buy 1 Get 1 Free', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9ziHZfu5wgLS3clYr19lxFMW8fJJASoB5g&s', category: 'men' },
  { id: '8', name: 'Women Dress', price: '₹19.99', discount: '10% off', offer: 'Free Shipping', image: 'https://th.bing.com/th/id/OIP.YPVzNBMeNiSff3uxRoJx_QHaRQ?w=150&h=350&c=7&r=0&o=5&pid=1.7', category: 'Women' },
  { id: '9', name: 'Shoe', price: '₹19.99',discount: '15% off', offer: 'Limited Time Offer', image: 'https://th.bing.com/th/id/OIP.mzlM3eHqst5W3RjvSlAwVQHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7', category: 'Shoes' },
  { id: '10', name: 'Wrist Watch', price: '₹19.99',discount: '25% off', offer: 'Seasonal Sale', image: 'https://th.bing.com/th?q=World%27s+Most+Expensive+Watches&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247', category: 'Watches' },
  { id: '11', name: 'Handbag', price: '₹19.99', discount: 'Free Ship', offer: 'Limited Stock', image: 'https://th.bing.com/th/id/OIP.r0E1GJYjbZOb8sW339EoJQHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7', category: 'Bags' },
  { id: '12', name: 'Makeupkit', price: '₹19.99',  discount: '30% off', offer: 'Buy 2 Get 1 Free',image: 'https://th.bing.com/th/id/OIP.cC6BIDMCXADtiNZZ7UGRngHaJt?w=137&h=180&c=7&r=0&o=5&pid=1.7', category: 'Makeupkit' },
];

const HomeScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cartItems, addToCart, removeFromCart, wishlistItems, toggleWishlist, removeFromWishlist } = useCart();

  const renderProduct = ({ item }) => {
    const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
    const isInWishlist = wishlistItems.some(wishlistItem => wishlistItem.id === item.id);

    return (
      // <View style={styles.productCard}>
      //   <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', { product: item })}>
      //     <Image source={{ uri: item.image }} style={styles.productImage} />
      //     <Text style={styles.productName}>{item.name}</Text>
      //     <Text style={styles.productPrice}>{item.price}</Text>
      //   </TouchableOpacity>

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
      source={{ uri: 'https://th.bing.com/th/id/OIP.pzhwKxvjy1HRSrZJZxQ8twHaE7?rs=1&pid=ImgDetMain' }} // Replace with your image URL
      style={styles.background}
      resizeMode="cover" // Adjust as needed
    >
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          <TouchableOpacity>
            <Icon name="search-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.navbar}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Men')}>
              <Icon name="man-outline" size={30} color="#000" />
              <Text style={styles.navText}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Women')}>
              <Icon name="woman-outline" size={30} color="#000" />
              <Text style={styles.navText}>Women</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Shoes')}>
              <Icon name="footsteps-outline" size={30} color="#000" />
              <Text style={styles.navText}>Shoes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Makeupkit')}>
              <Icon name="color-palette-outline" size={30} color="#000" />
              <Text style={styles.navText}>Makeupkit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Laptop')}>
              <Icon name="laptop-outline" size={30} color="#000" />
              <Text style={styles.navText}>Laptop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Watches')}>
              <Icon name="watch-outline" size={30} color="#000" />
              <Text style={styles.navText}>Watches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Bags')}>
              <Icon name="bag-handle-outline" size={30} color="#000" />
              <Text style={styles.navText}>Bags</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

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
            {/* {cartItems.length > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartItems.length}</Text>
              </View>
            )} */}
            
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
    backgroundColor: 'white', // Optional: add transparency for a better background effect
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    elevation: 4,
    marginBottom: 0,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  searchInput: {
    flex: 1,
    height: 60,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 29,
  
  },
  navbar: {
    paddingVertical: 18,
    backgroundColor: 'white',
    elevation: 4,
  },
  navItem: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  navText: {
    fontSize: 16,
    color: '#333',
  },
  productList: {
    padding: 6,
    paddingTop:12,
    flexGrow: 1,
  },
  productCard: {
    flex: 1,
    margin: 5,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
  },
  productImage: {
    width: 120,
    height: 250,
    marginBottom: 0,
  },
  productName: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 19,
    width: '100%',
  },
  badge: {
    position:'absolute',
    top: 9,  // Adjust as needed
    left: 4, // Adjust as needed
    backgroundColor: 'orange',
    borderRadius: 12,  // Half of the width/height for a circle
    width: 30,  // Set a fixed width
    height: 28, // Set a fixed height (same as width)
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
},
badgeText: {
    color: '#fff',
    fontSize: 12,
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
  bottomNavText: {
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
  bottomNavText: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
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

export default HomeScreen;
