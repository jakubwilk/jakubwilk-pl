'use client'

interface IProps {
  error: string
}

export function ConnectionError({ error }: IProps) {
  return (
    <div className={'w-full max-w-[500px] mx-auto mt-8 p-4 connection-error'}>
      <p className={'text-center px-4'}>{error}</p>
    </div>
  )
}
