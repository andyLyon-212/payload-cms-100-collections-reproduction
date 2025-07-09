// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Collection001 } from './collections/Collection001'
import { Collection002 } from './collections/Collection002'
import { Collection003 } from './collections/Collection003'
import { Collection004 } from './collections/Collection004'
import { Collection005 } from './collections/Collection005'
import { Collection006 } from './collections/Collection006'
import { Collection007 } from './collections/Collection007'
import { Collection008 } from './collections/Collection008'
import { Collection009 } from './collections/Collection009'
import { Collection010 } from './collections/Collection010'
import { Collection011 } from './collections/Collection011'
import { Collection012 } from './collections/Collection012'
import { Collection013 } from './collections/Collection013'
import { Collection014 } from './collections/Collection014'
import { Collection015 } from './collections/Collection015'
import { Collection016 } from './collections/Collection016'
import { Collection017 } from './collections/Collection017'
import { Collection018 } from './collections/Collection018'
import { Collection019 } from './collections/Collection019'
import { Collection020 } from './collections/Collection020'
import { Collection021 } from './collections/Collection021'
import { Collection022 } from './collections/Collection022'
import { Collection023 } from './collections/Collection023'
import { Collection024 } from './collections/Collection024'
import { Collection025 } from './collections/Collection025'
import { Collection026 } from './collections/Collection026'
import { Collection027 } from './collections/Collection027'
import { Collection028 } from './collections/Collection028'
import { Collection029 } from './collections/Collection029'
import { Collection030 } from './collections/Collection030'
import { Collection031 } from './collections/Collection031'
import { Collection032 } from './collections/Collection032'
import { Collection033 } from './collections/Collection033'
import { Collection034 } from './collections/Collection034'
import { Collection035 } from './collections/Collection035'
import { Collection036 } from './collections/Collection036'
import { Collection037 } from './collections/Collection037'
import { Collection038 } from './collections/Collection038'
import { Collection039 } from './collections/Collection039'
import { Collection040 } from './collections/Collection040'
import { Collection041 } from './collections/Collection041'
import { Collection042 } from './collections/Collection042'
import { Collection043 } from './collections/Collection043'
import { Collection044 } from './collections/Collection044'
import { Collection045 } from './collections/Collection045'
import { Collection046 } from './collections/Collection046'
import { Collection047 } from './collections/Collection047'
import { Collection048 } from './collections/Collection048'
import { Collection049 } from './collections/Collection049'
import { Collection050 } from './collections/Collection050'
import { Collection051 } from './collections/Collection051'
import { Collection052 } from './collections/Collection052'
import { Collection053 } from './collections/Collection053'
import { Collection054 } from './collections/Collection054'
import { Collection055 } from './collections/Collection055'
import { Collection056 } from './collections/Collection056'
import { Collection057 } from './collections/Collection057'
import { Collection058 } from './collections/Collection058'
import { Collection059 } from './collections/Collection059'
import { Collection060 } from './collections/Collection060'
import { Collection061 } from './collections/Collection061'
import { Collection062 } from './collections/Collection062'
import { Collection063 } from './collections/Collection063'
import { Collection064 } from './collections/Collection064'
import { Collection065 } from './collections/Collection065'
import { Collection066 } from './collections/Collection066'
import { Collection067 } from './collections/Collection067'
import { Collection068 } from './collections/Collection068'
import { Collection069 } from './collections/Collection069'
import { Collection070 } from './collections/Collection070'
import { Collection071 } from './collections/Collection071'
import { Collection072 } from './collections/Collection072'
import { Collection073 } from './collections/Collection073'
import { Collection074 } from './collections/Collection074'
import { Collection075 } from './collections/Collection075'
import { Collection076 } from './collections/Collection076'
import { Collection077 } from './collections/Collection077'
import { Collection078 } from './collections/Collection078'
import { Collection079 } from './collections/Collection079'
import { Collection080 } from './collections/Collection080'
import { Collection081 } from './collections/Collection081'
import { Collection082 } from './collections/Collection082'
import { Collection083 } from './collections/Collection083'
import { Collection084 } from './collections/Collection084'
import { Collection085 } from './collections/Collection085'
import { Collection086 } from './collections/Collection086'
import { Collection087 } from './collections/Collection087'
import { Collection088 } from './collections/Collection088'
import { Collection089 } from './collections/Collection089'
import { Collection090 } from './collections/Collection090'
import { Collection091 } from './collections/Collection091'
import { Collection092 } from './collections/Collection092'
import { Collection093 } from './collections/Collection093'
import { Collection094 } from './collections/Collection094'
import { Collection095 } from './collections/Collection095'
import { Collection096 } from './collections/Collection096'
import { Collection097 } from './collections/Collection097'
import { Collection098 } from './collections/Collection098'
import { Collection099 } from './collections/Collection099'
import { Collection100 } from './collections/Collection100'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  collections: [Pages, Posts, Media, Categories, Users, Collection001, Collection002, Collection003, Collection004, Collection005, Collection006, Collection007, Collection008, Collection009, Collection010, Collection011, Collection012, Collection013, Collection014, Collection015, Collection016, Collection017, Collection018, Collection019, Collection020, Collection021, Collection022, Collection023, Collection024, Collection025, Collection026, Collection027, Collection028, Collection029, Collection030, Collection031, Collection032, Collection033, Collection034, Collection035, Collection036, Collection037, Collection038, Collection039, Collection040, Collection041, Collection042, Collection043, Collection044, Collection045, Collection046, Collection047, Collection048, Collection049, Collection050, Collection051, Collection052, Collection053, Collection054, Collection055, Collection056, Collection057, Collection058, Collection059, Collection060, Collection061, Collection062, Collection063, Collection064, Collection065, Collection066, Collection067, Collection068, Collection069, Collection070, Collection071, Collection072, Collection073, Collection074, Collection075, Collection076, Collection077, Collection078, Collection079, Collection080, Collection081, Collection082, Collection083, Collection084, Collection085, Collection086, Collection087, Collection088, Collection089, Collection090, Collection091, Collection092, Collection093, Collection094, Collection095, Collection096, Collection097, Collection098, Collection099, Collection100],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
