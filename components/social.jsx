import classNames from "classnames";
import Image from "next/image";

export default function Social(props) {
  let menu = props.menu;

  let socialClasses = classNames({
    "mt-5 md:mt-3 lg:mt-6 md:leading-200": !props.flex,
  });

  let flex = classNames({
    "flex justify-between w-22": props.flex,
  });

  let icons = [];
  for (const el of menu.social_media) {
    icons.push(
      <a
        className="cursor-pointer"
        key={el.social_media_object.social_media_object_icon.alt}
        target="_blank"
        href={el.social_media_object.social_media_object_link}
        rel="nofollow noopener noreferrer"
      >
        <div className={socialClasses}>
          <Image
            quality={100}
            src={el.social_media_object.social_media_object_icon.url}
            alt={el.social_media_object.social_media_object_icon.alt}
            width={22}
            height={22}
            className="social-icon"
          />
        </div>
      </a>
    );
  }

  return <div className={flex}>{icons}</div>;
}
