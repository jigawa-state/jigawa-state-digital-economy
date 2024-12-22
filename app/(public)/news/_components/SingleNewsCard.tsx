'use client'

import Image from 'next/image'
import { 
  LinkedinShareButton, LinkedinIcon,
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon
} from 'next-share'
import { NewsType } from '@/typings'



interface SingleNewsViewProps {
  news: NewsType
}

export default function SingleNewsCard({ news }: SingleNewsViewProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <div className="prose max-w-none mb-8">
          <p>{news.content}</p>
        </div>
        <div className="border-t border-green-200 pt-4">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Share this article</h2>
          <div className="flex space-x-4">
            <LinkedinShareButton url={shareUrl} title={news.title} content={news.content}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <FacebookShareButton url={shareUrl} quote={news.title} title={news.title} content={news.content}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={news.title} content={news.content}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
        </div>
      </article>
    </div>
  )
}

