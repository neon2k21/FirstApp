import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Button_tictactoe from './Button';
import { useEffect, useState } from 'react';




export default function App() {

  let buttons = [
                  [{x:0,y:0}, {x:0,y:1}, {x:0,y:2}], 
                  [{x:1,y:0}, {x:1,y:1}, {x:1,y:2}],
                  [{x:2,y:0}, {x:2,y:1}, {x:2,y:2}]
                ]
  
  const [win, SetWin] = useState(false)
  const [queue, SetQueue] = useState(false)
  const [symbol, setSymbol] = useState("X")
  const [player1_score, setplayer1_score] = useState(0)
  const [player2_score, setplayer2_score] = useState(0)

  // const checkwin = () => {
    
  //   if(buttons[0][0][0] && buttons[0][0][1] && buttons[0][0][2])

  // }

  
  const count_scores = () =>{
    setplayer1_score(player1_score++)
    setplayer2_score(player2_score++)
  }

  const click = () =>{
    if (!queue) {
      SetQueue(true)
      setSymbol('O')
    } 
    else {
      setSymbol('x')
      SetQueue(false)
    }
  }

  

  return (
    <View>
      
      <View style = {{backgroundColor:'gray', width: '100%', height:'80%'}}>
        <Text>
          Счет: {player1_score} - {player2_score}
        </Text>
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


