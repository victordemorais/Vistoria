import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker'

export default class Photos extends React.Component {
  state = {
    avatarSource: null,
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
      title: 'Selecione uma foto',
      takePhotoButtonTitle: 'Tirar Foto',
      chooseFromLibraryButtonTitle: 'Galeria de Fotos',
      cancelButtonTitle: 'Cancelar',
    }

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled photo picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.props.updateImage(response.data)
        this.setState({
          avatarSource: source,
        })
      }
    })
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatar, styles.avatarContainer]}>
            <Text
              style={{
                color: '#c9c9c9',
                position: 'absolute',
                top: 10,
                fontSize: 12,
              }}>
              {this.props.label}
            </Text>

            {this.state.avatarSource === null ? (
              <View>
                <Image source={this.props.image} />
                <View style={{ position: 'absolute', bottom: 5 }}>
                  <Icon name="camera" size={15} color="#4F7BFE" />
                </View>
              </View>
            ) : (
              <Image
                style={[
                  styles.avatarContainer,
                  styles.avatar,
                  this.props.stylesCamera,
                ]}
                source={this.state.avatarSource}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  avatarContainer: {
    borderWidth: 1,
    borderColor: '#4F7BFE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#FCFCFC',
  },
  avatar: {
    width: '100%',
    height: 160,
  },
})
