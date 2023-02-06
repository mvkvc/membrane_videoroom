import clsx from "clsx";
import React from "react";

const MembraneLogo: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width="4.5em"
      height="1em"
      viewBox="0 0 223 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("inline-block", props.className)}
      {...props}
    >
      <g clipPath="url(#clip0_80_14420)">
        <path
          d="M19.2968 0.746053L2.80419 10.2112C1.95109 10.701 1.24234 11.4065 0.750918 12.2547C0.257875 13.1046 0 14.0663 0 15.0459V33.973C0 34.9526 0.261118 35.9159 0.754162 36.7642C1.24721 37.6124 1.95758 38.3179 2.81067 38.8077L19.3049 48.2696C20.1596 48.761 21.1279 49.0189 22.1156 49.0189C23.1033 49.0189 24.0716 48.761 24.9263 48.2696L41.4205 38.8077C42.2752 38.3179 42.984 37.6124 43.477 36.7642C43.9701 35.9159 44.2296 34.9526 44.2312 33.973V15.0459C44.2312 14.0663 43.9717 13.103 43.477 12.2547C42.984 11.4065 42.2736 10.701 41.4189 10.2112L24.9198 0.746053C24.0651 0.256253 23.0952 0 22.1091 0C21.123 0 20.1532 0.257875 19.2984 0.746053H19.2968Z"
          fill="#87CCE8"
        />
        <path
          d="M29.7724 11.0061C27.4191 9.63724 24.623 9.22853 21.9729 9.86916C19.3228 10.5098 17.0262 12.1462 15.5682 14.4363C15.1125 15.1305 9.39055 24.9232 9.39055 24.9232C9.33217 25.0205 9.29486 25.1276 9.27864 25.2395C9.26243 25.3514 9.26891 25.4649 9.29811 25.5736C9.3273 25.6822 9.37596 25.7844 9.4457 25.8752C9.51381 25.9644 9.59977 26.0407 9.69708 26.0974C9.79439 26.1558 9.90306 26.1931 10.015 26.2093C10.1269 26.2256 10.242 26.2191 10.3523 26.1899C10.4626 26.1607 10.5648 26.112 10.6556 26.0439C10.7464 25.9758 10.821 25.8898 10.8794 25.7925L15.1887 18.4861C15.552 18.8445 15.9931 19.1186 16.4781 19.284L7.89682 33.7007C7.78167 33.8969 7.74761 34.1305 7.80438 34.3494C7.86114 34.57 8.00387 34.7581 8.20011 34.8733C8.33148 34.9495 8.48069 34.9917 8.63152 34.9933C8.78398 34.9933 8.93319 34.9544 9.06456 34.8798C9.19593 34.8052 9.30622 34.6965 9.38406 34.5668L18.1907 19.7641L18.7681 19.8955L19.6893 20.1031L13.3868 30.7619C13.2716 30.9581 13.2392 31.1917 13.2976 31.4106C13.3544 31.6296 13.4971 31.8193 13.6933 31.9345C13.8231 32.0123 13.9739 32.0529 14.1247 32.0513C14.2772 32.0529 14.4264 32.0156 14.5578 31.941C14.6891 31.8664 14.7994 31.7593 14.8773 31.6296L21.4134 20.5653C21.8983 20.7194 22.3702 20.9059 22.8309 21.1216L18.4145 28.4978C18.3107 28.694 18.288 28.9211 18.348 29.1335C18.4081 29.346 18.5492 29.526 18.7405 29.6379C18.9319 29.7498 19.159 29.7839 19.3763 29.7336C19.592 29.6833 19.7801 29.552 19.9018 29.3671L24.2986 22.0217C24.7009 22.3104 25.0836 22.625 25.4453 22.964L18.747 34.2797C18.6838 34.377 18.64 34.4857 18.6205 34.6008C18.5994 34.7143 18.6043 34.8327 18.6303 34.9446C18.6562 35.0582 18.7065 35.1636 18.7762 35.2577C18.846 35.3517 18.9335 35.4296 19.0341 35.488C19.1346 35.5463 19.2466 35.5853 19.3617 35.5999C19.4769 35.6145 19.5953 35.6064 19.7072 35.5739C19.8191 35.5415 19.9245 35.488 20.0153 35.415C20.1061 35.342 20.1807 35.2512 20.2343 35.149L26.699 24.2323L27.3137 24.9021L27.7564 25.3919L18.966 40.1703C18.9027 40.2676 18.8589 40.3762 18.8378 40.4914C18.8184 40.6049 18.8216 40.7233 18.8476 40.8368C18.8735 40.9504 18.9238 41.0558 18.9935 41.1499C19.0633 41.2439 19.1509 41.3218 19.2514 41.3802C19.352 41.4385 19.4639 41.4775 19.5807 41.4921C19.6958 41.5067 19.8142 41.4986 19.9261 41.4661C20.038 41.4337 20.1434 41.3802 20.2343 41.3072C20.3251 41.2342 20.3997 41.1434 20.4532 41.0412L29.028 26.6245C29.3994 26.944 29.8373 27.1808 30.3108 27.3154L25.9643 34.7079C25.9043 34.8052 25.8653 34.9122 25.8475 35.0257C25.8297 35.1376 25.8361 35.2528 25.8637 35.3631C25.8913 35.4734 25.9416 35.5772 26.0097 35.668C26.0778 35.7588 26.1638 35.835 26.2627 35.8934C26.3616 35.9518 26.4703 35.9891 26.5838 36.0037C26.6974 36.0199 26.8125 36.0118 26.9228 35.9826C27.0331 35.9534 27.1369 35.9015 27.2277 35.8334C27.3185 35.7637 27.3947 35.6777 27.4515 35.5788L33.5254 25.2816C34.9266 22.8926 35.3191 20.0495 34.6169 17.3735C33.913 14.6974 32.1727 12.4074 29.774 11.0045L29.7724 11.0061ZM32.1614 24.1723L31.8678 24.6751C31.4494 25.3449 31.1623 25.5736 30.872 25.5833C30.379 25.5995 29.4415 24.6605 28.6176 23.7457C27.5521 22.5521 26.2189 21.0632 24.4397 20.0301C22.6622 18.997 20.7046 18.5591 19.1363 18.2104C17.9312 17.946 16.6419 17.6395 16.4099 17.2048C16.251 16.9096 16.3694 16.4442 16.8932 15.5716C17.4609 14.5742 18.2199 13.6984 19.1282 12.9929C20.0364 12.2873 21.0744 11.7667 22.1854 11.4602C23.2963 11.1537 24.4559 11.0677 25.5994 11.2072C26.7428 11.3467 27.8489 11.7083 28.8512 12.2711C29.8551 12.8339 30.7358 13.5897 31.4461 14.4914C32.1565 15.3932 32.6804 16.4263 32.9885 17.5292C33.2967 18.632 33.3843 19.7852 33.2432 20.9221C33.1037 22.059 32.7388 23.157 32.1711 24.1544L32.1614 24.1707V24.1723ZM27.4612 15.9884C27.1839 16.0517 26.8936 16.0338 26.626 15.9333C26.36 15.8327 26.1281 15.6576 25.9627 15.4273C25.7972 15.197 25.7032 14.9229 25.6934 14.6407C25.6837 14.3585 25.7599 14.0779 25.9091 13.8378C26.06 13.5978 26.2789 13.4064 26.5384 13.2897C26.7979 13.1729 27.0866 13.1356 27.3672 13.181C27.6478 13.2264 27.9089 13.3545 28.1165 13.5492C28.3241 13.7422 28.47 13.9935 28.5349 14.2693C28.5787 14.4525 28.5836 14.6423 28.5528 14.8272C28.5219 15.0121 28.4554 15.1905 28.3549 15.3494C28.2543 15.51 28.1246 15.6478 27.9705 15.7581C27.8164 15.8668 27.6429 15.9463 27.458 15.9884H27.4612ZM23.439 16.3679C23.2201 16.4166 22.9898 16.402 22.779 16.3225C22.5681 16.243 22.3865 16.1036 22.2551 15.9219C22.1237 15.7403 22.0507 15.5229 22.0426 15.3008C22.0345 15.0769 22.0929 14.8564 22.2113 14.665C22.3297 14.4752 22.5016 14.3228 22.706 14.2287C22.9103 14.1346 23.1374 14.1022 23.3612 14.1363C23.5834 14.1703 23.791 14.2693 23.958 14.4201C24.1251 14.5709 24.2419 14.7672 24.297 14.9845C24.3327 15.1305 24.3408 15.2829 24.3165 15.4321C24.2938 15.5813 24.2402 15.7241 24.1592 15.8522C24.0781 15.9803 23.9743 16.0906 23.851 16.1782C23.7277 16.2658 23.5866 16.3274 23.439 16.3598V16.3696V16.3679ZM30.9969 21.1962C30.7698 21.2481 30.533 21.2335 30.3141 21.1508C30.0968 21.0697 29.907 20.9253 29.7724 20.7372C29.6362 20.5491 29.5599 20.3253 29.5534 20.0933C29.5453 19.8614 29.6086 19.6343 29.7302 19.4381C29.8535 19.2419 30.0319 19.0862 30.2443 18.9905C30.4568 18.8948 30.692 18.864 30.9223 18.9029C31.1526 18.9402 31.365 19.0456 31.5353 19.2046C31.7056 19.3635 31.824 19.5678 31.8776 19.7933C31.9457 20.095 31.8921 20.4096 31.7267 20.6707C31.5613 20.9318 31.2985 21.1183 30.9969 21.1865V21.1962V21.1962ZM30.6401 18.4309C30.4633 18.4731 30.2784 18.4634 30.1065 18.4017C29.9362 18.3401 29.787 18.2282 29.6799 18.0822C29.5729 17.9363 29.5113 17.7627 29.5048 17.5811C29.4967 17.4011 29.5437 17.2226 29.6394 17.0686C29.7351 16.9145 29.8729 16.7912 30.0384 16.7166C30.2038 16.6404 30.3871 16.6161 30.5671 16.6436C30.7471 16.6728 30.9142 16.7523 31.0472 16.8756C31.1802 16.9988 31.2742 17.1578 31.3164 17.3329C31.3699 17.5649 31.3277 17.8098 31.2029 18.0125C31.0764 18.2152 30.8752 18.3612 30.6417 18.418V18.4277L30.6401 18.4309ZM28.5722 19.3424C28.4425 19.3716 28.3062 19.3619 28.183 19.3132C28.0597 19.2662 27.951 19.1835 27.8748 19.0748C27.7986 18.9661 27.7548 18.8396 27.7516 18.7066C27.7483 18.5753 27.7824 18.4439 27.8537 18.332C27.9235 18.2201 28.0257 18.1309 28.1473 18.0757C28.2689 18.0206 28.4035 18.0028 28.5349 18.0238C28.6663 18.0449 28.7879 18.1049 28.8852 18.1941C28.9825 18.2833 29.0507 18.4001 29.0831 18.5282C29.1042 18.6142 29.1074 18.705 29.0928 18.7926C29.0782 18.8802 29.0474 18.9645 28.9988 19.0407C28.9517 19.117 28.8885 19.1818 28.8155 19.2337C28.7425 19.2856 28.6598 19.3213 28.5722 19.3408V19.3424ZM20.9836 14.7931C20.8538 14.8223 20.7192 14.811 20.5943 14.7639C20.4711 14.7169 20.364 14.6342 20.2862 14.5255C20.2099 14.4185 20.1661 14.2903 20.1629 14.1573C20.1597 14.026 20.1937 13.8946 20.2635 13.7827C20.3332 13.6708 20.4354 13.5816 20.5554 13.5264C20.677 13.4713 20.81 13.4535 20.9414 13.4745C21.0728 13.4956 21.1944 13.554 21.2933 13.6432C21.3906 13.7324 21.4604 13.8492 21.4912 13.9773C21.5301 14.1509 21.4993 14.3325 21.4036 14.4833C21.3079 14.6342 21.1555 14.7396 20.9819 14.7785V14.7915L20.9836 14.7931Z"
          fill="#001A72"
        />
        <path
          d="M59.2268 34.8068H62.717L62.6554 17.3833H62.717L68.9271 34.8068H72.0167L78.2268 17.3833H78.2885L78.196 34.8068H81.9036V14.4785H76.1265L70.6576 29.8326H70.596L65.1579 14.4785H59.2268V34.8068V34.8068Z"
          fill="#001A72"
        />
        <path
          d="M100.696 26.6194C100.696 21.8625 97.9469 19.2983 93.6214 19.2983C88.8013 19.2983 85.7749 22.3572 85.7749 27.3006C85.7749 32.244 88.8029 35.0546 93.6214 35.0546C97.7928 35.0546 100.573 32.9852 100.696 29.5858H97.5755C97.4214 31.3779 95.9066 32.3656 93.6831 32.3656C91.0881 32.3656 89.45 30.7908 89.2651 27.8552H100.696V26.6194ZM97.5755 25.7549H89.3576C89.7598 23.2216 91.273 21.9858 93.6522 21.9858C96.1548 21.9858 97.5755 23.2524 97.5755 25.5392V25.7549V25.7549Z"
          fill="#001A72"
        />
        <path
          d="M104.324 34.8065H107.783V27.3606C107.783 24.0861 109.358 22.2631 111.707 22.2631C113.776 22.2631 114.92 23.6222 114.92 25.7858V34.8065H118.379V27.2373C118.379 24.0552 119.923 22.2631 122.333 22.2631C124.403 22.2631 125.484 23.6222 125.484 25.8474V34.8065H128.944V25.0754C128.944 21.4911 126.997 19.2983 123.6 19.2983C120.695 19.2983 118.843 20.8423 118.287 23.314H118.256C117.884 20.8423 115.969 19.2983 113.004 19.2983C110.224 19.2983 108.371 20.9364 107.691 23.5622H107.66L107.783 19.5465H104.324V34.8081V34.8065Z"
          fill="#001A72"
        />
        <path
          d="M142.209 35.0531C146.504 35.0531 149.191 31.9326 149.191 26.8968C149.191 22.2015 146.565 19.2968 142.178 19.2968C139.15 19.2968 137.05 20.7175 136.401 22.9427H136.37C136.401 22.2015 136.432 20.9657 136.432 20.3169V13.3965H132.973V34.8066H136.432C136.37 34.0346 136.309 32.6446 136.309 31.5629H136.34C136.957 33.694 139.058 35.0531 142.209 35.0531V35.0531ZM141.314 32.2116C138.317 32.2116 136.432 30.5735 136.432 27.9169V27.1449C136.432 24.0553 138.347 22.1399 141.375 22.1399C144.094 22.1399 145.732 23.9937 145.732 26.9909C145.732 30.2346 144.032 32.2116 141.314 32.2116Z"
          fill="#001A72"
        />
        <path
          d="M152.804 34.8063H156.264V28.134C156.264 24.4881 157.902 22.2646 160.528 22.2646C162.566 22.2646 163.556 23.4696 163.556 26.0337C163.556 26.7441 163.494 27.5161 163.432 28.1032H166.584C166.645 27.4545 166.738 26.2186 166.738 25.2617C166.738 21.4617 164.915 19.2998 161.609 19.2998C158.304 19.2998 156.883 21.1844 156.171 23.9334H156.141L156.264 19.5463H152.804V34.808V34.8063Z"
          fill="#001A72"
        />
        <path
          d="M175.694 35.0529C179.061 35.0529 180.884 33.6937 181.378 31.4377H181.409C181.409 32.6736 181.317 34.0635 181.255 34.8047H184.715V25.505C184.715 21.4893 181.996 19.2949 177.361 19.2949C173.005 19.2949 170.348 21.1179 170.348 24.1767C170.348 24.454 170.379 24.8563 170.41 25.072H173.592C173.561 24.8254 173.561 24.5773 173.561 24.4849C173.561 22.7852 174.889 21.8899 177.238 21.8899C179.925 21.8899 181.253 22.91 181.253 25.1952V26.277H175.6C171.521 26.277 169.884 28.1 169.884 30.416C169.884 33.3823 172.202 35.0496 175.692 35.0496L175.694 35.0529ZM176.404 32.4579C174.302 32.4579 173.068 31.6551 173.068 30.2651C173.068 29.0601 173.932 28.3805 175.911 28.3805H181.255V28.6579C181.255 31.0063 179.401 32.4579 176.404 32.4579Z"
          fill="#001A72"
        />
        <path
          d="M188.644 34.8065H192.104V27.4222C192.104 24.0861 194.019 22.2631 197.047 22.2631C199.796 22.2631 201.155 23.6222 201.155 26.0323V34.8065H204.615V25.2603C204.615 21.4911 202.235 19.2983 198.374 19.2983C194.82 19.2983 192.843 20.8732 192.01 23.6238H191.979L192.102 19.5465H188.643V34.8081L188.644 34.8065Z"
          fill="#001A72"
        />
        <path
          d="M223 26.6194C223 21.8625 220.251 19.2983 215.925 19.2983C211.105 19.2983 208.079 22.3572 208.079 27.3006C208.079 32.244 211.107 35.0546 215.925 35.0546C220.097 35.0546 222.877 32.9852 223 29.5858H219.879C219.725 31.3779 218.211 32.3656 215.987 32.3656C213.392 32.3656 211.754 30.7908 211.569 27.8552H223V26.6194ZM219.879 25.7549H211.662C212.064 23.2216 213.577 21.9858 215.956 21.9858C218.459 21.9858 219.879 23.2524 219.879 25.5392V25.7549Z"
          fill="#001A72"
        />
      </g>
      <defs>
        <clipPath id="clip0_80_14420">
          <rect width="223" height="49" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MembraneLogo;