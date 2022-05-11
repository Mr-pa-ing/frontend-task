import Banner from "./container/Banner/Banner";
import Brand from "./container/Brand/Brand";
import Buy from "./container/Buy1Get1/Buy";
import Category from "./container/Category/Category";
import Item from "./container/Item/Item";
import NewArrival from "./container/NewArrival/NewArrival";
import Promotion from "./container/Promotion/Promotion";
import Footer from "./container/Footer/Footer";
import Carousel from "./container/Carousel/Carousel";


function App() {
  return (
    <>
      <Banner/>
      <Category/>
      <Buy/>
      <Promotion/>
      <div className="h-2 bg-gray-200" />
      <NewArrival/>
      <Carousel/>
      <Brand/>
      <div className="h-2 bg-gray-200" />
      <Item name="Phone"/>
      <div className="h-2 bg-gray-200" />
      <Item name="Latop"/>
      <div className="h-2 bg-gray-200" />
      <Item name="Tablet"/>
      <Footer/>
    </>
  );
}

export default App;
