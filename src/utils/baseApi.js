const baseUrl = location.hostname
let baseApi
switch (baseUrl) {
  case 'www.lebronjames.top' || 'lebronjames.top':
    baseApi = 'https://www.lebronjames.top/api/'
    break
  case 'localhost':
  default:
    baseApi = 'http://localhost:7654/api/'
    break
}
export default baseApi