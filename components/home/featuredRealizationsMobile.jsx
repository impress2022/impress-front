import HomeTeaserMobile from "../realizations/homeTeaserMobile";

export default function FeaturedRealizationsMobile(props) {
  let directions = ["top-left", "top-right", "bottom-left", "bottom-right"];

  return (
    <>
      {props.realizations.map((el, c) => (
        <HomeTeaserMobile
          key={c}
          element={el}
          counter={c + 1}
          direction={directions[c]}
        />
      ))}
    </>
  );
}
