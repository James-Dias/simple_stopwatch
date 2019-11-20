import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class simple_stopwatch extends Component{
  constructor(props) {
    super(props);
    this.state = {n:0, botao:'INICIAR'};
    this.timer = null

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar() {
    let s = this.state;

    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      s.botao = 'INICIAR';
    } else{
      this.timer = setInterval(()=>{
        let s = this.state;
        s.n += 0.1;
        this.setState(s);
      }, 100);

      s.botao = 'PARAR'
    }

    this.setState(s);
  }

  limpar() {
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let s = this.state;
    s.n = 0;
    s.botao = 'INICIAR';
    this.setState(s);
  }

  render() {
    return(
      <View style={styles.body}>
        <View style={styles.areaTimer}>
          <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
        </View>
        <View style={styles.botaoArea}>
          <TouchableOpacity style={styles.botao} onPress={this.iniciar}>
            <Text style={styles.botaoText}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={this.limpar}>
            <Text style={styles.botaoText}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202124'
  },
  timer:{
    color: '#5195ea',
    fontSize: 80,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  botaoArea:{
    flexDirection: 'row',
    height: 40,
    marginTop: 100
  },
  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5195ea',
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  areaTimer:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: '#FFFFFF'
  },
  botaoText:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});
