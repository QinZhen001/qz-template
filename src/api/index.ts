// TODO:for fetch api from backend
// can use fetch or axios

export async function apiGetXXXData(data: any) {
  const url = 'https://api.example.com/xxx'
  let resp: any = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  resp = (await resp.json()) || {}

  return resp.data || {}
}
