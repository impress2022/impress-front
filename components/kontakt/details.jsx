export default function Details({ menu }) {
  const descItems = [];

  const validatePhone = (phone) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    return re.test(String(phone).toLowerCase());
  };

  for (const value in menu.personal_data) {
    if (menu.personal_data[value].includes('@')) {
        descItems.push(<p key={value}><a href={"mailto:" + menu.personal_data[value]}>{menu.personal_data[value]}</a></p>);
        continue;
    }

    if (validatePhone(menu.personal_data[value])) {
      descItems.push(<p key={value}><a href={"tel:" + menu.personal_data[value]}>{menu.personal_data[value]}</a></p>);
      continue;
    }

    descItems.push(<p key={value}>{menu.personal_data[value]}</p>);
  }

  return <div className="contact-data mb-24">{descItems}</div>;
}
