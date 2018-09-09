// TODO: RECREATE THIS IN GOOGLE SHEET, EXPORT TO CSV FILES, PARSE WITH D3

const organizationsDetail = [
  {
    name: 'City of Asheville',
    type: 'government',
    numMembers: 1300,
    yearFounded: 1797,
  },
  {
    name: 'Code for Asheville',
    type: 'nonprofit',
    numMembers: 30,
    yearFounded: 2011,
  },
  {
    name: 'Asheville Symphony Chorus',
    type: 'nonprofit',
    tags: ['arts', 'music'],
    numMembers: 130,
    yearFounded: 1980,
  }
]

const people = [
  {
    name: 'Melanie',
    orgMemberships: [
      {
        name: 'City of Asheville',
        role: 'Software Engineer',
      },
      {
        name: 'Asheville Symphony Chorus',
        role: 'Alto',
      },
      {
        name: 'Code for Asheville',
        role: 'Volunteer',
      },
      {
        name: 'Dev Bootcamp',
        role: 'alumna'
      }
    ],
  },
  {
    name: 'Eric',
    orgMemberships: [
      {
        name: 'City of Asheville',
        role: 'Digital Services Architect',
      },
      {
        name: 'Code for Asheville',
        role: 'Former Co-Captain',
      },
      {
        name: 'Circus',
        role: 'clown'
      }
    ]
  },
  {
    name: 'Sarah',
    orgMemberships: [
      {
        name: 'Asheville Symphony Chorus',
        role: 'Alto',
      },
      {
        name: 'Nobel Laureates',
        role: 'winner'
      }
    ]
  },
  {
    name: 'Annie',
    orgMemberships: [
      {
        name: 'MyCincinnatti',
        role: 'teacher',
      },
      {
        name: 'Habitat for Humanity',
        role: 'Americorps'
      }
    ]
  }
]

// Assume members of the same organization are linked
// Other kinds of links: personal, professional, ?
const nonOrgPeopleLinks = [
  {
    source: 'Annie',
    target: 'Melanie',
    type: 'personal',
  },
]



// Assume orgs are linked through people
// Other kinds of links: partnerships, space sharing, subsidiaries, etc
// Should we generate orgs from the people list?
const nonPeopleOrgLinks = [

]
