const baseUrl = location.hostname
let baseApi
switch (baseUrl) {
  case 'www.lebronjames.top':
    baseApi = 'https://www.lebronjames.top/api/'
    break
  case 'lebronjames.top':
    baseApi = 'https://www.lebronjames.top/api/'
	break
  case 'localhost':
  default:
    // baseApi = 'http://localhost:3000/api/'
    baseApi = 'https://www.lebronjames.top/api/'
    break
}
export default baseApi