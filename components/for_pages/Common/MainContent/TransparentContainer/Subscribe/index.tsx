import { useRouter } from 'next/router'
import styles from './index.module.scss'
import classNames from 'classnames'
import { Routes } from '@/types/routes'
import Button from '@/components/ui/Button'
import Image from 'next/image'

interface Props {

}

export default function Subscribe(props: Props) {

  const router = useRouter()

  const getCountry = () => {
    if (router.asPath === Routes.bulgaria) {
      return 'Болгарии'
    }
    else if (router.asPath === Routes.slovenia) {
      return 'Словении'
    }
    else {
      return 'Румынии'
    }
  }

  const getBtnFontColor = () => {
    if (router.asPath !== Routes.bulgaria) {
      return 'blue-font'
    }
    else {
      return 'green-font'
    }
  }

  const getImg = () => {
    if (router.asPath === Routes.bulgaria) {
      return '/img/bulgaria-phone.png'
    }
    else if (router.asPath === Routes.romania) {
      return '/img/romania-phone.png'
    }
    else {
      return '/img/slovenia-phone.png'
    }
  }

  return (
    <div className={classNames(styles.root, { [styles.bulgaria]: router.asPath === Routes.bulgaria })}>
      <Image className={styles.phone} src={getImg()} alt='' fill />
      <div className={styles.title}>
        Будьте первыми в курсе<br /> свежих новостей!
      </div>
      <div className={styles.text}>
        <>Переходите в наш Telegram канал, ведь там, мы публикуем самый<br />
          актуальный контент на тему получения гражданства по<br />
          государственной программе {getCountry()}</>
      </div>
      <Button
        font={getBtnFontColor()}
        color={'white'}>
        Подписаться на наш Тelegram канал
      </Button>
    </div>
  )
}
