import { Text, View, Image, StyleSheet } from "react-native";
import squirtle from '../../assets/Pokemons/squirtle.png';

function Squirtle(){
    return(
        <View style={styles.box}>
<View style={styles.top}>
        <Text style={{fontSize: 25,fontWeight: "bold",margin:5}}>
            Squirtle
        </Text>

<Text style={{fontSize: 25,margin:5}}>
    HP: 44
</Text>

</View>
<Image source={squirtle} style={styles.img}/>

<Text>
    Moves: Tackel, Water Gun, Tail Whip,Withdraw 
    Weakness: Electric, Grass
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

export default Squirtle