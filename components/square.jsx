const Square = (props) => {
  const sizes = [
    '22px',
    '57px',
    '115px',
    '230px',
    '345px'
  ]

  return (
    <>
      <svg width={sizes[props.size]} height={sizes[props.size]}>
        <rect width={sizes[props.size]} height={sizes[props.size]} className={"fill-" + props.color} />
      </svg>
    </>
  )
}

export default Square;