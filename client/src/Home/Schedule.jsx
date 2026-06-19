import React from 'react'
import './Schedule.css'

const scheduleData = [
  {
    day: "01",
    date: "August 22nd",
    events: [
      { time: "09:00 - 11:00", name: "Text-1" },
      { time: "11:00 - 13:00", name: "Text-2" },
      { time: "13:00 - 14:00", name: "Text-3" },
      { time: "14:00 - 17:00", name: "Text-4" }
    ]
  },
  {
    day: "02",
    date: "August 23rd",
    events: [
      { time: "09:00 - 11:00", name: "Text-1" },
      { time: "11:00 - 13:00", name: "Text-2" },
      { time: "13:00 - 14:00", name: "Text-3" },
      { time: "14:00 - 17:00", name: "Text-4" }
    ]
  }
]

const Schedule = () => {
  return (
    <div className="schedule-section">
      <div className="schedule-header">
        <h2 className="schedule-title">Schedule</h2>
      </div>

      <div className="magazine-spread">
        {scheduleData.map((dayData, index) => (
          <div key={index} className={`magazine-page ${index === 1 ? 'page-right' : 'page-left'}`}>
            <div className="day-header">
              <span className="day-number">DAY {dayData.day}</span>
              <span className="day-date">{dayData.date}</span>
            </div>
            
            <div className="schedule-list">
              {dayData.events.map((evt, i) => (
                <div key={i} className="schedule-item">
                  <span className="schedule-time">{evt.time}</span>
                  <span className="schedule-event">{evt.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule
