import Button, { ButtonFont } from '@/components/ui/Button'
import styles from './index.module.scss'
import Image from 'next/image'

interface Props {
  color: string
  fontColor: ButtonFont
}

export default function Privacy(props: Props) {

  return (
    <div className={styles.root} style={{ background: `${props.color}` }}>
      <Image className={styles.img} src={'/img/shield.png'} alt='' width={200} height={200} />
      <div className={styles.top}>
        <div className={styles.title}>
          Уверенность в<br /> конфиденциальности
        </div>
        <div className={styles.text}>
          <p>Мы общаемся напрямую с<br /> Министерством Юстиции.<br /> Никаких посредников,</p>
          <p>ваша конфиденциальность<br /> — наш приоритет.</p>
        </div>
      </div>
      <Button
        font={props.fontColor}
        className={styles.btn}
        color={'white'}>
        Бесплатная консультация
      </Button>
    </div >
  )
}
