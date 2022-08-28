const Home = ({navigation}) => {
  const Pressed = () => {
    navigation.navigate("profile", { 
      itemId: "1",
      itemName: "Baso",
    });
  }
  
  return (
    <View>  
      <TouchableOpacity onPress={Pressed}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Home
