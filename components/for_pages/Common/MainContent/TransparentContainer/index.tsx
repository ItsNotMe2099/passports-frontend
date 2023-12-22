import { ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
  children?: ReactElement | ReactElement[]
}

export default function TransparentContainer(props: Props) {

  return (
    <div className={styles.root}>
      {props.children}
    </div>
  )
}
