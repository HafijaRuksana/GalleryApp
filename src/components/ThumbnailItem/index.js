// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {objectDetails, thumbnailClicked, isActive} = props
  const {id, thumbnailAltText, thumbnailUrl} = objectDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickThumbnail = () => {
    thumbnailClicked(id)
  }

  return (
    <li className="thumbnailItem">
      <button type="button" onClick={onClickThumbnail} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
