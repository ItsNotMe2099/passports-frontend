interface Props {
  className?: string
  color: string
}

export default function CheckSvg(props: Props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="12" fill={props.color} />
      <path d="M16.0688 9L10.2348 14.834C10.0134 15.0553 9.65455 15.0553 9.4332 14.834L7 12.4008" stroke="white" stroke-width="2" stroke-linecap="round" />
    </svg>
  )
}

