const Home = () => {
  const pressed = () => {
    navigation.navigate("profile", { 
      itemId: res.data.id,
      itemName: res.data.name,
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
