interface Props {
  className?: string
  color?: string
}

export default function PlusSvg(props: Props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4V20M20 12L4 12" stroke={props.color} stroke-width="2" stroke-linecap="round" />
    </svg>
  )
}

