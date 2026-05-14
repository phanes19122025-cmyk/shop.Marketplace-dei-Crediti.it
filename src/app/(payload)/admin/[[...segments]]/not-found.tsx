/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { Metadata } from 'next'
import { generatePageMetadata, NotFoundPage } from '@payloadcms/next/views'
import config from '@payload-config'

type Args = { params: Promise<{ segments: string[] }> }

export const generateMetadata = ({ params }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params })

const NotFound = ({ params }: Args) => NotFoundPage({ config, params })
export default NotFound
