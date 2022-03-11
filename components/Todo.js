import { StyleSheet, Text, TouchableOpacity,View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
const Todo = ({item , deleteHandler}) => {
    return ( 
        <TouchableOpacity
            >
            <View style={styles.item}>
                <Text>{item.text}</Text>
                <Entypo 
                    name="trash" 
                    size={24} 
                    color="black"
                    onPress={()=> deleteHandler(item.key)}
                />
            </View>
            
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    }
  });

export default Todo;