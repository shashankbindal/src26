import React from 'react'
import './Teams.css'

const bentoCards = [
  { id: 1, span: "col-span-2", name: "Team-Name-1" },
  { id: 2, span: "col-span-1", name: "Team-Name-2" },
  { id: 3, span: "col-span-1", name: "Team-Name-3" },
  { id: 4, span: "col-span-1", name: "Team-Name-4" },
  { id: 5, span: "col-span-2", name: "Team-Name-5" },
  { id: 6, span: "col-span-1", name: "Team-Name-6" },
  { id: 7, span: "col-span-1", name: "Team-Name-7" },
  { id: 8, span: "col-span-1", name: "Team-Name-8" },
  { id: 9, span: "col-span-2", name: "Team-Name-9" },
  { id: 10, span: "col-span-1", name: "Team-Name-10" },
  { id: 11, span: "col-span-1", name: "Team-Name-11" },
  { id: 12, span: "col-span-1", name: "Team-Name-12" },
  { id: 13, span: "col-span-1", name: "Team-Name-13" },
  { id: 14, span: "col-span-1", name: "Team-Name-14" },
]

const Teams = () => {
  return (
    <div className="teams-section">
      <div className="teams-header">
        <h2 className="teams-title">Leadership & Team</h2>
        <p className="teams-subtitle">The minds behind SRC '26</p>
      </div>
      <div className="teams-bento-grid">
        {bentoCards.map((card) => (
          <div key={card.id} className={`bento-card ${card.span}`}>
            <h3 className="bento-team-name">{card.name}</h3>
            <button className="bento-know-more">
              Know More <span>&rarr;</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams
