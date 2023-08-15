import NavBar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <NavBar active={"home"} />

      <div className="bg-neutral-50 p-11 m-10 rounded-lg">
        <h2>Sua Casa 🏠</h2>
      </div>
    </>
  )
}
