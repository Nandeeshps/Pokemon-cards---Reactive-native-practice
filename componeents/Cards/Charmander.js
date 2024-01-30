import { Text, View, Image, StyleSheet } from "react-native";
import charmander from '../../assets/Pokemons/charmander.png';

function Charmander(){
    return(
        <View style={styles.box}>
<View style={styles.top}>
        <Text style={{fontSize: 25,fontWeight: "bold",margin:5}}>
            Charmander
        </Text>

<Text style={{fontSize: 25,margin:5}}>
    HP: 39
</Text>

</View>
<Image source={charmander} style={styles.img}/>

<Text>
    Moves:  Ember, Flame Wheel, Dragon Claw, Outrage. 
    Weakness: Water, Rock
</Text>
        </View>
    )
}

const styles = StyleSheet.create({
box:{
    display:"flex",
    flexDirection:"column",
    borderWidth: 2,      
    justifyContent: 'center' ,  
    alignItems: 'center',        
    width: 250,
    height: 350,
    borderColor: 'black',
    margin: 10, 
    borderRadius: 10,
},
top:{
    display: "flex",
    flexDirection:"row",
    alignItems: 'top',
    justifyContent: "space-between",
    fontSize:20,
    color:"#7FDBFF",
},
img:{
    width:200,
    height:200,
    objectFit: "fill",
}
})

export default Charmander