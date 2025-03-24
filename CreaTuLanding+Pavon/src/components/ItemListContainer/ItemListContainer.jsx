import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <div data-aos="fade-right" className='saludo'>
        <h2>{props.saludo}</h2>
    </div>
  )
}

export default ItemListContainer