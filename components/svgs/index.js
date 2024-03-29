import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Download from './download.svg'
import RSS from './rss.svg'
import Envelope from './envelope.svg'
import Spinner from './spinner.svg'
import Check from './check.svg'
import Work from './work.svg'
import Education from './education.svg'
import ArrowDown from './arrow-down.svg'
import Error from './error.svg'
import Spotify from './spotify.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  download: Download,
  rss: RSS,
  envelope: Envelope,
  spinner: Spinner,
  check: Check,
  work: Work,
  education: Education,
  'arrow-down': ArrowDown,
  error: Error,
  spotify: Spotify
}

const SvgIcon = ({ id, kind, title, target, href, height = 8, width = 8, containerClassName }) => {
  const SvgIcon = components[kind]

  if (!href) {
    return (
      <div className={containerClassName}>
        <span className='sr-only'>{kind}</span>
        <SvgIcon id={id} className={`fill-current h-${height} w-${width}`} />
      </div>
    )
  }

  return (
    <div className={containerClassName}>
      <a
        className='text-sm transition'
        target={target || '_self'}
        rel='noopener noreferrer'
        href={href}
        title={title || kind}
      >
        <span className='sr-only'>{kind}</span>
        <SvgIcon
          className={`fill-current hover:text-blue-400 h-${height} w-${width} text-center`}
        />
      </a>
    </div>
  )
}

export default SvgIcon
