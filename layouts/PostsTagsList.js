import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/config/siteMetadata'
import { useState } from 'react'

const postDateTemplate = { year: 'numeric', month: 'long', day: 'numeric' }

export default function PostsTagsList ({ posts, title }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredTags = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <>
      <div className='divide-y'>
        <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            {title}
          </h1>
          <div className='flex pt-5'>
            <div className='pt-2 pr-2'>
              Browse <a href='/blog/tags' className='underline'>tags</a> or
            </div>
            <div className='w-3/5 relative'>
              <input
                aria-label='Search tag posts'
                type='text'
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder='Search tag posts'
                className='w-full px-4 border rounded-md border-gray-900 focus:ring-blue-500 focus:border-blue-500 bg-gray-800 text-gray-100'
              />
              <svg
                className='absolute w-5 h-5 right-3 top-3 text-gray-300'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          </div>
        </div>
        <ul>
          {!filteredTags.length && 'No tags found.'}
          {filteredTags.map((frontMatter) => {
            const { type, slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className='py-4'>
                <article className='space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline'>
                  <dl>
                    <dt className='sr-only'>Published on</dt>
                    <dd className='text-base font-medium leading-6 text-gray-400'>
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                      </time>
                    </dd>
                  </dl>
                  <div className='space-y-3 xl:col-span-3'>
                    <div>
                      <h3 className='text-2xl font-bold leading-8 tracking-tight'>
                        <Link
                          href={`/${type}/${slug}`}
                          className='text-gray-100'
                        >
                          {title}
                        </Link>
                      </h3>
                      <div className='flex flex-wrap'>
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className='prose max-w-none text-gray-400'>
                      {summary}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
