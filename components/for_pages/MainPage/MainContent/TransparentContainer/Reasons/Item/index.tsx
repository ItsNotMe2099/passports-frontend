import { ReactElement } from 'react'
import styles from './index.module.scss'
import Image from 'next/image'
import classNames from 'classnames'

interface Props {
  color: string
  secondColor: string
  title: string | ReactElement
  coloredText: string | ReactElement
  text: string | ReactElement
  reverse?: boolean
  bigger?: boolean
  stretch?: boolean
}

export default function Item(props: Props) {

  return (
    <div className={classNames(styles.root,
      { [styles.bigger]: props.bigger, [styles.stretch]: props.stretch })}
      style={{ backgroundColor: `${props.color}` }}>
      <div className={styles.top}>
        <div className={styles.title}>{props.title}</div>
        <Image src={'/img/passport.png'} alt='' className={styles.icon} width={72} height={72} />
      </div>
      <div className={classNames(styles.bottom, { [styles.reverse]: props.reverse })}>
        <div className={styles.colored} style={{ backgroundColor: `${props.secondColor}` }}>
          {props.coloredText}
        </div>
        <div className={styles.text}>
          {props.text}
        </div>
      </div>
    </div>
  )
}
