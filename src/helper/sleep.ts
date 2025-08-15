export const sleep = (second: number = 1) => {
  return new Promise((res) => {
    setTimeout(res, second * 1000)
  })
}
