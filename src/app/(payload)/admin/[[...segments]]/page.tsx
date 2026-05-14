/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { Metadata } from 'next'
import { generatePageMetadata, RootPage } from '@payloadcms/next/views'
import config from '@payload-config'

type Args = { params: Promise<{ segments: string[] }> }

export const generateMetadata = ({ params }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params })

const Page = ({ params }: Args) => RootPage({ config, params })
export default Page
