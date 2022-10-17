import Head from 'next/head';
import Link from 'next/link';

const pages = [
  { level: 'newbie', challenge: 'nft-preview-card', title: 'NFT Preview Card' },
  { level: 'newbie', challenge: 'product-preview-card', title: 'Product Preview Card' },
  { level: 'newbie', challenge: 'interactive-rating-component', base: 'rate', title: 'Interactive Rating Component' },
]

export default function Home() {
  return (
    <div>
      <ul className='p-4'>
        {
          pages.map(({ level, challenge, base, title }) => (
            <li key={`${level}-${challenge}}`}>
              <Link href={`/${level}/${challenge}${base ? '/rate' : ''}`}>{`> ${title}`}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
