import { Metadata } from 'next'
// import SingleNewsCard from '@/components/SingleNewsCard'
import SingleNewsCard from '../_components/SingleNewsCard'
import { NewsType } from '@/typings'
import { getNewsBySlug } from '@/actions/news'
import { NewsBanner } from '../_components/NewsBanner'



export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const news = await getNewsBySlug(params.slug) as NewsType
  return {
    title: news.title,
    description: news.content.substring(0, 160),
    openGraph: {
      title: news.title,
      description: news.content.substring(0, 160),
      images: [{ url: news.imageUrl }],
    },
  }
}

export default async function NewsPage({ params }: { params: { slug: string } }) {
  const news = await getNewsBySlug(params.slug) as NewsType
  return (
    <div className="">
        <NewsBanner message={news.title}
        author={news.author.name}
        title={news.title}
        imageUrl={news.imageUrl} />
        <SingleNewsCard news={news} />
    </div>
  )
}

