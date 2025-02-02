type MediaProp = {
  download: string;
  img: string;
};

const Media = (props: MediaProp) => {
  return (
    <div className="mx-4 md:mx-0 shadow rounded-lg">
      <img
        src={props.img}
        alt=""
        className="w-full h-auto rounded-t-lg object-cover aspect-square"
      />

      <a
        download
        href={props.download}
        className="flex items-center gap-3 text-white px-4 py-3 rounded-b-lg bg-emerald-500 hover:bg-emerald-600 transition-colors"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3C10.0204 3.00621 8.10822 3.7202 6.609 5.013C5.46 6.003 4.6275 7.293 4.413 8.5875C1.899 9.1425 0 11.3325 0 13.977C0 17.049 2.562 19.5 5.6715 19.5H19.0305C21.753 19.5 24 17.355 24 14.6595C24 12.2055 22.137 10.206 19.749 9.8685C19.3845 5.9985 16.035 3 12 3ZM15.531 13.281L12.531 16.281C12.4613 16.3508 12.3786 16.4063 12.2874 16.4441C12.1963 16.4819 12.0987 16.5013 12 16.5013C11.9013 16.5013 11.8037 16.4819 11.7125 16.4441C11.6214 16.4063 11.5387 16.3508 11.469 16.281L8.469 13.281C8.39927 13.2113 8.34395 13.1285 8.30622 13.0374C8.26848 12.9463 8.24905 12.8486 8.24905 12.75C8.24905 12.6514 8.26848 12.5537 8.30622 12.4626C8.34395 12.3715 8.39927 12.2887 8.469 12.219C8.60983 12.0782 8.80084 11.9991 9 11.9991C9.09862 11.9991 9.19627 12.0185 9.28738 12.0562C9.37848 12.094 9.46127 12.1493 9.531 12.219L11.25 13.9395V8.25C11.25 8.05109 11.329 7.86032 11.4697 7.71967C11.6103 7.57902 11.8011 7.5 12 7.5C12.1989 7.5 12.3897 7.57902 12.5303 7.71967C12.671 7.86032 12.75 8.05109 12.75 8.25V13.9395L14.469 12.219C14.6098 12.0782 14.8008 11.9991 15 11.9991C15.1992 11.9991 15.3902 12.0782 15.531 12.219C15.6718 12.3598 15.7509 12.5508 15.7509 12.75C15.7509 12.9492 15.6718 13.1402 15.531 13.281Z"
            fill="#F8FAFC"
          />
        </svg>
        Download
      </a>
    </div>
  );
};

export default Media;
