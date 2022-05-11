import Navbar from "../../components/Navbar";
import Banner1 from "../../assets/Banner1.jpg";

const style = {
  bgimages: {
    height: "70vh",
    backgroundImage: `url(${Banner1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  }
}

const Banner = () => {
  return (
    <div style={style.bgimages} className="p-5 md:p-0">
        <Navbar />
    </div>
  )
}

export default Banner