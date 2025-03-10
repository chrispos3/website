import formalChris from "../assets/formal_chris.png";

const FormalChris = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 border-2 border-[#808080] border-b-[#ffffff] border-r-[#ffffff] bg-[#c0c0c0] p-1">
        <img 
          src={formalChris} 
          alt="Formal Chris" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FormalChris;