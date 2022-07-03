import { useState, useEffect } from 'react'
import GlobalAppState from '../contexts/GlobalAppState'
import getAllOwnedRepo from '../data/repos'

const GlobalAppStateWrapper = ({ children }) => {
  const [repos, setRepos] = useState()

  useEffect(() => {
    const invokeFn = async () => {
      const res = await getAllOwnedRepo()
      setRepos(res)
    }

    return invokeFn()
  }, [])

  const provider = {
    state: {
      repos,
    },
    setState: {
      setRepos,
    },
  }

  return (
    <GlobalAppState.Provider value={provider}>
      {children}
    </GlobalAppState.Provider>
  )
}

export default GlobalAppStateWrapper
