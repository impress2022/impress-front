export default function Details({ menu }) {
  const descItems = [];

  for (const value in menu.personal_data) {
    if (menu.personal_data[value].includes('@')) {
        descItems.push(<p key={value}><a href={"mailto:" + menu.personal_data[value]}>{menu.personal_data[value]}</a></p>);
        continue;
    }

    descItems.push(<p key={value}>{menu.personal_data[value]}</p>);
  }

  return <div className="contact-data mb-24">{descItems}</div>;
}
