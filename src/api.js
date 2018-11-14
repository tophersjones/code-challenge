import axios from 'axios'

const apiAddress = 'https://api.myjson.com/bins/16roa3'

export async function getReq () {
  try {
    const res = await axios.get(apiAddress)
    if (res.status !== 200) {
      throw Error (res.statusText)
    }
    return res.data
  } catch (error) {
    console.error(error)
  }
}

export async function putReq (data) {
  try {
    await axios.put(apiAddress, [
      ...data
    ])
  } catch (error) {
    console.error(error)
  }
}
