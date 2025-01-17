interface Props {
  className?: string
  color?: string
}

export default function TgSvg(props: Props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_72_2195)">
        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#13A1E9" />
        <path d="M17.2399 7.6566C17.3334 7.05249 16.759 6.57566 16.2219 6.8115L5.52361 11.5086C5.13842 11.6777 5.1666 12.2612 5.5661 12.3884L7.77232 13.091C8.19345 13.2251 8.64937 13.1557 9.0171 12.9017L13.9912 9.46522C14.1412 9.36157 14.3047 9.57487 14.1766 9.70695L10.5961 13.3984C10.2487 13.7566 10.3177 14.3634 10.7355 14.6254L14.7442 17.1392C15.1939 17.4212 15.7723 17.1379 15.8563 16.5946L17.2399 7.6566Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_72_2195">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

