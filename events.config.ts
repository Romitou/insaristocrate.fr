const foodSale = {
  name: 'Vente de nourriture',
  content: 'A definir'
}

const morningBreak = {
  start: '09:30',
  end: '09:45'
}

const mealBreak = {
  start: '11:15',
  end: '11:30'
}

const endBreak = {
  start: '16:30',
  end: '16:45'
}

const defaultBreak = [morningBreak, mealBreak, endBreak].map(breakPeriod => {
  return {
    id: 'food',
    ...breakPeriod,
    ...foodSale
  }
})

export const events = [
  {
    day: '2024-03-11',
    events: [
      {
        id: 'rap',
        start: '00:15',
        name: 'Sortie Rap et Teaser',
        content: 'A definir'
      },
      ...defaultBreak,
      {
        id: 'bal',
        start: '19:30',
        end: '23:00',
        name: 'Bal Masqué',
        content: 'A definir'
      },
    ]
  },
  {
    day: '2024-03-12',
    events: [
      ...defaultBreak,
      {
        id: 'baf',
        start: '19:30',
        end: '23:00',
        name: 'BAF',
        content: 'A definir'
      }
    ]
  },
  {
    day: '2024-03-13',
    events: [
      ...defaultBreak,
      {
        id: 'chasse',
        start: '14:00',
        end: '14:45',
        name: 'Chasse à cours',
        content: 'A definir'
      }
    ]
  },
  {
    day: '2024-03-14',
    events: [
      ...defaultBreak,
      {
        id: 'tms',
        start: '14:30',
        end: '17:30',
        name: 'TMS',
        content: 'A definir'
      },
      {
        id: 'bar',
        start: '20:30',
        end: '23:00',
        name: 'Soirée bar',
        content: 'A definir'
      }
    ]
  }
]
