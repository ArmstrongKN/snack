import { Text, SafeAreaView, StyleSheet } from 'react-native';
import{useFonts,Bangers_400Regular}from '@expo-google-fonts/bangers' ;
import{Abel_400Regular}from '@expo-google-fonts/abel' ;
import{Aboreto_400Regular}from '@expo-google-fonts/aboreto' ;
import{Acme_400Regular}from '@expo-google-fonts/acme' ;
import{Aladin_400Regular}from '@expo-google-fonts/aladin' ;
import{Alef_400Regular}from '@expo-google-fonts/alef' ;
import{Asap_400Regular}from '@expo-google-fonts/asap' ;
import{Asul_400Regular}from '@expo-google-fonts/asul' ;
import{Cairo_400Regular}from '@expo-google-fonts/cairo' ;
import{Cabin_400Regular}from '@expo-google-fonts/cabin' ;
import{Dev_400Regular}from '@expo-google-fonts/dev' ;

export default function App() {

let [fontsLoaded, fontError]=useFonts({
  Bangers_400Regular ,
  Abel_400Regular,
  Aboreto_400Regular,
  Acme_400Regular,
  Aladin_400Regular,
  Alef_400Regular ,
  Asap_400Regular,
  Asul_400Regular,
  Cairo_400Regular,
  Cabin_400Regular,
  Dev_400Regular
    
})

if (!fontsLoaded && !fontError){
  return null
}


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        "Quanto mais avança a tecnologia, mais respeitado será o Ser que se mantiver Humano." 
      Marco Aurélio Ferreira
         </Text>

    <Text style={styles.titulo1}>
     “A necessidade é a mãe da inovação." 
      Platão
    </Text>
    
    <Text style={styles.titulo2}>
        "Se você contar sua ideia para 10 pessoas e 9 delas disser que você está maluco, provavelmente você está fazendo algo inovador." 
    Nolan Bushnell
    </Text>
  
    <Text style={styles.titulo3}>
        "Uma pessoa que nunca cometeu um erro, nunca tentou nada de novo." 
    Albert Einstein
    </Text>

    <Text style={styles.titulo4}>
        "Eu não falhei. Apenas descobri 10 mil maneiras que não funcionam." 
    Thomas Edison
    </Text>

    <Text style={styles.titulo5}>
        "A criatividade é pensar coisas novas. A inovação é fazer coisas novas."
 
    Theodore Levitt.
    </Text>

    <Text style={styles.titulo6}>
        "É divertido fazer o impossível, pois lá a concorrência é menor."
 
    Walt Disney
    </Text>

    <Text style={styles.titulo7}>
       "Todas as inovações eficazes são surpreendentemente simples. Na verdade, maior elogio que uma inovação pode receber é haver quem diga: “Isto é óbvio! Por que não pensei nisso antes?” 
    Peter Drucker
    </Text>

    <Text style={styles.titulo8}>
        "Cuidado com gente que não tem dúvida. Gente que não tem dúvida não é capaz de inovar, de reinventar, não é capaz de fazer de outro modo. Gente que não tem dúvida só é capaz de repetir." 
    Mario Sergio Cortella
    </Text>

    <Text style={styles.titulo9}>
        "A primeira regra de qualquer tecnologia utilizada nos negócios é que a automação aplicada a uma operação eficiente aumentará a eficiência. A segunda é que a automação aplicada a uma operação ineficiente aumentará a ineficiência." 
     Bill Gates
    </Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 18,    
    textAlign: 'center',
    fontFamily:'Bangers_400Regular',
  },
  titulo1: {
    margin: 24,
    fontSize: 18,    
    textAlign: 'center',
    fontFamily:'Abel_400Regular',
  },
  titulo2: {
    margin: 24,
    fontSize: 18,    
    textAlign: 'center',
    fontFamily:'Aboreto_400Regular',
  },

  titulo3: {
    margin: 24,
    fontSize: 18,    
    textAlign: 'center',
    fontFamily:'Acme_400Regular',
  },

  titulo4: {
    margin: 24,
    fontSize: 18,    
    textAlign: 'center',
    fontFamily:'Aladin_400Regular',
  },

  titulo5: {
    margin: 24,
    fontSize: 18,    
    textAlign: 'center',
    fontFamily:'Alef_400Regular',
  },

  titulo6: {
    margin: 24,
    fontSize: 18,    
    textAlign: 'center',
    fontFamily:'Asap_400Regular',
  },

  titulo7: {
    margin: 24,
    fontSize: 18,    
    textAlign: 'center',
    fontFamily:'Asul_400Regular',
  },

  titulo8: {
    margin: 24,
    fontSize: 18,    
    textAlign: 'center',
    fontFamily:'Cairo_400Regular',
  },

  titulo9: {
    margin: 24,
    fontSize: 18,    
    textAlign: 'center',
    fontFamily:'Cabin_400Regular',
  },

});
