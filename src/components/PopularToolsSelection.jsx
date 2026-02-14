import toolsLogo from "../assets/images/tools-logo.svg";
import plusMinus from "../assets/images/plus-minus.png";
import Card from "../components/Card";

const cardsData = [{ title: "Budget Calculator ->", para: "Check your affordability range for buying home", image: plusMinus },
{ title: "EMI Calculator ->", para: "Calculate youtr home loan EMI", image: plusMinus },
{ title: "Loan Eligibility ->", para: "See what you can borrow for your home", image: plusMinus },
{ title: "Area Converter ->", para: "Convert one area into other easily", image: plusMinus }];

const styles = {
  outerDivStyle: "popularCard p-4 px-3 min-w-49 max-w-49 bg-white flex flex-col rounded-xl",
  figureStyle: "rounded-[50%] w-15 h-15  bg-[#FFFBF3] grid place-items-center self-center",
  imageStyle: "w-[50%]",
  titleStyle: "font-bold text-[14px] pt-4",
  paraStyle: "text-[12px] text-[#8993A4] pt-1",
}

const PopularToolsSelection = () => {
  return (
    <section className="popular-tools m-auto mt-6 bg-[#F0F9FF]">
      <div className="use-popular-tools flex justify-between px-3 pt-6">
        <div className="heading flex items-center">
          <figure className="logo">
            <img
              src={toolsLogo}
              alt="tools-logo"
            />
          </figure>
          <div className="section-info mt-1 flex flex-col">
            <h2 className="text-[15px] font-bold">
              Use Popular Tools
            </h2>
            <span className="text-[12px] text-[#8993A4]"
            >Go from browsing to buying</span
            >
          </div>
        </div>
        <div className="view-all-button">
          <a href="#" className="text-[#0078DB] text-[14px] font-bold"
          >View All</a
          >
        </div>
      </div>
      <div className="tools-cards flex overflow-x-auto scrollbar-hide ps-5 pe-4 pt-8 pb-6 gap-4">
        {cardsData.map((cardData, index) => {
          return (
            <Card key={index} image={cardData.image} title={cardData.title} para={cardData.para} styles={styles} />
          );
        })}
      </div>

    </section>
  )
}

export default PopularToolsSelection
