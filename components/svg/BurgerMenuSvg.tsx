interface Props {
  className?: string
  color: string
  onClick: () => void
}

export default function BurgerMenuSvg(props: Props) {
  return (
    <svg className={props.className} onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 5H23M2 12H23M2 19H23" stroke={props.color} stroke-width="2" stroke-linecap="round" />
    </svg>
  )
}

