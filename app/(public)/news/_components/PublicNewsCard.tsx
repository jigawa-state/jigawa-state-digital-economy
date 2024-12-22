import { NewsType } from '@/typings'
import Image from 'next/image'
import Link from 'next/link'




export default function PublicNewsCard({ news }: { news: NewsType }) {
  return (
          <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-green-200">
            <Image
              src={news.imageUrl}
              alt={news.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-green-800 mb-2">{news.title}</h2>
              <p className="text-gray-600 mb-4">{news.content.substring(0, 100)}...</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600">{news.author.name}</span>
                <Link href={`/news/${news.slug}`} className="text-green-700 hover:text-green-900 font-medium">
                  Read More
                </Link>
              </div>
            </div>
          </div>
  )
}

