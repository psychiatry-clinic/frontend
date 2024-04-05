import { ofetch } from 'ofetch'

export const $api = ofetch.create({
  baseURL: 'http://localhost:4000',
  async onRequest({ options }) {
    const accessToken = useCookie('accessToken').value
    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }
  },
})
