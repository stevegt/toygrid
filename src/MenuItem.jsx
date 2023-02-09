import './MenuItem.scss'

import React from 'react'
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

const menuItem = ({
  icon, title, action, isActive = null,
}) => (
  <button
    className={`menu-item${isActive && isActive() ? ' is-active' : ''}`}
    onClick={action}
    title={title}
  >
    <svg className="remix">
      <use xlinkHref={`${remixiconUrl}#ri-${icon}`} />
    </svg>
  </button>
)

export default menuItem
