import { ReactElement } from 'react'
import styles from './index.module.scss'

interface Props {
  children?: ReactElement| ReactElement[]
}

export default function WhiteContainer(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {props.children}
      </div>
    </div>
  )
}
