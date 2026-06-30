import React from 'react'
import Banner from './Banner.jsx'
import Events from './Events.jsx'
import Sponsors from './Sponsors.jsx'
import SectionTeaser from './SectionTeaser.jsx'
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

      <div id="about">
        <SectionTeaser
          eyebrow="About"
          title="VIPLAV — AIChE India SRC 2026"
          description="Hosted by the award-winning AIChE RGIPT Student Chapter, VIPLAV brings AIChE's global community of chemical engineers to RGIPT for technical competitions, research presentations, and leadership development."
          ctaLabel="Read More"
          ctaHref="/about"
          stats={[
            { value: 60000, suffix: '+', label: 'AIChE Members' },
            { value: 110, suffix: '+', label: 'Countries' },
            { value: 14, suffix: '', label: 'Global Regions' },
            { display: "'26", label: 'Edition' },
          ]}
        />
      </div>

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
