interface Props {
  className?: string
  color?: string
}

export default function TimeCircleSvg(props: Props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.75 7C11.75 6.58579 11.4142 6.25 11 6.25C10.5858 6.25 10.25 6.58579 10.25 7V10.7324C10.25 11.1503 10.4589 11.5406 10.8066 11.7725L13.584 13.624C13.9286 13.8538 14.3943 13.7607 14.624 13.416C14.8538 13.0714 14.7607 12.6057 14.416 12.376L11.75 10.5986V7Z" fill={props.color}
       />
    </svg>
  )
}

