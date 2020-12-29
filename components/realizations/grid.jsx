import Thumbnail from "../thumbnail";

export default function Grid(props) {
  const thumbnails = []

  props.realizations.forEach((value, index) => {
    thumbnails.push(<Thumbnail key={index} realization={value}/>)
  })

  return (
    <>
      <div>
        {thumbnails}
      </div>
    </>
  )
}