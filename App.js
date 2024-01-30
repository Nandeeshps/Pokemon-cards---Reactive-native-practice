import { View,StyleSheet,SafeAreaView,Text,Image,ScrollView,Button,Pressable, ActivityIndicator, Alert } from "react-native";
import Charmander from './componeents/Cards/Charmander';
import Squirtle from "./componeents/Cards/Squirtle";
import Bulbasaur from "./componeents/Cards/Bulbasaur";

function App(){
  return(
    <SafeAreaView style={styles.SafeAreaView}>
    <ScrollView style={styles.scroll}>
     <Charmander/>
<Squirtle/>
   <Bulbasaur/>

    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView:{
    flex: 1,
    paddingTop: 40,
    paddingBottom:40,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
  },
  scroll:{
  }
})

export default App