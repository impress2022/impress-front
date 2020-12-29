import classNames from 'classnames'

function Button (props) {
  let classes = classNames({
    'bg-grey text-white': props.isGhost,
    'text-small border-grey border-2 rounded-btn font-secondary py-2 px-6 leading-8 focus:outline-none': true
  })

  return (
    <button onClick={props.onFilterSelected} className={classes}>{props.name}</button>
  )
}

export default Button