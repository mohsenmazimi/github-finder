import axios from 'axios'
const Github = () => {
  return axios.create({
    baseURL: "https://api.github.com/users",
    headers: 'Client secret bf979a181c444cd3856b512843f6d8d27b2f48d3'
  })
}
export default Github