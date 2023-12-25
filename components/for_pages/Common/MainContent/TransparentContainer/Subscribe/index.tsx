import { useRouter } from 'next/router'
import styles from './index.module.scss'
import classNames from 'classnames'
import { Routes } from '@/types/routes'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { useResize } from '@/components/hooks/useResize'

interface Props {

}

export default function Subscribe(props: Props) {

  const router = useRouter()

  const { isSmDesktopWidth, isPhoneWidth } = useResize()

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
      return isSmDesktopWidth ? '/img/bulgaria-phone-mobile.png' : '/img/bulgaria-phone.png'
    }
    else if (router.asPath === Routes.romania) {
      return isSmDesktopWidth ? '/img/romania-phone-mobile.png' : '/img/romania-phone.png'
    }
    else {
      return isSmDesktopWidth ? '/img/slovenia-phone-mobile.png' : '/img/slovenia-phone.png'
    }
  }



  return (
    <div className={classNames(styles.root, { [styles.bulgaria]: router.asPath === Routes.bulgaria })}>
      {!isSmDesktopWidth && <Image className={styles.phone} src={getImg()} alt='' fill />}
      <div className={styles.title}>
        Будьте первыми в курсе<br /> свежих новостей!
      </div>
      <div className={styles.text}>
        <>Переходите в наш Telegram канал, ведь там, мы публикуем самый{!isPhoneWidth && <br />}
          актуальный контент на тему получения гражданства по{!isPhoneWidth && <br />}
          государственной программе {getCountry()}</>
      </div>
      <Button
        className={styles.btn}
        font={getBtnFontColor()}
        color={'white'}>
        Подписаться на наш Тelegram канал
      </Button>
      {isSmDesktopWidth && <Image src={getImg()} alt='' width={253} height={235} />}
    </div>
  )
}
