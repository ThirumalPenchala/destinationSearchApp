// Write your code here
import './index.css'

const DestinationItem = props => {
  const {searchDetails} = props
  const {name, imgUrl} = searchDetails
  return (
    <li className="list-items">
      <img src={imgUrl} className="image" alt={name} />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
