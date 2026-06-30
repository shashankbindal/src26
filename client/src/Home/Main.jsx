import React from 'react'
import Banner from './Banner.jsx'
import Events from './Events.jsx'
import Sponsors from './Sponsors.jsx'
import SectionTeaser from './SectionTeaser.jsx'
import ScrollCards from './ScrollCards.jsx'
import Faq from './Faq.jsx'
import FinalCta from './FinalCta.jsx'
import { bentoCards } from '../TeamProfile/teamsData.js'
import './Main.css'
import './animations.css'

const allMembers = bentoCards.flatMap(card => [...card.chairs, ...card.coordinators])

const teamAvatars = allMembers
  .filter(member => member.image)
  .slice(0, 5)
  .map(member => member.image)

const Main = () => {
  return (
    <>
      <div id="hero"><Banner /></div>

      <ScrollCards />

      <div id="sponsors"><Sponsors /></div>

      <div id="events"><Events /></div>

      <div id="team">
        <SectionTeaser
          eyebrow="Our People"
          title="Leadership & Team"
          description="The minds behind SRC '26 — a collective of engineers, designers, and organizers working together to make this conference exceptional."
          ctaLabel="Meet the Team"
          ctaHref="/team"
          avatars={teamAvatars}
          avatarLabel={`${bentoCards.length} Teams · ${allMembers.length}+ Organizers`}
          reverse
        />
      </div>

      <div id="faq"><Faq /></div>

      <FinalCta />
    </>
  )
}

export default Main
