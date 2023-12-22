import Link from 'next/link'
import styles from './index.module.scss'
import { useAppContext } from '@/context/state'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import Logo from '@/components/for_pages/Common/Logo'
import { useRouter } from 'next/router'
import { Routes } from '@/types/routes'
import { colors } from '@/styles/variables'
import { CONTACTS } from '@/types/types'
import TelegramSvg from '@/components/svg/TelegramSvg'
import WhatsappSvg from '@/components/svg/WhatsappSvg'
import Button from '@/components/ui/Button'
import DropdownMenu from '@/components/ui/DropdownMenu'
import cookie from 'js-cookie'

interface Props {
  distanceFromTop: number
}

export default function Header(props: Props) {
  const appContext = useAppContext()
  const [fromTop, setFromTop] = useState<number>(0)

  const getBtnFontColor = () => {
    if (router.asPath === Routes.news) {
      return 'white-font'
    }
    else if (props.distanceFromTop < 0) {
      return 'white-font'
    }
    else {
      return 'black-font'
    }
  }

  const getBtnColor = () => {
    if (router.asPath === Routes.news) {
      return 'blue'
    }
    else if (props.distanceFromTop < 0 && router.asPath !== Routes.bulgaria) {
      return 'blue'
    }
    else if (props.distanceFromTop < 0 && router.asPath === Routes.bulgaria) {
      return 'green'
    }
    else {
      return 'white'
    }
  }

  const getLogoColor = () => {
    if (router.asPath === Routes.news) {
      return colors.dark
    }
    else if (props.distanceFromTop < 0) {
      return colors.dark
    }
    else {
      return colors.white
    }
  }

  const router = useRouter()

  const menu = router.asPath === Routes.news ? [
    { label: 'Гражданство', link: '#' },
    { label: 'Блог', link: '#' },
    { label: 'О нас', link: '#' },
    { label: 'Контакты', link: '#' },
  ] :
    [
      { label: 'Гражданство', link: '#' },
      { label: 'Блог', link: '#' },
      { label: 'Контакты', link: '#' },
    ]

  const options = [
    { icon: '/img/romania.png', label: 'Гражданство Румынии', link: Routes.romania, value: 'romania' },
    { icon: '/img/bulgaria.png', label: 'Гражданство Болгарии', link: Routes.bulgaria, value: 'bulgaria' },
    { icon: '/img/slovenia.png', label: 'Гражданство Словении', link: Routes.slovenia, value: 'slovenia' },
  ]

  useEffect(() => {
    // if(!isTabletWidth) {
    if (props.distanceFromTop > fromTop && props.distanceFromTop <= -40) {
      appContext.setDirection('up')
      setFromTop(props.distanceFromTop)
    }
    else if (props.distanceFromTop < fromTop && props.distanceFromTop <= -40) {
      appContext.setDirection('down')
      // !isTabletWidth && setDropDownOpen(false)
      setFromTop(props.distanceFromTop)
    }
    else {
      appContext.setDirection('up')
    }
    // }
  }, [props.distanceFromTop])

  console.log(props.distanceFromTop)

  return (
    <div className={classNames(styles.root,
      styles[appContext.headerDirection],
      { [styles.news]: router.asPath === Routes.news, [styles.fromTop]: props.distanceFromTop < 0 })}>
      <div className={styles.wrapper}>
        <Logo color={getLogoColor() as string} />
        <div className={styles.menu}>
          {menu.map((i, index) =>
            <Link href={i.link} key={index} className={classNames(styles.item, { [styles.black]: router.asPath === Routes.news || props.distanceFromTop < 0 })}>
              {i.label}
            </Link>
          )}
        </div>
        <div className={styles.right}>
          {router.asPath !== Routes.news &&
            <DropdownMenu
              optionClick={(item) => cookie.set('country', item.value, { expires: 365 * 3 })}
              color={getLogoColor()}
              options={options} />}
          <a href={CONTACTS.telegram}>
            <TelegramSvg />
          </a>
          <a href={CONTACTS.whatsapp}>
            <WhatsappSvg />
          </a>
          <Button
            font={getBtnFontColor()}
            color={getBtnColor()}>
            Оставить заявку
          </Button>
        </div>
      </div>
    </div>
  )
}
