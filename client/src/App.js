import './styles/global.scss';
import Container from './components/views/Container/Container';
import Header from './components/views/Header/Header'
import MainGallery from './components/pages/MainGallery/MainGallery';

const App = () => {

  return (
    <Container>
      <Header />
      <MainGallery />
    </Container>
  );
 
 };
 

 export default App;