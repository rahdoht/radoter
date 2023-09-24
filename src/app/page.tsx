'use client'

import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

function App() {
  return (
    <div>
      <h1>rahdoht</h1>
      <div>
        <Image
          src="/loomlock_8921.png"
          alt="Wassie 8921"
          width={200}
          height={24}
          priority
        />
      </div>
      <Link href="/wassies">wassies</Link>
    </div>
  )
}

export default App
