import React from 'react'
import { Link } from '@inertiajs/react'

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      {/* <Link href="/">
         Go to Home
      </Link> */}
      <Link prefetch href={route('home')}>
         Go to Home
      </Link>
    </div>
  )
}
