import Thumbnail from "./thumbnail";

export default function Grid(props) {
  const thumbnails = []

  props.realizations.forEach((value, index) => {
    thumbnails.push(<Thumbnail key={index} realization={value}/>)
  })

  return (
    <>
      <div className="h-full lg:flex lg:flex-row lg:flex-wrap lg:justify-between xl:justify-start">
        {thumbnails}
      </div>
    </>
  )
}