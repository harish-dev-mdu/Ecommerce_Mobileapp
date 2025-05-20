import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure to install this package
import { useCart } from './CartContext'; // Import the CartContext

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useCart(); // Destructure addToCart from context
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0); // Initialize rating state

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity,
    };
    
    addToCart(cartItem); // Add the item to cart
    alert(`Added ${quantity} ${product.name} to cart.`);
  };

  const handleBuyNow = () => {
    alert(`Buying ${quantity} ${product.name} now.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>

        <View style={styles.quantityContainer}>
          <Button title="-" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
          <Text style={styles.quantityText}>{quantity}</Text>
          <Button title="+" onPress={() => setQuantity(quantity + 1)} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.additionalInfo}>
          <Text style={styles.infoTitle}>Product Details:</Text>
          <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>

        {/* Star Rating Section */}
        <View style={styles.ratingContainer}>
          <Text style={styles.infoTitle}>Rate this product:</Text>
          <View style={styles.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <FontAwesome 
                  name={star <= rating ? "star" : "star-o"} 
                  size={24} 
                  color={star <= rating ? "#FFD700" : "#ccc"} // Gold for filled stars, gray for empty
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.ratingText}>{rating} out of 5</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5', // Light gray background for better contrast
  },
  imageContainer: {
    backgroundColor: '#e0f7fa', // Mild color for the image background
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  detailsContainer: {
    backgroundColor: '#fff', // Background color for the details section
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30, // Overlap the image slightly
    elevation: 5, // Shadow effect
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Darker text for better readability
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginRight: 5,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buyNowButton: {
    backgroundColor: '#ff5722', // Change to a contrasting color for Buy Now
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
  },
  buyNowText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  additionalInfo: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
  },
  ratingContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  ratingText: {
    fontSize: 16,
    color: '#555',
  },
});

export default ProductDetailScreen;
