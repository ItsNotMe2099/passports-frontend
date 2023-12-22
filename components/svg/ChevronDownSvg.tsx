interface Props {
  className?: string
  color?: string
}

export default function ChevronDownSvg(props: Props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M16.5932 10L12.803 13.7903C12.5233 14.0699 12.0699 14.0699 11.7903 13.7903L8 10" stroke={props.color} stroke-width="2" stroke-linecap="round" />
    </svg>
  )
}

