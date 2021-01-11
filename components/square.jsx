import classNames from 'classnames';

const Square = ({children, size, color, custom, customWrapper}) => {
  const sizes = [
    '22px',
    '57px',
    '115px',
    '230px',
    '345px'
  ]

  let squareClasses = classNames({})

  squareClasses += ' fill-' + color
  squareClasses += ' ' + custom

  return (
    <div className={customWrapper}>
      <svg width={sizes[size]} height={sizes[size]}>
        <rect width={sizes[size]} height={sizes[size]} className={squareClasses} />
      </svg>
      { children }
    </div>
  )
}

export default Square;