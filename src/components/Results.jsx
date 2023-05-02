import React from 'react'

export default function Results({results}) {
  const len = results.length
  return (
    <div>
      {results.map((result)=>(
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  )
}
