import classNames from "classnames";

function Button(props) {
  let classes = classNames({
    "hover:bg-grey-hover-ghost hover:border-2 hover:border-grey-hover hover:text-white": !props.isGhost,
    "bg-grey text-white": props.isGhost,
    "text-small border-grey border-2 rounded-btn font-en-sans py-2 px-6 leading-8 focus:outline-none": true,
    "mr-0.625 mt-3 lg:mr-5 transition duration-200 ease-linear": true,
  });

  return (
    <button onClick={props.onFilterSelected} className={classes}>
      {props.name}
    </button>
  );
}

export default Button;
