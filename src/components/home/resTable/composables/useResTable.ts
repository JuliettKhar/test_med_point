export function useResTable(
  emit: (event: string, ...args: any[]) => void,
  root: any
) {
  const paginateTable = (page: number) => {
    emit('pagination', page)
    root.$router.push({query: {page: String(page)}})
  }
  
  return {
    paginateTable 
  }
}
