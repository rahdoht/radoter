import React from 'react'
import Link from 'next/link'
import WassieComponent from '@/components/Wassie'

function WassiePage() {
  return (
    <div>
      <Link href="/">home</Link>
      <WassieComponent />
    </div>
  )
}

export default WassiePage
