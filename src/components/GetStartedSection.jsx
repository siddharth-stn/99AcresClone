import buyIcon from "../assets/images/buy.webp";
import Card from "../components/Card";

const GetStartedSection = () => {
  const cards = [
    { title: 'Buy', image: buyIcon },
    { title: 'Rent', image: buyIcon },
    { title: 'New Products', image: buyIcon },
    { title: 'Insights', image: buyIcon },
    { title: 'Invest', image: buyIcon },
    { title: 'Plot/Land', image: buyIcon },
    { title: 'Co-working Spaces', image: buyIcon },
    { title: 'Buy Commercial', image: buyIcon },
    { title: 'Lease Commercial', image: buyIcon },
    { title: 'PG', image: buyIcon },
    { title: 'Post a Property', image: buyIcon }
  ];

  const styles = {
    outerDivStyle: "getStartedCard rounded-2xl shadow-[0_0_8px_rgba(0,0,0,0.3)] pt-3 pb-0 px-4",
    figureStyle: "rounded-[50%] w-15 h-15 grid place-items-center self-center",
    imageStyle: "w-full",
    titleStyle: "text-xs font-bold text-center block mt-3",
    paraStyle: "hidden"
  }

  return (
    <>
      <section className="w-full mt-5">
        <div className="w-[89%] md:w-[95%] m-auto">
          <h2 className="font-bold text-[20px]">Get started with</h2>
          <span className="text-[rgb(137,147,164)] text-[12px]"
          >Explore real estate options in top cities</span
          >
        </div>
        <div
          className="flex mt-3 p-2 pl-[5.5%] md:pl-[2.5%] gap-1.5 overflow-x-auto scrollbar-hide"
        >
          {cards.map((card, index) => {
            return (
              <Card key={index} image={card.image} title={card.title} styles={styles} />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default GetStartedSection
