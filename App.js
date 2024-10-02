import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Button_tictactoe from './Button';
import { useEffect, useState } from 'react';




export default function App() {

  const [symbol, setSymbol] = useState("X")
  
  

  const click = () =>{
    if (symbol == 'x') {
      setSymbol('O')
      console.warn(symbol)
    } 
    else {
      setSymbol('x')
      console.warn(symbol)
      console.log(symbol)
    }
  }


  return (
    <View>
      
      <View style = {{backgroundColor:'gray', width: '100%', height:'80%'}}>
      <View style = {{width: '100%', height:'40%'}}>
          <TouchableOpacity onPress={click}>
            <Button_tictactoe id = {0} text = {symbol} />
          </TouchableOpacity>
          <Button_tictactoe id = {0} text = {symbol}/>
          <Button_tictactoe id = {0} text = {symbol}/>
      </View>
      
    
      </View>
      
    </View>
  );
}


