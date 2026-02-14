const Card = ({ image, title, para, styles = {} }) => {
  return (
    <div
      className={styles.outerDivStyle}
    >
      <figure className={styles.figureStyle}>
        <img src={image} alt={title} className={styles.imageStyle} />
      </figure>
      <h2 className={styles.titleStyle}
      >{title}</h2
      >
      <span className={styles.paraStyle}>{para}</span>
    </div>
  )
}

export default Card
