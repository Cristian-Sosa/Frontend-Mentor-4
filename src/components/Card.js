function Card({ title, description, imageUrl }) {
  return (
    <div className={`card ${title}`}>
      <div className='card_container'>
        <h1 className='card_title'>{title}</h1>
        <span className='card_description'>{description}</span>
        <img className='card_icon' src={imageUrl} alt='Icon-card'/>
      </div>
    </div>
  );
}
export default Card;