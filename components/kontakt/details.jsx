export default function Details({ menu }) {
  const descItems = [];

  for (const value in menu.personal_data) {
    descItems.push(<p key={value}>{menu.personal_data[value]}</p>);
  }

  return <div className="contact-data mb-24">{descItems}</div>;
}
