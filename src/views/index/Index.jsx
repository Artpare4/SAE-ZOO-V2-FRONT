function Index() {
  return (
    <div className="grid grid-cols-12 bg-lion bg-cover bg-center bg-no-repeat h-[90svh] min-h-fit mt-[-6rem]">
      <div className="col-start-2 col-end-12 lg:col-end-7 xl:col-end-6 flex gap-3 flex-col justify-center rounded-3xl lg:rounded-2xl p-4 bg-secondary-50/40 backdrop-filter backdrop-blur-sm self-center border border-secondary-50 border-s">
        <div className="flex justify-center">
          <img className="w-60 lg:w-40" src="src/assets/LogoZoo.png" alt="Logo"/>
        </div>
        <p className="text-4xl lg:text-2xl text-justify px-2">Découvrez le Zoo Parc de Laval, un joyau de la biodiversité en plein cœur de la Mayenne. Rencontrez des animaux fascinants, vivez des moments uniques en famille et explorez la beauté de la nature. Une aventure inoubliable vous attend&nbsp;!</p>
        <a className="text-center bg-primary-500  mr-2 rounded-2xl p-2 text-4xl lg:text-2xl" href="">Réservez vos billets</a>
      </div>
    </div>
  );
}

export default Index;