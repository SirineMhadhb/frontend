import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { styled, ThemeProvider } from '@mui/material/styles';
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import axios from 'axios'

const Root = styled('div')(({ theme }) => ({
  backgroundImage: 'url("assets/images/avatars/pas.png")',
  backgroundColor: 'white',
  color: 'red',
  backgroundSize: 'cover',
  backgroundPosition: '0 50%',
  backgroundRepeat: 'no-repeat',
  '&:before': {
    content: "''",
    position: 'absolute',
    top: 0,
    right: 0,
    
    left: 0,
    zIndex: 1,
    background: '',
  },
}));

export default class DemoApp extends React.Component {

  state = {
    
    currentEvents: [] , 
    title : " " ,
    start:" "  ,
    end:" ",
  } 

  
  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let start = selectInfo.startStr
    let end = selectInfo.startStr
    let calendarApi = selectInfo.view.calendar
    

    calendarApi.unselect() 

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        
      })
    }
  
    axios.post(`http://127.0.0.1:8000/fullcalender/create/`, {title , start , end
    })
      .then(res => {
        console.log(res);
        console.log(res.data)
      
        console.log(res.data.id)
        localStorage.setItem('id1', res.data.id)
      })
      .catch(function (error) {
        console.log(error);
      })

      axios.get(`http://127.0.0.1:8000/fullcalender/list/`, {title , start , end
    })
    .then(res => {
      const id2 = res?.data.id
      console.log(res);
      console.log(res.data)
      localStorage.setItem('id', id2)
    })
    .catch(function (error) {
      console.log(error);
    })
    
      
  }

  render() {
    return (
      <Root>
      <div className='form'>
        {this.renderSidebar()}
        <div className='demo-app-main' style={{backgroundColor:'white' }}>
          <FullCalendar 
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            
            initialEvents={INITIAL_EVENTS}
            select={this.handleDateSelect}
            eventContent={renderEventContent} 
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents} 
           
          />
        </div>
      </div>
      </Root>
    )
  }

  renderSidebar() {
    return (
      <div className='demo-app-sidebar' style={{backgroundColor:'white' }}>
       
        <div className='demo-app-sidebar-section'style={{backgroundColor:'white' }} >
          <label>
            <input style={{backgroundColor:'white' }}
              type='checkbox'
              
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section' style={{backgroundColor:'white' }} >
          <h2>All Events ({this.state.currentEvents.length})</h2>
          <ul>
            {this.state.currentEvents.map(renderSidebarEvent)}
          </ul>
        </div>
      </div>
    )
  }

 

  handleEventClick = (clickInfo , id)  => {
    let id1 = localStorage.getItem('id1')
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
     

    }
    fetch(`http://127.0.0.1:8000/fullcalender/delete/${id1}/`, {
      method:'DELETE',
      headers:{
        'Content-type':'application/json',
        
      },
    }).then((response) =>{
      clickInfo.event.remove()
    })
  }

  handleEvents = (events) => {
    this.setState({
      currentEvents: events
    })
  }

}

function renderEventContent(eventInfo) {
  return (
    <>
      
      <i>{eventInfo.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event) {

  return (
    <li key={event.id} style={{backgroundColor:'white' }}>
      <b>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
      <i></i>
    </li>
  )
}