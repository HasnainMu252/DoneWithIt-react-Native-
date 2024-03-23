import { StyleSheet, View,Platform,StatusBar, SafeAreaView} from 'react-native'


export default function Screen({children,style}) {
  return (
    <SafeAreaView style={[styles.container,style]}>
      <View style={style}>

      {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      },
})