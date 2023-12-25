import { useRouter } from 'next/router'
import Item from './Item'
import styles from './index.module.scss'
import { Routes } from '@/types/routes'
import { colors } from '@/styles/variables'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import DocumentSvg from '@/components/svg/DocumentSvg'
import HomeSvg from '@/components/svg/HomeSvg'
import CaseSvg from '@/components/svg/CaseSvg'
import AcademicSvg from '@/components/svg/AcademicSvg'
import CoinsSvg from '@/components/svg/CoinsSvg'
import AwardSvg from '@/components/svg/AwardSvg'

interface Props {

}

export default function Free(props: Props) {

  const router = useRouter()

  const items = [
    {
      icon: <DocumentSvg color={router.asPath === Routes.bulgaria ? colors.green : colors.blue} />,
      title: 'Безвизовые путешествия:',
      text: <>Статус гражданина стран Евросоюза обеспечивает безвизовые поездки по всему миру,<br />
        делая путешествия свободными и удобными.</>
    },
    {
      icon: <HomeSvg color={router.asPath === Routes.bulgaria ? colors.green : colors.blue} />,
      title: 'Финансовая стабильность:',
      text: <>Гражданство открывает доступ к надежной банковской системе пы, обеспечивая устойчивое<br />
        управление финансами.</>
    },
    {
      icon: <CaseSvg color={router.asPath === Routes.bulgaria ? colors.green : colors.blue} />,
      title: 'Официальное трудоустройство',
      text: <>Гражданство Румынии дает право работать в каждом из государств Евросоюза без<br />
        предварительного оформления разрешений.</>
    },
    {
      icon: <AcademicSvg color={router.asPath === Routes.bulgaria ? colors.green : colors.blue} />,
      title: 'Свобода выбора места жительства:',
      text: <>Граждане Румынии, Болгарии и Словении имеют право выбора места своего проживания в<br />
        рамках Европейского союза. Вы получите разнообразные перспективы для личного и<br />
        профессионального роста.</>
    },
    {
      icon: <CoinsSvg color={router.asPath === Routes.bulgaria ? colors.green : colors.blue} />,
      title: 'Предпринимательская свобода:',
      text: <>Граждане имеют право на свободное ведение бизнеса в странах Европейского союза с<br />
        благоприятными условиями для расширения и развития бизнеса.</>
    },
    {
      icon: <AwardSvg color={router.asPath === Routes.bulgaria ? colors.green : colors.blue} />,
      title: 'Европейское образование:',
      text: <>Гражданам предоставляется возможность получения образования в престижных учебных<br />
        заведениях пы, что способствует профессиональному и личному развитию.</>
    },
  ]

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Image src={'/img/passport.png'} alt='' className={styles.icon} fill />
        <div className={styles.title}>
          Стать свободным<br />
          гражданином<br />
          Румынии, Словении и<br />
          Болгарии с нашей<br />
          экспертной<br />
          поддержкой<br />
          — это просто!
        </div>
        <Button
          className={styles.btn}
          font={'white-font'}
          color={router.asPath === Routes.bulgaria ? 'green' : 'blue'}>
          Бесплатная консультация
        </Button>
      </div>
      <div className={styles.right}>
        {items.map((i, index) =>
          <Item item={i} key={index} />
        )}
      </div>
    </div>
  )
}
