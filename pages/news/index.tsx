import PageContent from '@/components/for_pages/Common/PageContent'
import Layout from '@/components/layout/Layout'
import styles from './index.module.scss'
import TransparentContainer from '@/components/for_pages/Common/TransparentContainer'
import NewsCard from '@/components/for_pages/NewsPage/NewsCard'

export default function News() {

  const news = [
    {
      image: '/img/news-image.png',
      title: '12 Мифов о гражданстве Румынии',
      text: 'Распространенные заблуждения о программе восстановления гражданства Румынии.',
      date: '28 декабря 2023 года'
    },
    {
      image: '/img/news-image.png',
      title: '12 Мифов о гражданстве Румынии',
      text: 'Распространенные заблуждения о программе восстановления гражданства Румынии.',
      date: '28 декабря 2023 года'
    },
    {
      image: '/img/news-image.png',
      title: '12 Мифов о гражданстве Румынии',
      text: 'Распространенные заблуждения о программе восстановления гражданства Румынии.',
      date: '28 декабря 2023 года'
    },
    {
      image: '/img/news-image.png',
      title: '12 Мифов о гражданстве Румынии',
      text: 'Распространенные заблуждения о программе восстановления гражданства Румынии.',
      date: '28 декабря 2023 года'
    },
  ]

  return (
    <Layout>
      <PageContent className={styles.news}>
        <TransparentContainer>
          <div className={styles.title}>
            Новости компании
          </div>
          <div className={styles.items}>
            {news.map((i, index) =>
              <NewsCard item={i} key={index} />
            )}
          </div>
        </TransparentContainer>
      </PageContent>
    </Layout>
  )
}
