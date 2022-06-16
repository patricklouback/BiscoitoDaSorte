import React, { Component } from "react";
import { View,Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };

    this.abreBiscoito = this.abreBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];


  }

  abreBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: this.frases[numeroAleatorio],
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style = { estilos.container }>

      <Image
      source={this.state.img}
      style={estilos.img}
      />

      <Text style = {estilos.textoFrase}>
      " {this.state.textoFrase} "
      </Text>

      <TouchableOpacity style = {estilos.botao} onPress = {this.abreBiscoito}>
        <View style = {estilos.btnArea}>
          <Text style = {estilos.btnTexto}>
            Abrir Biscoito
          </Text>
        </View>
      </TouchableOpacity>

      </View>
    )
  }
}

const estilos = StyleSheet.create ({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }

});

export default App;