import Button, { ButtonColor, ButtonFont } from '@/components/ui/Button'
import styles from './index.module.scss'
import CheckSvg from '@/components/svg/CheckSvg'
import { ReactElement } from 'react'
import { colors } from '@/styles/variables'

interface IOption {
  text: string | ReactElement
}

interface IItem {
  title: string
  cost: string
  for: string
  options: IOption[]
}

interface Props {
  color: string
  btnColor: ButtonColor
  btnFontColor: ButtonFont
  item: IItem
  separatorColor: string
  checkColor: string
}

export default function Item(props: Props) {

  return (
    <div className={styles.root} style={{ backgroundColor: `${props.color}` }}>
      <div className={styles.top}>
        <div className={styles.title}>
          {props.item.title}
        </div>
        <div className={styles.for}>
          <div className={styles.cost}>
            {props.item.cost}
          </div>
          <div className={styles.rus}>
            {props.item.for}
          </div>
        </div>
        <div className={styles.separator} style={{ backgroundColor: `${props.separatorColor}` }} />
        <div className={styles.list}>
          {props.item.options.map((i, index) =>
            <div className={styles.option} key={index}>
              <CheckSvg color={props.checkColor} />
              <div className={styles.text}>{i.text}</div>
            </div>
          )}
        </div>
      </div>
      <Button
        className={styles.btn}
        font={props.btnFontColor}
        color={props.btnColor}>
        Бесплатная консультация
      </Button>
    </div>
  )
}
