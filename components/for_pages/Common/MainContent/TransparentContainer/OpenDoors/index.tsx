import ShieldSvg from '@/components/svg/ShieldSvg'
import Item from '../../../Top/Item'
import styles from './index.module.scss'
import { colors } from '@/styles/variables'
import Image from 'next/image'

interface Props {

}

export default function OpenDoors(props: Props) {

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.company}>company</div>
        <div className={styles.title}>
          Откройте двери своего будущего с<br /> гражданством Словении, Болгарии или Румынии!
        </div>
        <ul className={styles.list}>
          <li>Паспорт Евросоюза — это билет к свободе передвижения, карьерному<br />
            успеху и доступу к образованию и медицинской помощи.Мы<br />
            предоставляем уникальное предложение в области миграционных<br />
            услуг в СНГ. Вы сможете оформить гражданство Европейского союза —<br />
            не только для себя, но и для своей семьи.</li>
        </ul>
      </div>
      <div className={styles.right}>
        <Image src={'/img/bg2.png'} alt='' fill />
        <Item className={styles.item}
          icon={<ShieldSvg color={colors.white} />}
          text={<>Гарантировано и без<br /> скрытых платежей</>} />
      </div>
    </div>
  )
}
