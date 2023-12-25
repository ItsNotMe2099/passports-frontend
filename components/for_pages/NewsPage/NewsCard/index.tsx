import Image from 'next/image'
import styles from './index.module.scss'
import Link from 'next/link'
import ChevronRightSvg from '@/components/svg/ChevronRightSvg'
import { colors } from '@/styles/variables'

interface IItem {
  image: string
  title: string
  text: string
  date: string
}

interface Props {
  item: IItem
}

export default function NewsCard({ item }: Props) {

  return (
    <div className={styles.root}>
      <Image src={'/img/news-image.png'} alt='' fill />
      <div className={styles.title}>{item.title}</div>
      <div className={styles.text}>{item.text}</div>
      <div className={styles.bottom}>
        <div className={styles.date}>{item.date}</div>
        <Link href={'#'} className={styles.link}>
          <ChevronRightSvg color={colors.white} />
        </Link>
      </div>
    </div>
  )
}
