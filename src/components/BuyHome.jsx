import buyHome from "../assets/images/BuyHome.jpg";

const BuyHome = () => {
  return (
    <div>
      <div className="px-4 pt-10">
        <div className="pb-4">
          <h2 className="font-bold text-[20px]">Buying a home</h2>
          <span className="text-[#8993A4] text-[12px]">Apartments, land, builder floors, villas and more</span>
        </div>
        <figure className="mx-auto pb-4 h-55">
          <img src={buyHome} alt="buy home" className="w-full h-full" />
        </figure>
        <div className="pb-4">
          <h2 className="font-bold text-[14px]">Explore all home buying options &rarr;</h2>
          <span className="text-[#8993A4] text-[12px]">Over 778,000 properties and 187,000 projects</span>
        </div>
        <hr />
        <div className="flex items-align my-8">
          <figure className="w-10">
            <img src="https://static.99acres.com/universalhp/img/BookRead.shared.png" alt="Book Read" />
          </figure>
          <div className="flex flex-col">
            <h2 className="font-bold text-[16px]">Top Articles on home buying</h2>
            <span className="text-[#8993A4] text-[12px] mt-0">Know more about the latest realty trends</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyHome;
