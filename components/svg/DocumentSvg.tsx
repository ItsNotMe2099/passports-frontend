interface Props {
  className?: string
  color: string
}

export default function DocumentSvg(props: Props) {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 5C0.25 2.37665 2.37665 0.25 5 0.25H13C15.6234 0.25 17.75 2.37665 17.75 5V17C17.75 19.6234 15.6234 21.75 13 21.75H5C2.37665 21.75 0.25 19.6234 0.25 17V5ZM5 5.25C4.58579 5.25 4.25 5.58579 4.25 6C4.25 6.41421 4.58579 6.75 5 6.75H13C13.4142 6.75 13.75 6.41421 13.75 6C13.75 5.58579 13.4142 5.25 13 5.25H5ZM4.25 11C4.25 10.5858 4.58579 10.25 5 10.25H13C13.4142 10.25 13.75 10.5858 13.75 11C13.75 11.4142 13.4142 11.75 13 11.75H5C4.58579 11.75 4.25 11.4142 4.25 11ZM5 15.25C4.58579 15.25 4.25 15.5858 4.25 16C4.25 16.4142 4.58579 16.75 5 16.75H9C9.41421 16.75 9.75 16.4142 9.75 16C9.75 15.5858 9.41421 15.25 9 15.25H5Z" fill={props.color} />
    </svg>
  )
}

