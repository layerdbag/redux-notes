import axios from 'axios'

export const getNotes = () => 
  axios.get('http://localhost:5174/notes').then(res => res.data)