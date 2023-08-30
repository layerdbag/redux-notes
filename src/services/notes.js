import axios from "axios";

const baseUrl = 'http://localhost:5174/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async content => {
  const obj = { content, important: false }
  const res = await axios.post(baseUrl, obj)
  return res.data
}

const update = async (id, newObj) => {
  const res = await axios.put(baseUrl, id, newObj)
  return res.data
}


export default { 
  getAll,
  createNew,
  update
}