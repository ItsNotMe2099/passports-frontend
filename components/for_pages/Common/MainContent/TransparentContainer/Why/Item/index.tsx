import Image from 'next/image'
import styles from './index.module.scss'
import { ReactElement } from 'react'
import classNames from 'classnames'

interface Props {
  image: string
  title: string | ReactElement
  text: string | ReactElement
  className?: string
}

export default function Item(props: Props) {

  return (
    <div className={classNames(styles.root, props.className)}>
      <Image src={props.image} alt='' fill />
      <div className={styles.content}>
        <div className={styles.title}>
          {props.title}
        </div>
        <div className={styles.text}>
          {props.text}
        </div>
      </div>
    </div>
  )
}
