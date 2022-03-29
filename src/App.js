import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from './components/Header';
import Footer from './components/Footer';
import { HomePage } from './screens/HomePage';
import './css/styles.css'



function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <Header
         title="Catherine's Decoration"
         description= "Ecommerce de venta de muebles y decoraciones"
      />
      <HomePage/>
      <Footer/>
    </>
    
  );
}

export default App;
