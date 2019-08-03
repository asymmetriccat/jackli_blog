import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src="images/about.jpg" alt="Me" />
      <h2>
        The only way to do great work is to love what you do. If you
        haven't found it yet, keep looking. Don't settle.
      </h2>
    </div>
  )
}

export default Bio
