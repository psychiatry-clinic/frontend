import { create } from 'apisauce'

export const myApi = create({
  baseURL: 'http://192.168.0.150:4000',
})

myApi.setHeaders({ Authorization: 'token' })
