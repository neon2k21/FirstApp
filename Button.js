import {Text, View} from 'react-native';

export default function Button_tictactoe(props){

    const {id_i, id_j, text} = props

    return(
        <View style={{
            alignItems:'center',
            justifyContent:'center',
            width:'30%', 
            height:'20%', 
            backgroundColor:'red',
            }}>
            <Text>
              {text}
            </Text>
        </View> 
    )
}

//const styles = StyleSheet