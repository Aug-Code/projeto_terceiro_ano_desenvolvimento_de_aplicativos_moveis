import { Text,View } from "react-native";

export default function App(){
  return(
    <View style={{flex: 1, flexDirection:'row', alignItems: 
      'center', justifyContent: 'center'
    }}> 
    <view style={{
      width: 50,
      height:50,
      background:'green'
    }}>
    </view>

    <view style={{
      width: 50,
      height:50,
      background:'yellow'
    }}>
    </view>
    
    <view style={{
      width: 50,
      height:50,
      background:'blue'
    }}>
    </view>
      
    </View>
  )
}