import styles from './index.module.scss'
import { ReactElement } from 'react'

interface IItem {
  icon: ReactElement
  text: string | ReactElement
  title: string | ReactElement
}

interface Props {
  item: IItem
}

export default function Item({ item }: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        {item.icon}
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          {item.title}
        </div>
        <div className={styles.text}>
          {item.text}
        </div>
      </div>
    </div>
  )
}
