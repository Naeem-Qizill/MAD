import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,TextInput,TouchableOpacity, Text, View } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.img}
            source={require('D:/MAD/assiignment2/Instagram_logo.svg.png')}/>
      <View style={styles.textbox}>
      <TextInput
          style={{
            height:"90%",
            width:"100%",
            borderRadius:4,
            borderWidth:1
          }}
          placeholder="Phone number, username, or email"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
  
        />
        </View>
      <View style={styles.textbox}>
      <TextInput
          style={{
            height:"90%",
            width:"100%",
            borderWidth:1,
            borderRadius:4
          }}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          
        />
      </View>
      <View style={styles.textbox}>
      <TouchableOpacity style={{
        backgroundColor:"#89CFF0",
         width:"100%",
         height:32,
        marginTop:10,
         
        borderRadius:4
         }}>
        <Text style={{color:"white",
        textAlign:"center",
        margin:5
      
      

      }}>Log In</Text>
      </TouchableOpacity>
        </View>
       <View style={{margin:15}}>
         <Text>OR</Text>
       </View>
      <Text style={{color:"blue",
    margin:10}}>Login with Facebook</Text>
    <Text>Forgot Password?</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:200,
    height:60,
    backgroundColor:'white',
    borderRadius:1,
    marginBottom:30,
  },
  textbox:
  {width:300,
    height:45,
    margin:1,
    
  }

  
 
  
 
  
});
