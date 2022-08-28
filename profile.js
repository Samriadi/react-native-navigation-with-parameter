const Profile = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { itemName } = route.params;
  
  return(
    <View>
      <Text>{itemId}</Text>
      <Text>{itemName}</Text>
    </View>
  )
}

export default Profile
