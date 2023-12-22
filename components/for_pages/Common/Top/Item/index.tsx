import { ReactElement } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

interface Props {
  icon: ReactElement
  text: string | ReactElement
  className?: string
}

export default function Item(props: Props) {

  return (
    <div className={classNames(styles.root, props.className)}>
      <div>{props.icon}</div>
      <div className={styles.text}>
        {props.text}
      </div>
    </div>
  )
}
