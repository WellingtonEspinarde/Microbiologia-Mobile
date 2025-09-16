import { registerRootComponent } from 'expo';

//import App from './App';
import PainelTecnico from './src/pages/painelTecnico';
//import CardP from './src/components/CardPainel/CardP';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately


 registerRootComponent(PainelTecnico);
 //registerRootComponent(BotaoCard);
 //registerRootComponent(CardP);
 

