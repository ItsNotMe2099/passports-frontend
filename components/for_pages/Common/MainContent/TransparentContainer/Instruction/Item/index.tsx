import { useRouter } from 'next/router'
import styles from './index.module.scss'
import { Routes } from '@/types/routes'
import classNames from 'classnames'

interface IItem {
  title: string
  text: string
}

interface Props {
  number: number
  item: IItem
}

export default function Item(props: Props) {

  const router = useRouter()

  return (
    <div className={styles.root}>
      <div className={classNames(styles.number, { [styles.bulgaria]: router.asPath === Routes.bulgaria })}>
        {props.number}
      </div>
      <div className={styles.title}>
        {props.item.title}
      </div>
      <div className={styles.text}>
        {props.item.text}
      </div>
    </div>
  )
}
