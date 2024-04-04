import Valorantpic from '../assets/Images/Valorant1.webp'
import Valorantimage from './Images/valo1.jpg'
import BGMI from './Images/BGMI.jpg'


const Events = [
  {
    category: 'Literary',
    description:" Literary is a beautifull event , where everything about literary is going on. ",
    id:"0",
    events: [
      {
        name: 'JAM',
        cashPrize: '4500',
        rules: `Open event.
        He/She would be objected for the following reasons :
        Usage of slang, direct speech, and abbreviations.
        Plagiarism or Redundancy.
        Deviation from the topic/time-wasting tactics,
        Unnecessary stress or obsession with words,incoherence or dramatization.
        Standard formats are not to be used.
        First round: Written elimination round.`,
        eventDetails: {
          registrationFee: '200',
          prelimsDateAndTime: '1 July 2023 12:00 PM',
          prelimsLocation: 'Chemical Seminar Hall',
          finalsDateAndTime: '1 July 2023 2:30 PM',
          finalsLocation: 'Chemical Seminar Hall',
        },
        eventimage: 'https://picsum.photos/1000/1500?random=1',
        coordinatorDetails: {
          Venkatesh: '8310316591',
          Sathvika: '9845885900',
        },
      }, 
      {
        name: 'CREATIVE WRITING',
        cashPrize: '4500',
        rules: `Open event.
        Word limit: 1000 words.
        The topic will be given on spot.
        Time limit: 75 minutes.`,
        eventimage: 'https://picsum.photos/1000/1500?random=2',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          Venkatesh: '8310316591',
          Sathvika: '9845885900',
        },
      },
      {
        name: 'BLINDFOLD TEXTING',
        cashPrize: '4500',
        rules: `Open event.
        A text of 160 characters will be read out to the blindfolded participants who have to type it on their phones.
        The participant with the most accurate text wins.
        T9/predictive text and autocorrect are not allowed.
        No restrictions on the phone used.`,
        eventimage: 'https://picsum.photos/1000/1500?random=3',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          Venkatesh: '8310316591',
          Sathvika: '9845885900',
        },
      },
      {
        name: '20Q',
        cashPrize: '4500',
        rules: `Open event.
        2 members per team.
        Prelims: The team members will be separated into two different rooms.
        A list of 20 items and a blank sheet will be given.
        Participants will have to write '3' one-word clues for each item on the list.
        Sheets will then be exchanged with their respective teammates.
        Proper nouns are not allowed.
        The time allotted is 20 minutes.
        10 minutes are then allotted to guess '3' answers based on the given clues.
        Finals: Standard 20Q rules.`,
        eventimage: 'https://picsum.photos/1000/1500?random=4',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          Venkatesh: '8310316591',
          Sathvika: '9845885900',
        },
      },
      {
        name: 'QUIZ',
        cashPrize: '4500',
        rules: `Open event.
        2 members per team.
        The number of rounds will be decided by the Quizmaster.
        One written preliminary test, from which top teams will be selected for the finals.`,
        eventimage: 'https://picsum.photos/300/300?random=5',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          Venkatesh: '8310316591',
          Sathvika: '9845885900',
        },
      },
      {
        name: 'CHARDEOUS BATTLE',
        cashPrize: '7000',
        rules: `3 teams per college.
        3 members per team, each member of the team needs to enact at least once in a round.
        General Dumb Charades rules apply.
        Top teams qualify for the finals.`,
        eventimage: 'https://picsum.photos/1000/1500?random=6',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          Venkatesh: '8310316591',
          Sathvika: '9845885900',
        },
      },
      {
        name: 'SPELL BEE',
        cashPrize: '4500',
        rules: `Open event.
        1st round: Written elimination round.
        2nd round: Verbal round.
        The meanings of various words will be given on demand.`,
        eventimage: 'https://picsum.photos/300/300?random=7',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          Venkatesh: '8310316591',
          Sathvika: '9845885900',
        },
      },
    ],
  },
  {
    category: 'Gaming Events',
    description:" this is a description of gaming events where everything about gaming happens",
    id:"1",
    events: [
      {
        name: 'Valorant',
        cashPrize: '4500',
        rules: `Each team consist of 5 players.
        Participants must hold at least silver rank in the game.
        All rules are subjected to change as per the discretion of the gaming coordinators.
        The gaming coordinators decision is final.`,
        eventimage: Valorantimage,
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
      {
        name: 'Battle Grounds Mobile India',
        cashPrize: '12000',
        rules: `A team of 4 is allowed.
        The map selected for the competition is ERANGLE.
        All players in a team must have held a ranking of level 15 in the game and above platinum V tier, at the time of registration.
        Players may participate in the event only on a mobile phone or any other handheld devices.
        Players are not allowed to use peripheral devices of any kind.`,
        eventimage: BGMI,
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
      {
        name: 'Ludo King',
        cashPrize: '5000',
        rules: `First two players who manage to move two tokens to finishing point will be selected to next round.
        Rest of the rules are as per the game designed.
        Players should participate through mobile phones provided by the organisers.`,
        eventimage: 'https://picsum.photos/300/300?random=8',
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
    ],
  },
  {
    category: 'Gaming Events',
    description:" this is a description of gaming events where everything about gaming happens",
    id:"1",
    events: [
      {
        name: 'Valorant',
        cashPrize: '4500',
        rules: `Each team consist of 5 players.
        Participants must hold at least silver rank in the game.
        All rules are subjected to change as per the discretion of the gaming coordinators.
        The gaming coordinators decision is final.`,
        eventimage: Valorantimage,
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
      {
        name: 'Battle Grounds Mobile India',
        cashPrize: '12000',
        rules: `A team of 4 is allowed.
        The map selected for the competition is ERANGLE.
        All players in a team must have held a ranking of level 15 in the game and above platinum V tier, at the time of registration.
        Players may participate in the event only on a mobile phone or any other handheld devices.
        Players are not allowed to use peripheral devices of any kind.`,
        eventimage: BGMI,
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
      {
        name: 'Ludo King',
        cashPrize: '5000',
        rules: `First two players who manage to move two tokens to finishing point will be selected to next round.
        Rest of the rules are as per the game designed.
        Players should participate through mobile phones provided by the organisers.`,
        eventimage: 'https://picsum.photos/300/300?random=8',
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
    ],
  },
  {
    category: 'Gaming Events',
    description:" this is a description of gaming events where everything about gaming happens",
    id:"1",
    events: [
      {
        name: 'Valorant',
        cashPrize: '4500',
        rules: `Each team consist of 5 players.
        Participants must hold at least silver rank in the game.
        All rules are subjected to change as per the discretion of the gaming coordinators.
        The gaming coordinators decision is final.`,
        eventimage: Valorantimage,
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
      {
        name: 'Battle Grounds Mobile India',
        cashPrize: '12000',
        rules: `A team of 4 is allowed.
        The map selected for the competition is ERANGLE.
        All players in a team must have held a ranking of level 15 in the game and above platinum V tier, at the time of registration.
        Players may participate in the event only on a mobile phone or any other handheld devices.
        Players are not allowed to use peripheral devices of any kind.`,
        eventimage: BGMI,
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
      {
        name: 'Ludo King',
        cashPrize: '5000',
        rules: `First two players who manage to move two tokens to finishing point will be selected to next round.
        Rest of the rules are as per the game designed.
        Players should participate through mobile phones provided by the organisers.`,
        eventimage: 'https://picsum.photos/300/300?random=8',
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
    ],
  },
  {
    category: 'Gaming Events',
    description:" this is a description of gaming events where everything about gaming happens",
    id:"1",
    events: [
      {
        name: 'Valorant',
        cashPrize: '4500',
        rules: `Each team consist of 5 players.
        Participants must hold at least silver rank in the game.
        All rules are subjected to change as per the discretion of the gaming coordinators.
        The gaming coordinators decision is final.`,
        eventimage: Valorantimage,
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
      {
        name: 'Battle Grounds Mobile India',
        cashPrize: '12000',
        rules: `A team of 4 is allowed.
        The map selected for the competition is ERANGLE.
        All players in a team must have held a ranking of level 15 in the game and above platinum V tier, at the time of registration.
        Players may participate in the event only on a mobile phone or any other handheld devices.
        Players are not allowed to use peripheral devices of any kind.`,
        eventimage: BGMI,
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
      {
        name: 'Ludo King',
        cashPrize: '5000',
        rules: `First two players who manage to move two tokens to finishing point will be selected to next round.
        Rest of the rules are as per the game designed.
        Players should participate through mobile phones provided by the organisers.`,
        eventimage: 'https://picsum.photos/300/300?random=8',
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
    ],
  },
  {
    category: 'Gaming Events',
    id:"1",
    events: [
      {
        name: 'Valorant',
        cashPrize: '4500',
        rules: `Each team consist of 5 players.
        Participants must hold at least silver rank in the game.
        All rules are subjected to change as per the discretion of the gaming coordinators.
        The gaming coordinators decision is final.`,
        eventimage: Valorantimage,
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
      {
        name: 'Battle Grounds Mobile India',
        cashPrize: '12000',
        rules: `A team of 4 is allowed.
        The map selected for the competition is ERANGLE.
        All players in a team must have held a ranking of level 15 in the game and above platinum V tier, at the time of registration.
        Players may participate in the event only on a mobile phone or any other handheld devices.
        Players are not allowed to use peripheral devices of any kind.`,
        eventimage: BGMI,
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
      {
        name: 'Ludo King',
        cashPrize: '5000',
        rules: `First two players who manage to move two tokens to finishing point will be selected to next round.
        Rest of the rules are as per the game designed.
        Players should participate through mobile phones provided by the organisers.`,
        eventimage: 'https://picsum.photos/300/300?random=8',
        eventDetails: {
          registrationFee: '500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Architeture Dept',
        },
        coordinatorDetails: {
          'Manikanta D': '8217680357',
          'Sinchana K R': '7022086109',
        },
      },
    ],
  },
  // Add more categories and events here...
];

export default Events;
