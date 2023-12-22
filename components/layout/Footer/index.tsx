import styles from './index.module.scss'
import { colors } from '@/styles/variables'
import Logo from '@/components/for_pages/Common/Logo'
import { CONTACTS } from '@/types/types'
import Link from 'next/link'
import VKSvg from '@/components/svg/VKSvg'
import YandexDzenSvg from '@/components/svg/YandexDzenSvg'
import RutubeSvg from '@/components/svg/Rutube'
import TgSvg from '@/components/svg/TgSvg'
import YoutubeSvg from '@/components/svg/YoutubeSvg'
import { useRouter } from 'next/router'
import { Routes } from '@/types/routes'

interface Props {

}

export default function Footer(props: Props) {

  const router = useRouter()

  const options = [
    { label: 'Гражданство', link: '#' },
    { label: 'Блог', link: '#' },
    { label: 'О компании', link: '#' },
    { label: 'Контакты', link: '#' },
  ]

  const socials = [
    { icon: <VKSvg />, label: 'VK', link: '#' },
    { icon: <YandexDzenSvg />, label: 'Yandex Dzen', link: '#' },
    { icon: <RutubeSvg />, label: 'Rutube', link: '#' },
    { icon: <TgSvg />, label: 'Telegram', link: '#' },
    { icon: <YoutubeSvg />, label: 'Youtube', link: '#' },
  ]

  const links = router.asPath === Routes.romania ? [
    { link: CONTACTS.romaniaEmbassy, text: 'Посольство Румынии в Российской Фелерации' },
    { link: CONTACTS.ministryRomania, text: 'Управление по гражданству Минюста Румынии' },
    { link: CONTACTS.consulatRomania, text: 'Портал консульских услуг МИДа Румынии' },
  ] :
    router.asPath === Routes.bulgaria ? [
      { link: CONTACTS.bulgariaEmbassy, text: 'Посольство Болгарии в Российской Фелерации' },
      { link: CONTACTS.ministryBulgaria, text: 'Управление по гражданству Минюста Болгарии' },
      { link: CONTACTS.consulatBulgaria, text: 'Портал консульских услуг МИДа Болгарии' },
    ] :
      [
        { link: CONTACTS.sloveniaEmbassy, text: 'Посольство Словении в Российской Фелерации' },
        { link: CONTACTS.ministrySlovenia, text: 'Управление по гражданству Минюста Словении' },
        { link: CONTACTS.consulatSlovenia, text: 'Портал консульских услуг МИДа Словении' },
      ]

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Logo color={colors.dark} />
          <div className={styles.address}>
            {CONTACTS.address}
          </div>
          <div className={styles.links}>
            {links.map((i, index) =>
              <a key={index} href={i.link}>{i.text}</a>
            )}
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.title}>
            Меню
          </div>
          <div className={styles.options}>
            {options.map((i, index) =>
              <Link href={i.link} key={index} className={styles.option}>
                {i.label}
              </Link>
            )}
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.title}>
            Мы в соцсетях
          </div>
          <div className={styles.options}>
            {socials.map((i, index) =>
              <Link href={i.link} key={index} className={styles.item}>
                {i.icon}
                <div className={styles.label}>{i.label}</div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
