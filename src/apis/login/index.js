// import {get,post} from '@/api/index.js'
import $https from '@/apis/index.js'

export function cellphone(data){
  return $https.get('/login/cellphone',data)
}