import Text from "../typography/text";
import classNames from "classnames";

export default function Hashtag({ children, bold, custom }) {
  let hashClasses = classNames({
    'font-bold': bold,
  })

  hashClasses += ' ' + custom

  return (
    <Text size="body-18" custom={hashClasses}>{ children }</Text>
  )
}