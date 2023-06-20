import HeroImage from "../assets/vibrating-headphone.svg";
const HeroComponent = () => {
  return (
    <div className="w-100 h-64 text-white flex justify-center items-center">
      <div>
        <p className="font-bold  text-3xl">100 Thousand Songs, ad-free</p>
        <p className="font-bold text-3xl ">Over thousand episodes</p>
      </div>
      <div>
        <img src={HeroImage} alt="hero" />
      </div>
    </div>
  );
};

export default HeroComponent;
