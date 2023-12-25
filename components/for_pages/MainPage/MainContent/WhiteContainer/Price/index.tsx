import { useRouter } from 'next/router'
import Item from './Item'
import styles from './index.module.scss'
import { Routes } from '@/types/routes'
import { colors } from '@/styles/variables'

interface Props {

}

export default function Price(props: Props) {

  const items = [
    {
      title: 'Личная подача', cost: '7500 €', for: 'для граждан РФ', options: [
        { text: <>Ассистент для сбора<br /> документов.</> },
        { text: 'Запись на визит.' },
        {
          text: <>Оформление документов для<br />
            представления в Румынии,<br />
            Словении и Болгарии, и<br />
            сопровождение эксперта при<br />
            подаче документации</>
        },
      ]
    },
    {
      title: 'Все включено', cost: '9500 €', for: 'для граждан РФ', options: [
        { text: 'Личный ассистент.' },
        { text: <>Организация визита в<br /> столицу.</> },
        {
          text: <>Подготовка всей<br /> документации.</>
        },
        {
          text: <>Сопровождение при<br />
            подаче документов.</>
        },
        { text: <>Управление кейсом от<br /> подачи до приказа.</> },
        { text: <>Запись на церемонию<br /> присяги, подготовка к ней,<br /> сопровождение при<br /> присяге.</> },
        {
          text: <>Помощь с внутренними<br /> документами (паспорт<br /> гражданина ЕС,<br />
            заграничный паспорт и<br /> водительское<br /> удостоверение)</>
        },
      ]
    },
    {
      title: 'Личная подача', cost: '3500 €', for: 'для граждан Молдовы', options: [
        { text: <>Ассистент для сбора<br /> документов.</> },
        { text: 'Запись на визит.' },
        {
          text: <>Оформление документов для<br />
            представления в Румынии,<br />
            Словении и Болгарии, и<br />
            сопровождение эксперта при<br />
            подаче документации</>
        },
      ]
    },
    {
      title: 'Все включено', cost: '5500 €', for: 'для граждан Молдовы', options: [
        { text: 'Личный ассистент.' },
        { text: <>Организация визита в<br /> столицу.</> },
        {
          text: <>Подготовка всей<br /> документации.</>
        },
        {
          text: <>Сопровождение при<br />
            подаче документов.</>
        },
        { text: <>Управление кейсом от<br /> подачи до приказа.</> },
        { text: <>Запись на церемонию<br /> присяги, подготовка к ней,<br /> сопровождение при<br /> присяге.</> },
        {
          text: <>Помощь с внутренними<br /> документами (паспорт<br /> гражданина ЕС,<br />
            заграничный паспорт и<br /> водительское<br /> удостоверение)</>
        },
      ]
    },
  ]

  const router = useRouter()

  const getItemColor = () => {
    if (router.asPath !== Routes.bulgaria) {
      return '#F3F6FC'
    }
    else {
      return '#EDF5F3'
    }
  }

  const getItemBtnColor = () => {
    if (router.asPath !== Routes.bulgaria) {
      return 'light-blue'
    }
    else {
      return 'light-green'
    }
  }

  const getItemBtnFontColor = () => {
    if (router.asPath !== Routes.bulgaria) {
      return 'blue-font'
    }
    else {
      return 'green-font'
    }
  }

  const getItemSeparatorColor = () => {
    if (router.asPath !== Routes.bulgaria) {
      return '#E0EAFF'
    }
    else {
      return '#BCE8DC'
    }
  }

  const getItemCheckColor = () => {
    if (router.asPath !== Routes.bulgaria) {
      return colors.blue
    }
    else {
      return colors.green
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Стоимость получения гражданства
      </div>
      <div className={styles.items}>
        {items.map((i, index) =>
          <Item
            item={i}
            key={index}
            color={getItemColor()}
            btnColor={getItemBtnColor()}
            btnFontColor={getItemBtnFontColor()}
            separatorColor={getItemSeparatorColor()}
            checkColor={getItemCheckColor()}
          />
        )}
      </div>
    </div>
  )
}
