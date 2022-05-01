export const getThisState: any = (stateName: string) => {
  try {
    const serializedState = localStorage.getItem(stateName)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const getItem: any = (itemName: string) => {
  const items = getThisState(itemName)
  if (items === undefined) {
    return {}
  } else {
    return items
  }
}
