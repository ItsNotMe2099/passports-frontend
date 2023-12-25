interface Props {
  className?: string
  color?: string
}

export default function ChevronRightSvg(props: Props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18" stroke={props.color} stroke-width="2" stroke-linecap="round" />
    </svg>
  )
}

