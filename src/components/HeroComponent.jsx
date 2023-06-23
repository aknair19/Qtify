import HeroImage from "../assets/vibrating-headphone.svg";
const HeroComponent = () => {
  return (
    <div className="w-100 h-64 text-white flex justify-center items-center gap-2">
      <div className="flex flex-col gap-4">
        <p className="font-bold  text-3xl text-center">100 Thousand Songs, ad-free</p>
        <p className="font-bold text-3xl text-center ">Over thousands podecast episodes</p>
      </div>
      <div>
        <img src={HeroImage} alt="hero" />
      </div>
    </div>
  );
};

export default HeroComponent;
