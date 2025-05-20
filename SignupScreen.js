// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Animated } from 'react-native';

// export default function SignupScreen({ navigation }) {
//   // const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const opacity = useRef(new Animated.Value(0)).current; // Initial opacity set to 0

//   useEffect(() => {
//     // Animate to full opacity
//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();
//   }, [opacity]);

//   const handleSignUp = () => {
//     navigation.navigate('SignupPage'); // Navigate to SignupPage
//   };

//   const handleForgotPassword = () => {
//     navigation.navigate('ForgotPasswordScreen');
//   };
  
//   const handleSignIn = () => {
//     navigation.navigate('HomeScreen');
//   };

//   return (
//     <Animated.View style={[styles.container, { opacity }]}>
//       <Text style={styles.title}>Welcome!</Text>
//       <Text style={styles.subtitle}>Sign in to Continue</Text>

//       {/* <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       /> */}
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry={true}
//       />

//       <Button title="Sign In" color="mediumturquoise" onPress={handleSignIn} />

//       <TouchableOpacity onPress={handleForgotPassword}>
//         <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={handleSignUp}>
//         <Text style={styles.signInLink}>Don't have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#f9f9f9',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 15,
//     fontSize: 16,
//   },
//   forgotPasswordLink: {
//     marginTop: 10,
//     fontSize: 14,
//     color: '#007bff',
//     textAlign: 'center',
//   },
//   signInLink: {
//     marginTop: 20,
//     fontSize: 14,
//     color: '#28a745',
//     textAlign: 'center',
//   },
// });


import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Animated, ImageBackground } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const opacity = useRef(new Animated.Value(0)).current; // Initial opacity set to 0

  useEffect(() => {
    // Animate to full opacity
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  const handleSignUp = () => {
    navigation.navigate('SignupPage'); // Navigate to SignupPage
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };
  
  const handleSignIn = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://th.bing.com/th/id/R.a229948411db0521ac6c8cc3fa9c2c7a?rik=wWHp2%2fUTxH2DvA&riu=http%3a%2f%2fwww.pulverlackshop.net%2fimages%2fproduct_images%2foriginal_images%2fral5012lichtblau.jpg&ehk=iyw3WY4JVvjaJZa7kM%2fQBzKVshL92HKJct0AwghIAaI%3d&risl=&pid=ImgRaw&r=0' }} // Replace with your image URL
      style={styles.background}
      resizeMode="cover" // or "stretch" based on your requirement
    >

     {/* <ImageBackground 
      source={{ uri: 'https://www.color-hex.com/palettes/1015248.png' }} // Replace with your image URL
       style={styles.background}
       resizeMode="cover" // or "stretch" based on your requirement
     > */}

    {/* <ImageBackground 
      source={{ uri: 'https://th.bing.com/th/id/OIP.zgtgrBGxgOwIxbLHNiRHMwHaE2?rs=1&pid=ImgDetMain' }} // Replace with your image URL
       style={styles.background}
       resizeMode="cover" // or "stretch" based on your requirement
     > */}
      <Animated.View style={[styles.container, { opacity }]}>
        <Text style={styles.subtitle}>USER SIGN</Text>
        <Text style={styles.subtitle}></Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Button title="Sign In" color="lightskyblue" onPress={handleSignIn}>
        
        </Button>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signInLink}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(249, 249, 249, 0.8)', // Semi-transparent background for readability
    borderRadius: 12, // Optional: add some rounded corners
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 26,
    color: '#666',
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    height:60,
    width:260,
    borderRadius: 12,
    marginBottom: 25,
    fontSize: 20,
  },
  forgotPasswordLink: {
    marginTop: 10,
    fontSize: 18,
    color: '#007bff',
    textAlign: 'center',
  },
  signInLink: {
    marginTop: 20,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  SignIn: {
    fontSize:30,
  }
});
