import PageWrapper from '@/components/PageWrapper'
import { PageSEO } from '@/components/SEO'

import siteMetadata from '@/config/siteMetadata'
import Link from '@/components/Link'

export default function About () {
  return (
    <>
      <PageWrapper>
        <PageSEO
          title='About'
          description="Hey, I'm Paul Mowat. I'm a developer based near Aberdeen Scotland who currently works for OneAdvanced as an Principal Solution Architect."
        />
        <main id='about' className='divide-y'>
          <h1 className='pageTitle'>
            About
          </h1>
          <section className='main xl:grid-cols-3'>
            <div className='avatar'>
              <img src={siteMetadata.image} alt='avatar' />
            </div>
            <div className='content'>
              <p>
                Based near Aberdeen Scotland, I currently work for <Link href='https://www.oneadvanced.com'>OneAdvanced</Link> as an Principal Solution Architect.
              </p>
              <p>
                I have 20+ years experience designing, implementing, and supporting large-scale applications across multiple platforms and technologies.
              </p>
              <p>
                I specialise in the Agentic SDLC, DevOps, CI/CD, and Cloud Migration architecture, with a focus on standardisation and accelerating delivery on platforms like AWS, Azure, and Harness.
              </p>
              <p>
                I engage with stakeholders at all levels and external partners to ensure projects are designed and delivered according to best practices, whilst remaining aligned to business goals.
              </p>
              <p>
                I have experience in all areas of the SDLC, from design, and development, to infrastructure as code (IaC) and operation. My experience also extends to development using Node.js, Progress OpenEdge, C#, SQL Server, Java, HTML, CSS and Javascript.
              </p>
              <p>
                I am a strong advocate for best practices, security and cost optimization in cloud environments.
              </p>
              <p>
                I enjoy working within a team and have experience leading teams of developers using traditional and agile methodologies to meet tight deadlines.
              </p>
              <p>
                During my spare time, I also seek to continually improve my skills and knowledge and as such I enjoy learning about new emerging technologies.
              </p>
              <p>
                My other interests include photography, watching movies and spending time with my wife and son.
              </p>
            </div>
          </section>
        </main>
      </PageWrapper>
    </>
  )
}
