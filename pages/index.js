import Head from 'next/head';
import Link from 'next/link';

const pages = [
  { level: 'newbie', challenge: 'nft-preview-card', title: 'NFT Preview Card' },
  { level: 'newbie', challenge: 'product-preview-card', title: 'Product Preview Card' },
]

export default function Home() {
  return (
    <div>
      <ul className='p-4'>
        {
          pages.map(({ level, challenge, title }) => (
            <li key={`${level}-${challenge}}`}>
              <Link href={`/${level}/${challenge}`}>{title}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
