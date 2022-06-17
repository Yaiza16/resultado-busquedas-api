import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

import { IconContext } from 'react-icons'
import { useMemo } from 'react'

function Header() {
  const memoizedIconContextStyle = useMemo(() => ({
    style: { fontSize: '30px', color: 'rgba(39, 39, 39, 0.651)' },
  }))

  return (
    <header className="header-container">
      <IconContext.Provider value={memoizedIconContextStyle}>
        <div className="header-icon-container">
          <AiOutlineClose />
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
