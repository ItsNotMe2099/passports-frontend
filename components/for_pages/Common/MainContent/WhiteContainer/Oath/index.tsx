import { useRouter } from 'next/router'
import styles from './index.module.scss'
import Image from 'next/image'
import Item from '../../../Top/Item'
import { Routes } from '@/types/routes'

interface Props {

}

export default function Oath(props: Props) {

  const router = useRouter()

  const getImg = () => {
    if (router.asPath === Routes.bulgaria) {
      return '/img/bulgaria.png'
    }
    else if (router.asPath === Routes.romania) {
      return '/img/romania.png'
    }
    else {
      return '/img/slovenia.png'
    }
  }

  const getSymbol = () => {
    if (router.asPath === Routes.bulgaria) {
      return '/img/bulgaria-symbol.png'
    }
    else if (router.asPath === Routes.romania) {
      return '/img/romania-symbol.png'
    }
    else {
      return '/img/slovenia-symbol.png'
    }
  }

  const items = [
    {
      icon: <Image className={styles.icon} src={'/img/russia.png'} alt='' width={24} height={24} />,
      text: <>Клянусь быть преданным стране и румынскому<br /> народу, защищать права и национальные интересы,<br />
        соблюдать Конституцию и законы Румынии.</>
    },
    {
      icon: <Image className={styles.icon} src={getImg()} alt='' width={24} height={24} />,
      text: <>Jur să fiu devotat patriei şi poporului român, să<br />
        apăr drepturile şi interesele naţionale, să respect<br />
        Constituţia şi legile României..</>
    },
  ]

  return (
    <div className={styles.root}>
      <Image src={'/img/bg3.png'} alt='' fill />
      <div className={styles.left}>
        <div className={styles.title}>
          Текст присяги на гражданство
        </div>
        <div className={styles.items}>
          {items.map((i, index) =>
            <Item icon={i.icon} text={i.text} key={index} />
          )}
        </div>
      </div>
      <Image className={styles.symbol} src={getSymbol()} alt='' width={119} height={167} />
    </div>
  )
}
