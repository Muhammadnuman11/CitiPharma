import { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
    })

    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data) {
            const parseData = JSON.parse(data)
            // console.log(parseData)
            setAuth(a => ({ ...a, user: parseData }))
        }
    }, [])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom Hook  
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }