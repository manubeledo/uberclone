import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'

export default function Home() {

  return (
      <Wrapper>
        <Map/>
        <ActionItems>
          <Header>
            <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
            <Profile>
              <Name>Manuel Beledo</Name>
              <UserImage src="https://www.wallpapertip.com/wmimgs/24-241580_nerv.png"/>
            </Profile>
          </Header>
          <ActionButtons>
            <Link href='/search'>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
            </Link>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
              Wheels
            </ActionButton>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
              Reserve
            </ActionButton>
          </ActionButtons>
          <InputButton>Where to?</InputButton>
        </ActionItems>
      </Wrapper>
  )
}

const Wrapper = tw.div`
flex flex-col h-screen
`

const ActionItems = tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`
h-28
`
const Profile = tw.div`
flex items-center
`
const Name = tw.div`
mr-4 w-24 text-sm
`
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`
const ActionButtons = tw.div`
flex flex-row
`
const ActionButton = tw.button`
flex flex-col bg-gray-200 flex-1 m-1 h-32 text-xl justify-center items-center rounded-lg trasnform hover:scale-105 transition 
`
const ActionButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
bg-black text-white mt-8 p-4 rounded-lg
`