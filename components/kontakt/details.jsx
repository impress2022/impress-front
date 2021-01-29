import { useMenu } from "../../hooks/useMenu";

export default function Details() {
  const menu = useMenu();
  const descItems = [];

  for (const value in menu.personal_data) {
    descItems.push(<p key={value}>{menu.personal_data[value]}</p>);
  }

  return <div className="contact-data mb-24">{descItems}</div>;
}
