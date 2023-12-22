import classNames from 'classnames'
import Item from './Item'
import styles from './index.module.scss'

interface Props {

}

export default function Why(props: Props) {

  const items = [
    {
      image: '/img/fast.png', title: <>Быстрый путь<br /> к гражданству:</>,
      text: <>Получение гражданства Румынии, Болгарии<br />
        или Словении отличается своей доступностью<br /> и оперативностью, что делает их лучшим<br />
        выбором среди множества стран.</>
    },
    {
      image: '/img/economy.png', title: <>Экономичность<br /> и простота:</>,
      text: <>Низкие финансовые затраты и минимальные<br />
        бюрократические сложности делают эти<br />
        страны привлекательными для тех, кто ценит<br />
        экономию времени и ресурсов. Нет<br />
        необходимости покупать недвижимость и<br />
        находиться в стране во время рассмотрения<br />
        вашего дела.</>
    },
    {
      image: '/img/family.png', title: <>Гармоничные<br /> условия для семей:</>,
      text: <>Автоматическое приобретение гражданства<br />
        детьми в сопровождении родителей.Румынии,<br />
        Болгарии и Словении — это не только выбор<br />
        гражданства, но и стратегический шаг в<br />
        сторону благополучного будущего в Европе.</>
    },
  ]


  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Почему стоит выбрать Румынию, Болгарию или Словению<br />
        для получения гражданства ЕС?
      </div>
      <div className={styles.items}>
        {items.map((i, index) =>
          <Item
            className={classNames({ [styles.first]: index === 0, [styles.third]: index === 2 })}
            image={i.image}
            title={i.title}
            text={i.text}
            key={index} />
        )}
      </div>
    </div>
  )
}
