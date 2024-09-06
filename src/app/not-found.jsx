import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react'

const NotFound = async () => {
    const headersList = headers()
    const domain = headersList.get('host')
  return (
    <div>
        <h1>Not Found: {domain}</h1>
    </div>
  )
}

export default NotFound;