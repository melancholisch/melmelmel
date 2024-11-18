export async function fetchData() {
    try {
      const response = await fetch('/data/about.json')
      const json = await response.json()
      return json
    } catch (error) {
      console.error(new Error(error))
      return {}
    }
  }