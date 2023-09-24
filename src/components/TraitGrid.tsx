import React from 'react'

interface Trait {
  trait_type: string
  value: string
}

interface TraitGridProps {
  traits: Trait[]
}

const TraitGrid: React.FC<TraitGridProps> = ({ traits }) => {
  return (
    <div className="text-center">
      <table className="table-auto mx-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Trait Type</th>
            <th className="px-4 py-2">Trait Value</th>
          </tr>
        </thead>
        <tbody>
          {traits.map((trait) => (
            <tr key={trait.trait_type}>
              <td className="border-b text-left px-2 py-1">
                {trait.trait_type}
              </td>
              <td className="border-b text-right px-2 py-1">{trait.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TraitGrid
