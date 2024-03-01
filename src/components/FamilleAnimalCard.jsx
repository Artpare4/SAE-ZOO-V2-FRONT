function FamilleAnimalCard() {
  return (
    <div className="flex flex-col bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s rounded-3xl ">
      <div className="bg-secondary-800/60 backdrop-filter backdrop-blur-sm border border-secondary-50 border-s p-2 rounded-2xl">
        <img className="w-[100%] rounded-2xl" src="" alt="Image de " />
        <img className="w-[100%] rounded-2xl" src="" alt="Image de " />
      </div>
      <div>
        <p className="nameAnimal text-center text-4xl lg:text-2xl text-text-50" />
        <p className="text-center text-xl lg:text-md italic text-text-200/50" />
      </div>
    </div>
  );
}

export default FamilleAnimalCard;
