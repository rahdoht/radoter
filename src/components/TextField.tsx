import React, { ChangeEvent } from 'react'

interface TextFieldProps {
  label: string
  value: string
  setNumber: (event: ChangeEvent<HTMLInputElement>) => void
  fetchTraits: (event: ChangeEvent<HTMLInputElement>) => void
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  setNumber,
  fetchTraits,
}) => {
  return (
    <div className="flex mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type="number"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={value}
        onChange={setNumber}
        placeholder="enter wassie number"
      />
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={fetchTraits}
      >
        go
      </button>
    </div>
  )
}

export default TextField
