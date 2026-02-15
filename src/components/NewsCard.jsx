import Card from "./Card";

const NewsCard = ({ cardData, styles }) => {
  return (
    <div className="my-5 flex overflow-x-auto scrollbar-hide gap-4 px-4 items-start">
      {cardData.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} para={card.para} styles={styles} />
      ))}
    </div>
  )
}

export default NewsCard
