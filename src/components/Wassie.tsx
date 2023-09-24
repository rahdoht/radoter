'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import TextField from '@/components/TextField'
import TraitGrid from '@/components/TraitGrid'

interface Trait {
  trait_type: string
  value: string
}

function WassieComponent(): JSX.Element {
  const [number, setNumber] = useState<number | null>(null)
  const [prev, setPrev] = useState<number | null>(null)
  const [wassieSrc, setWassieSrc] = useState<string>('/loomlock_8921.png')
  const [traits, setTraits] = useState<Trait[]>([])
  const [platitude, setPlatitude] = useState<string>('')
  const platitudes: string[] = [
    'looks rare',
    'excuse me ser this is one of a kind',
    'omg is this yours?',
    "they're all good wassies, brent",
    'all wassies are rare',
    '1 wassie = 1 wassie',
    'you found a unique wassie!',
    'kill this rare wassie immediately',
    'perfect for wassie soup',
    "i think loomdart's mom wanted this one",
    'this wassie would look good under a rug',
    'so much lucky',
    'there can be only one',
    'ay imma i lan boi',
    'pump it loomdart',
    'probably nothing',
  ]

  // useEffect(() => {
  //   fetchTraits(number, prev)
  // }, [number, prev])
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        fetchTraits(number, prev)
      }
    }

    const handleBlur = () => {
      fetchTraits(number, prev)
    }

    document.addEventListener('keydown', handleKeyPress)
    window.addEventListener('blur', handleBlur)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('blur', handleBlur)
    }
  }, [number, prev])

  const fetchTraits = async (
    number: number | null,
    prev: number | null,
  ): Promise<void> => {
    if (number !== prev) {
      const wassieSrc = `https://arweave.net/ABckdetHKeV8VgUoIZ53TMDKkTi56LhTf-Gb1Mdqx9c/${number}.png`
      setWassieSrc(wassieSrc)

      const url = `https://fruuydfac2a4b4v5rip3ovqv5gg2sbaqgcgwnbnztlbt7xed7ela.arweave.net/LGlMDKAWgcDyvYoft1YV6Y2pBBAwjWaFuZrDP9yD-RY/${number}.json`
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data: { attributes: Trait[] } = await response.json()
        setTraits(data.attributes)
        randomPlatitude()
        setPrev(number)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }

  const randomPlatitude = (): void => {
    const num: number = Math.floor(Math.random() * platitudes.length)
    setPlatitude(platitudes[num])
  }

  return (
    <div className="text-center">
      <div className="flex">
        <TextField
          label=""
          value={number || ''}
          setNumber={(e) => setNumber(e.target.value)}
          fetchTraits={() => fetchTraits(number, prev)}
        />
      </div>
      {platitude !== '' && (
        <div className="text-center">
          <h1>
            <span style={{ color: 'gray' }}>Rank</span> 1&nbsp;
            <span style={{ color: 'gray' }}>of</span> 12345
          </h1>
          {platitude}
        </div>
      )}
      <Image
        src={wassieSrc}
        alt="wassie"
        width={300}
        height={300}
        className="center"
      />
      {platitude !== '' && (
        <div className="text-center">
          <TraitGrid traits={traits} />
        </div>
      )}
    </div>
  )
}

export default WassieComponent
