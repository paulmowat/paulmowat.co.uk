import HomeWrapper from '@/components/HomeWrapper'
import { PageSEO } from '@/components/SEO'

import siteMetadata from '@/config/siteMetadata'

import SvgIcon from '@/components/svgs'

import Link from '@/components/Link'
// import LatestPosts from '@/layouts/LatestPosts'

import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps () {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home ({ posts }) {
  return (
    <>
      <HomeWrapper>
        <PageSEO
          title={siteMetadata.title}
          hideAuthor
          description={siteMetadata.description}
        />
        <main id='home'>
          <section className='h-screen flex flex-col justify-center items-start min-h-screen p-0 max-w-screen-md -mt-20'>
            <div className=''>
              <h1 className='pageTitle'>
                Hey, I'm Paul Mowat
              </h1>
            </div>
            <div className=''>
              <h2 className='pt-5 text-3xl leading-relaxed sm:text-4xl sm:leading-relaxed  md:text-4xl md:leading-relaxed '>
                I  build enterprise SaaS solutions for a living.
              </h2>
            </div>
            <div className=''>
              <p className='pt-5 text-1xl leading-relaxed sm:text-2xl sm:leading-relaxed  md:text-2xl md:leading-relaxed '>
                I'm a developer based near Aberdeen in Scotland and currently work for <Link href='https://www.oneadvanced.com' className='hover:text-blue-400'>OneAdvanced</Link> as a Principal Solution Architect.
              </p>
            </div>
            <div className='mt-10 flex mb-3 space-x-4'>
              <SvgIcon kind='github' href={siteMetadata.github} title='Github' target='_blank' />
              <SvgIcon kind='linkedin' href={siteMetadata.linkedin} title='LinkedIn' target='_blank' />
            </div>
            <div className='mt-10 flex justify-center items-stretch'>
              <Link href='/blog' className='btn mr-3'>View blog</Link>
              <Link href='/contact' className='btn'>Get in touch</Link>
            </div>
          </section>
          {/* <section id='main' className='main'>
            <LatestPosts posts={posts} />
          </section> */}
        </main>
      </HomeWrapper>
    </>
  )
}
