import { useState } from 'react'; //importamos a "useState" pois precisamos dela para fazer as mudanças de estado
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [telaAtual, setTelaAtual] = useState('inicio'); //inicializamos a tela inicio

  return (
    <View style={styles.container}>

      {/* TELA INICIAL */}
      {telaAtual === 'inicio' && ( //aqui temos tipo um if "escondido" para renderizar state
        <View style={styles.conteudo}> 
          <Image 
            source={require('./assets/logo-ifma.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.titulo}>TechQuiz</Text>
          <Text style={styles.subtitulo}>Teste seus conhecimentos de TI</Text>

          <TouchableOpacity 
            style={styles.botao} 
            onPress={() => setTelaAtual('perguntas')} //mudança de state
          >
            <Text style={styles.textoBotao}>Iniciar Quiz</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* TELA DE PERGUNTAS */}
      {telaAtual === 'perguntas' && (
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Pergunta 1:</Text>
          <Text style={styles.subtitulo}>Qual minha linguagem favorita</Text>

          {/* Ao apertar SIM, muda o estado para 'resultado' */}
          <TouchableOpacity 
            style={styles.botao} 
            onPress={() => setTelaAtual('resultado')}
          > 
            <Text style={styles.textoBotao}>C</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.botao, { marginTop: 12 }]} 
            onPress={() => setTelaAtual('inicio')}
          >  
            <Text style={styles.textoBotao}>Java</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* TELA DE RESULTADO */}
      {telaAtual === 'resultado' && (
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Acertou miseravel</Text>

          <TouchableOpacity 
            style={[styles.botao, { marginTop: 24 }]} 
            onPress={() => setTelaAtual('inicio')}
          > 
            <Text style={styles.textoBotao}>Voltar ao Início</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 40,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8fafc',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 32,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});