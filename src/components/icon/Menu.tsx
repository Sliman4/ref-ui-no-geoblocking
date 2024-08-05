import React from 'react';

const Rainbow = (props?: any) => (
  <svg
    width="24"
    height="15"
    viewBox="0 0 24 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_9323_113)">
      <path
        d="M11.6732 6.75098C14.542 6.75098 16.8677 9.05739 16.8677 11.9032H23.6742C23.6738 5.32891 18.3008 0 11.6729 0L11.6732 6.75098Z"
        fill="white"
      />
      <path
        d="M11.6733 3.37695H8.26855V6.75391H11.6733V3.37695Z"
        fill="#0072CE"
      />
      <path
        d="M8.26848 3.37695H4.86377V6.75391H8.26848V3.37695Z"
        fill="#37DBF4"
      />
      <path d="M3.40471 5.30676H0V8.68372H3.40471V5.30676Z" fill="#F2EE83" />
      <path
        d="M8.26848 6.75391H4.86377V10.1309H8.26848V6.75391Z"
        fill="#00C08B"
      />
      <path
        d="M4.8637 10.1309H1.45898V13.5078H4.8637V10.1309Z"
        fill="#FFB259"
      />
      <path
        d="M9.72763 11.5781H6.32324V14.955H9.72763V11.5781Z"
        fill="#FF585D"
      />
      <path d="M11.6733 0H8.26855V3.37696H11.6733V0Z" fill="#8FCDFF" />
    </g>
    <defs>
      <clipPath id="clip0_9323_113">
        <rect width="24" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Ethereum = (props?: any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      opacity="1"
      width="20"
      height="20"
      rx="10"
      fill="url(#pattern0_menu_ethereum)"
    />
    <defs>
      <pattern
        id="pattern0_menu_ethereum"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_8081_228" transform="scale(0.010101)" />
      </pattern>
      <image
        id="image0_8081_228"
        width="99"
        height="99"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const Aurora = (props?: any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity="1">
      <circle cx="10" cy="10" r="10" fill="#3F9B20" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4099 4.42027L15.623 10.7392C16.6941 12.6329 15.3553 15 13.2132 15H6.78683C4.64472 15 3.30591 12.6329 4.37696 10.7392L7.59013 4.42027C8.66118 2.52658 11.3388 2.52658 12.4099 4.42027ZM11.2049 5.1304C10.6694 4.18355 9.33059 4.18356 8.79506 5.1304L5.5819 11.4493C5.04637 12.3962 5.71578 13.5797 6.78683 13.5797H13.2132C14.2842 13.5797 14.9536 12.3962 14.4181 11.4493L11.2049 5.1304Z"
        fill="white"
      />
    </g>
  </svg>
);

const Allbridge = (props?: any) => (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.92944 11.3715C5.34635 14.6623 8.3662 16.9903 11.6744 16.5712C12.7918 16.4296 13.7991 15.9929 14.6272 15.3496M4.92944 11.3715C4.51254 8.08066 6.85646 5.07311 10.1648 4.654C11.1765 4.52584 12.1611 4.65457 13.0527 4.98917M4.92944 11.3715L4.28711 6.30114M14.6272 15.3496C16.2511 14.0883 17.1859 12.0332 16.9098 9.85372C16.6203 7.56926 15.0766 5.74875 13.0527 4.98917M14.6272 15.3496L10.7427 18.3003M13.0527 4.98917L17.5503 6.87793"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5.34814 2.64622C6.20174 2.09748 8.16503 1 10.8965 1C13.628 1 16.1604 2.09748 16.8717 2.64622"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20.9878 9.2312C21.0363 10.3124 21.0051 12.7114 19.6393 15.2348C18.2736 17.7581 16.057 19.5121 15.2261 19.8766"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M1.01222 9.2312C0.963796 10.3124 0.994984 12.7114 2.36074 15.2348C3.72649 17.7581 5.9431 19.5121 6.77399 19.8766"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Solana = (props?: any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      opacity="1"
      width="20"
      height="20"
      fill="url(#pattern0_menu_solana)"
    />
    <defs>
      <pattern
        id="pattern0_menu_solana"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_8081_239" transform="scale(0.0227273)" />
      </pattern>
      <image
        id="image0_8081_239"
        width="44"
        height="44"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const Terra = (props?: any) => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.136 18.5293C16.6963 17.7491 18.3326 15.6577 18.9557 14.7096C18.8202 14.6554 17.6716 14.9371 15.136 16.1724C11.9664 17.7166 13.1855 19.5045 15.136 18.5293Z"
      fill="white"
      fillOpacity="0.8"
    />
    <path
      d="M12.9416 1.9038C14.632 1.57872 15.8673 1.76835 16.2737 1.9038C16.7613 2.01184 18.9556 4.17937 19.6871 7.10511C20.2722 9.4457 19.9309 12.5773 19.5245 13.5255C18.8202 13.7693 16.4525 13.9156 12.6165 12.5502C7.82155 10.8436 5.46471 8.97433 5.54598 6.61748C5.62725 4.26064 10.8286 2.31015 12.9416 1.9038Z"
      fill="white"
      fillOpacity="0.8"
    />
    <path
      d="M4.65186 1.41671C3.02645 2.26193 1.64485 4.36954 1.15723 5.3177C2.67428 4.96553 5.96844 3.91985 7.00871 2.5545C8.30904 0.847819 6.68363 0.360196 4.65186 1.41671Z"
      fill="white"
      fillOpacity="0.8"
    />
    <path
      d="M0.913468 14.1414C-0.516894 10.9556 0.0465819 7.6668 0.507115 6.42065C1.80744 8.04607 4.61941 11.7845 5.46462 13.735C6.30983 15.6855 6.19605 18.0153 6.03351 18.9363C4.92282 18.6654 2.34383 17.3272 0.913468 14.1414Z"
      fill="white"
      fillOpacity="0.8"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.71563 15.2793C8.30404 13.8094 9.72256 12.4502 10.699 11.8029C11.2878 12.0561 11.927 12.3049 12.6167 12.5504C15.5592 13.5977 17.6378 13.7556 18.7643 13.6623C18.5717 14.0555 18.336 14.4942 18.0708 14.915C17.451 15.1247 16.4918 15.5126 15.136 16.1731C13.2497 17.092 12.9178 18.0974 13.3694 18.5552C13.1942 18.6336 13.0239 18.7067 12.8604 18.774C11.4788 19.3429 9.28452 17.3111 8.71563 15.2793Z"
      fill="white"
      fillOpacity="0.4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.39355 4.22476C4.63116 4.79595 5.20933 5.29497 5.82408 5.67841C6.93928 3.74049 11.106 2.22198 12.9418 1.86895C14.6322 1.54387 15.8675 1.7335 16.2739 1.86895C16.3142 1.87789 16.3663 1.90093 16.4282 1.93733C15.2849 0.902381 12.7199 0 10.0159 0C8.6947 0 7.50604 0.314907 6.55477 0.824966C7.47062 0.826455 7.8461 1.41994 7.00896 2.51869C6.50882 3.17512 5.48769 3.75766 4.39355 4.22476Z"
      fill="white"
      fillOpacity="0.2"
    />
  </svg>
);

const Celo = (props?: any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect opacity="1" width="20" height="20" fill="url(#pattern0_menu_celo)" />
    <defs>
      <pattern
        id="pattern0_menu_celo"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_8081_237" transform="scale(0.0227273)" />
      </pattern>
      <image
        id="image0_8081_237"
        width="44"
        height="44"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const ElectronLabs = (props?: any) => (
  <svg
    width="19"
    height="14"
    viewBox="0 0 19 14"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.54256 0C5.18441 0 4.14848 2.65117 4.05029 3.97676H14.8759C17.7628 3.97676 18.8281 1.32559 19 0H8.54256Z"
      fill="currentColor"
    />
    <path
      d="M4.49227 10.0154C1.13411 10.0154 0.0981916 12.6666 0 13.9921H10.8256C13.7125 13.9921 14.7778 11.341 14.9497 10.0154H4.49227Z"
      fill="currentColor"
    />
    <path
      d="M6.84885 5.00769C3.4907 5.00769 2.1602 7.65887 2.06201 8.98445H8.46902C11.3559 8.98445 12.8631 6.33328 13.0349 5.00769H6.84885Z"
      fill="currentColor"
    />
  </svg>
);

const BridgeIconMenu = (props?: any) => (
  <svg
    width="19"
    height="10"
    viewBox="0 0 19 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 9.5H0C0 4.5 3.61905 0 9.04762 0C13.3905 0 15.9841 1.96032 16.7381 3.16667C16.7381 3.16667 14 0.5 10 2C6 3.5 6 8.45238 6 9.5Z"
      fill="currentColor"
    />
    <path
      d="M14 9.50018H19C19 6.08111 16.1315 2.64007 12.8158 2.32012C9.5 2.00018 8.01535 4.08844 7.5 5.00019C8.11843 4.54432 9.2522 3.60107 11.5 4.50019C13.7478 5.39932 14 8.50018 14 9.50018Z"
      fill="currentColor"
    />
  </svg>
);

const WalletCedeBridge = (props) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.00162742 5.76702C0.00162742 2.58105 2.58336 0 5.76651 0H18.2579C21.4427 0 24.0228 2.58268 24.0228 5.76702V18.2631C24.0228 21.449 21.4411 24.0301 18.2579 24.0301H5.73717C2.56869 24.0301 0 21.4604 0 18.2908V5.7654L0.00162742 5.76702Z"
        fill="url(#paint0_linear_9322_99)"
      />
      <path
        d="M1.38835 6.48765C1.38835 3.67018 3.67181 1.38586 6.48824 1.38586H17.5388C20.3552 1.38586 22.6387 3.67018 22.6387 6.48765V17.5423C22.6387 20.3598 20.3552 22.6441 17.5388 22.6441H6.46217C3.65877 22.6441 1.38672 20.3712 1.38672 17.5668V6.48602L1.38835 6.48765Z"
        fill="black"
      />
      <path
        d="M2.77344 7.20841C2.77344 4.75779 4.75863 2.77185 7.20834 2.77185H16.8181C19.2678 2.77185 21.253 4.75779 21.253 7.20841V16.8217C21.253 19.2723 19.2678 21.2583 16.8181 21.2583H7.18715C4.75048 21.2583 2.77507 19.2821 2.77507 16.8429V7.20841H2.77344Z"
        fill="white"
      />
      <path
        d="M9.98813 12.9374C10.8928 11.3699 10.634 9.52612 9.41007 8.81924C8.18616 8.11235 6.46062 8.81002 5.55596 10.3775C4.65131 11.945 4.9101 13.7888 6.13401 14.4956C7.35792 15.2025 9.08347 14.5049 9.98813 12.9374Z"
        fill="black"
      />
      <path
        d="M9.0199 11.5229C9.55189 11.5229 9.98315 11.0915 9.98315 10.5593C9.98315 10.0271 9.55189 9.5957 9.0199 9.5957C8.4879 9.5957 8.05664 10.0271 8.05664 10.5593C8.05664 11.0915 8.4879 11.5229 9.0199 11.5229Z"
        fill="white"
      />
      <path
        d="M17.9428 14.5087C19.1667 13.8018 19.4255 11.9581 18.5208 10.3906C17.6162 8.82307 15.8906 8.12541 14.6667 8.83229C13.4428 9.53918 13.184 11.3829 14.0887 12.9504C14.9933 14.5179 16.7189 15.2156 17.9428 14.5087Z"
        fill="black"
      />
      <path
        d="M15.0579 11.5375C15.5899 11.5375 16.0212 11.1061 16.0212 10.5739C16.0212 10.0417 15.5899 9.61023 15.0579 9.61023C14.5259 9.61023 14.0947 10.0417 14.0947 10.5739C14.0947 11.1061 14.5259 11.5375 15.0579 11.5375Z"
        fill="white"
      />
      <path
        d="M12.0383 15.6069C12.0383 15.6069 11.3505 15.5792 11.1044 15.7553C10.8583 15.9314 10.8746 16.2037 10.8746 16.2037C10.8746 16.2037 10.842 16.4825 10.9235 16.6635C11.005 16.8445 11.4826 16.8135 11.7173 17.2162C11.7173 17.2162 11.9324 17.2896 12.0383 17.2684"
        fill="black"
      />
      <path
        d="M12.0381 15.6069C12.0381 15.6069 12.726 15.5792 12.9721 15.7553C13.2182 15.9313 13.2019 16.2036 13.2019 16.2036C13.2019 16.2036 13.2345 16.4825 13.153 16.6634C13.0715 16.8444 12.594 16.8134 12.3593 17.2162C12.3593 17.2162 12.1441 17.2896 12.0381 17.2684"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9322_99"
          x1="129.274"
          y1="28.1449"
          x2="129.301"
          y2="-14.1262"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5EA6FF" />
          <stop offset="1" stopColor="#5EA6FF" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export {
  Rainbow,
  ElectronLabs,
  Solana,
  Terra,
  Celo,
  Aurora,
  Ethereum,
  Allbridge,
  BridgeIconMenu,
  WalletCedeBridge,
};
