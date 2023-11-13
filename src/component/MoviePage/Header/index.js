import React, { useState } from 'react'
import style from './assets/style.module.css'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'

export default function Header() {
  const [isMenuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  return (
    <header>
      <div className={style.headerTitle}>
        <Link style={{ textDecoration: 'none', color: 'rgb(76, 161, 201)' }}>
          <h1>Movie App</h1>
        </Link>
      </div>
      <div className={style.headerList}>
        <ul>
          <li>
            <Link style={{ textDecoration: 'none' }}>Featured</Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }}>TV series</Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }}>Movie </Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }}>Variety</Link>
          </li>
          <li>
            <Link style={{ textDecoration: 'none' }}>Community</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link>
          <img
            src="/images/userprofile.png"
            className={style.headerUserProfile}
          />
        </Link>
      </div>
      <div className={style.dropdownMenu}>
        {isMenuVisible ? (
          <>
            <RxCross1 className={style.crossButton} onClick={toggleMenu} />

            <ul className={style.dropdownContent}>
              <li>
                <Link className={style.dropdownContentItem}>Profile</Link>
              </li>
              <li>
                <Link className={style.dropdownContentItem}>Featured</Link>
              </li>
              <li>
                <Link className={style.dropdownContentItem}>TV series</Link>
              </li>
              <li>
                <Link className={style.dropdownContentItem}>Movie</Link>
              </li>
              <li>
                <Link className={style.dropdownContentItem}>Variety</Link>
              </li>
              <li>
                <Link className={style.dropdownContentItem}>Community</Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <AiOutlineMenu className={style.menuButton} onClick={toggleMenu} />
          </>
        )}
      </div>
    </header>
  )
}
