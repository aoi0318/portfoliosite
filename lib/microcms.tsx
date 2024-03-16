import { createClient } from 'microcms-js-sdk'

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
})
