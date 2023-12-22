interface Props {
  className?: string
  color?: string
}

export default function YoutubeSvg(props: Props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
      <g clip-path="url(#clip0_73_2204)">
        <path d="M23.2453 3.33981C22.9706 2.32397 22.1781 1.52849 21.1623 1.2568C19.7977 0.730003 6.58112 0.47189 2.74716 1.27189C1.73131 1.54661 0.935842 2.33906 0.664143 3.35491C0.0482943 6.0568 0.00150187 11.8983 0.679238 14.6606C0.953955 15.6764 1.74641 16.4719 2.76226 16.7436C5.46414 17.3655 18.3094 17.453 21.1774 16.7436C22.1932 16.4689 22.9887 15.6764 23.2604 14.6606C23.917 11.7172 23.9638 6.23793 23.2453 3.33981Z" fill="#FF0000" />
        <path d="M15.849 9.00034L9.69055 5.46826V12.5324L15.849 9.00034Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_73_2204">
          <rect width="24" height="16.6038" fill="white" transform="translate(0 0.698242)" />
        </clipPath>
      </defs>
    </svg>
  )
}

