'use client'

const Error = ({ error }) => {
  return (
    <main className='error'>
        <h1>An error has ocurred!</h1>
        <p>{error.message}</p>
    </main>
  )
}

export default Error