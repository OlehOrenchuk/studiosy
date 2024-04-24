export const PlusIconSVG = ({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) => {
  return (
    <svg
      className={className}
      width={size ?? 90}
      height={size ?? 90}
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45 67.5V22.5"
        stroke="#A1A1A1"
        strokeWidth="5.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 45H67.5"
        stroke="#A1A1A1"
        strokeWidth="5.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 45H43.725"
        stroke="#A1A1A1"
        strokeWidth="5.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 67.5V22.5"
        stroke="#A1A1A1"
        strokeWidth="5.625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LocationIconSVG = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1611 13.7465C20.1611 16.0398 18.3078 17.9065 16.0011 17.9065C13.6945 17.9065 11.8411 16.0532 11.8411 13.7465C11.8411 11.4399 13.7078 9.58655 16.0011 9.58655C16.4545 9.58655 16.8945 9.65321 17.2945 9.78655"
        stroke="#A1A1A1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.97459 5.73341C13.8012 0.253416 25.0945 2.13342 27.1745 11.3467C28.7079 18.1201 24.4945 23.8535 20.8012 27.4001C18.1212 29.9868 13.8812 29.9868 11.1879 27.4001C7.50792 23.8401 3.28125 18.1068 4.82792 11.3334"
        stroke="#A1A1A1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const UserProfileIconSVG = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.0266 4.01331C18.9066 3.15997 17.5199 2.66663 15.9999 2.66663C12.3199 2.66663 9.33325 5.65329 9.33325 9.33329C9.33325 13.0133 12.3199 16 15.9999 16C19.6799 16 22.6666 13.0133 22.6666 9.33329"
        stroke="#A1A1A1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.4535 29.3333C27.4535 24.1733 22.3203 20 16.0003 20C9.6802 20 4.54688 24.1733 4.54688 29.3333"
        stroke="#A1A1A1"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const AddSVGIcon = ({ color = "#A1A1A1" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9902 12H16.0002"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 12H11.81"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 16V8"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 13.04V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const TrashIconSVG = ({ color = "#A1A1A1" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.8996 9.04997C15.7196 8.82997 13.5196 8.71997 11.3296 8.71997C10.0296 8.71997 8.72961 8.78997 7.43961 8.91997L6.09961 9.04997"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.70898 8.38994L9.84898 7.52994C9.94898 6.90994 10.029 6.43994 11.139 6.43994H12.859C13.969 6.43994 14.049 6.92994 14.149 7.52994L14.289 8.37994"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.49 9.12988L16.06 15.7299C15.99 16.7599 15.93 17.5599 14.1 17.5599H9.89C8.06 17.5599 7.99999 16.7599 7.92999 15.7299L7.5 9.12988"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const LeftArrowIconSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.57031 18.0701L3.50031 12.0001L9.57031 5.9301"
        stroke="#343F42"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.9901 12L3.67011 12"
        stroke="#343F42"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 12L17.03 12"
        stroke="#343F42"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const EditIconSVG = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1592 13.5599L24.9459 11.6666C26.8392 9.66659 27.6925 7.38659 24.7459 4.59992C21.7992 1.82659 19.5725 2.79992 17.6792 4.79992L6.73248 16.3866C6.31915 16.8266 5.91915 17.6932 5.83915 18.2932L5.34582 22.6132C5.17248 24.1732 6.29248 25.2399 7.83915 24.9732L12.1325 24.2399C12.7325 24.1332 13.5725 23.6932 13.9859 23.2399L19.2525 17.6666"
        stroke="#A1A1A1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.8542 6.7334C16.4275 10.4134 19.4142 13.2267 23.1209 13.6"
        stroke="#A1A1A1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 29.3333H18.6667"
        stroke="#A1A1A1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24 29.3333H28"
        stroke="#A1A1A1"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const RemoveImageIconSVG = () => {
  return (
    <svg
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9873 12.5627L18.1073 11.436"
        stroke="#FF3F3F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5601 19.0283L14.2267 15.3396"
        stroke="#FF3F3F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.1067 19.0281L10.5601 11.436"
        stroke="#FF3F3F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 16.5196V19.256C1 25.9628 3.66667 28.6455 10.3333 28.6455H18.3333C25 28.6455 27.6667 25.9628 27.6667 19.256V11.2079C27.6667 4.50107 25 1.81836 18.3333 1.81836H10.3333C3.66667 1.81836 1 4.50107 1 11.2079"
        stroke="#FF3F3F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const FavoriteImageIconSVG = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_454_546)">
        <path
          d="M21.7589 11.88C23.3189 10.32 22.8122 8.74665 20.6389 8.37332L17.2389 7.81332C16.6656 7.71999 15.9856 7.21333 15.7322 6.69333L13.8522 2.93332C12.8389 0.89332 11.1722 0.89332 10.1589 2.93332L8.27889 6.69333C8.02556 7.21333 7.34556 7.70665 6.77223 7.81332L3.37225 8.37332C1.19892 8.73332 0.692252 10.3067 2.25225 11.88L4.90557 14.5333C5.34557 14.9733 5.5989 15.84 5.45224 16.4667L4.69224 19.7467C4.09224 22.3333 5.47893 23.3467 7.75889 21.9867L10.9456 20.0933C11.5189 19.7467 12.4789 19.7467 13.0522 20.0933L16.2389 21.9867C18.5189 23.3333 19.9056 22.3333 19.3056 19.7467L18.5456 16.4667"
          stroke="#FFCB14"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_454_546">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
