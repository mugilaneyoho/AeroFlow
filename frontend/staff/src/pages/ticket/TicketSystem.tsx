import React, { Suspense } from 'react'

const TicketSystem: React.FC = () => {

  const loadRemote = () => import('ticketsystem/ticketsystem')
    .then((module) => module)
    .catch(() => ({
      default: () => <div>Ticket System module unavailable</div>
    }));

  const Ticket = React.lazy(loadRemote)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Ticket />
    </Suspense>
  )
}

export default TicketSystem