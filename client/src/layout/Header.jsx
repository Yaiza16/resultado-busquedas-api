import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'

import { IconContext } from 'react-icons'
import { useEffect, useMemo, useState } from 'react'

function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const [showReturn, setShowReturn] = useState(false)
  const memoizedIconContextStyle = useMemo(() => ({
    style: { fontSize: '30px', color: 'rgba(39, 39, 39, 0.651)' },
  }))

  const handleOnClick = () => {
    navigate('/', { replace: true })
  }

  useEffect(() => {
    if (location.pathname === '/dashboard') {
      setShowReturn(true)
    } else {
      setShowReturn(false)
    }
  }, [location])
  return (
    <header className="header-container">
      <IconContext.Provider value={memoizedIconContextStyle}>
        <div
          className={
            showReturn
              ? 'header-icon-container'
              : 'header-icon-container header-icon-container--disabled'
          }
          onClick={handleOnClick}
          aria-hidden="true"
        >
          {showReturn && <AiOutlineClose />}
        </div>
        <div className="header-right">
          <div className="header-icon-container header-icon-container--border">
            <BsPerson />
          </div>
          <div className="header-icon-container header-icon-container--border">
            <AiOutlineSearch />
          </div>
        </div>
      </IconContext.Provider>
    </header>
  )
}

export default Header
