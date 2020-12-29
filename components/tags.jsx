import Button from "./button";

export default function Tags(props) {
  const tags = [];

  props.tags.forEach(tag => {
    tags.push(<Button key={tag.id} onFilterSelected={() => props.setFilter(tag.id)} id={tag.id} className="mx-8" name={tag.name} isGhost={props.filter === tag.id}/>)
  })

  return (
    <>
      <div className="inline-flex">
        {tags}
      </div>
    </>
  )
}