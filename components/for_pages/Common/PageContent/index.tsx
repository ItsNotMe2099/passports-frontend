import { ReactElement } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
  children?: ReactElement | ReactElement[]
  className?: string
}

export default function PageContent(props: Props) {

  return (
    <div className={classNames(styles.root, props.className)}>
      {props.children}
    </div>
  )
}
