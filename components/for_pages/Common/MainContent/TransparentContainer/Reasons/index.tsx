import { useRouter } from 'next/router'
import styles from './index.module.scss'
import { Routes } from '@/types/routes'
import Privacy from './Privacy'
import { colors } from '@/styles/variables'
import Item from './Item'
import { useResize } from '@/components/hooks/useResize'

interface Props {

}

export default function Reasons(props: Props) {

  const router = useRouter()

  const { isPhoneWidth } = useResize()

  const getColor = () => {
    if (router.asPath !== Routes.bulgaria) {
      return 'linear-gradient(180deg, #4B85F6 0%, #275DC9 100%)'
    }
    else {
      return 'linear-gradient(180deg, #1FD1A1 0%, #00966E 100%)'
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

  const getItemColor = () => {
    if (router.asPath !== Routes.bulgaria) {
      return '#E0EAFF'
    }
    else {
      return '#D0EEE6'
    }
  }

  const getItemSecondColor = () => {
    if (router.asPath !== Routes.bulgaria) {
      return colors.blue
    }
    else {
      return colors.green
    }
  }

  const items = [
    {
      title: <>Получение гражданства<br /> за 2 года</>,
      coloredText: 'Революционный подход',
      text: 'отличный от традиционных 5-летних ВНЖ'
    },
    {
      title: 'Доступность',
      coloredText: 'Без необходимости',
      text: 'инвестиций в размере 500 000€'
    },
    {
      title: <>Личный статус<br /> гражданина</>,
      coloredText: <>к безграничным {isPhoneWidth && <br />} возможностям</>,
      text: 'Это не просто документ, а ключ'
    },
    {
      title: <>Расширенные<br /> возможности</>,
      coloredText: 'Забудьте об ограничениях',
      text: <>Бизнес, путешествия без виз, банковские счета,<br /> образование — все это теперь в ваших руках.</>
    },
  ]

  return (
    <div className={styles.root}>
      <div className={styles.title}>5 причин выбрать (компания) для оформления гражданства ЕС</div>
      <div className={styles.content}>
        <div className={styles.left}>
          <Privacy color={getColor()} fontColor={getBtnFontColor()} />
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            {items.slice(0, 2).map((i, index) =>
              <Item
                bigger={index === 0}
                stretch={index === 1}
                color={getItemColor()}
                secondColor={getItemSecondColor()}
                title={i.title}
                coloredText={i.coloredText}
                text={i.text}
                key={index}
              />
            )}
          </div>
          <div className={styles.bottom}>
            {items.slice(2).map((i, index) =>
              <Item
                bigger={index === 1}
                stretch={index === 0}
                color={getItemColor()}
                secondColor={getItemSecondColor()}
                title={i.title}
                coloredText={i.coloredText}
                text={i.text}
                reverse={index === 0}
                key={index}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
