import Valorantpic from '../assets/Images/Valorant1.webp';
import Valorantimage from './Images/valo1.jpg';
import BGMI from './Images/BGMI.jpg';

const Events = [
  {
    category: 'Literary',
    description:
      ' Literary is a beautifull event , where everything about literary is going on. ',
    id: '0',
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
    description:
      ' this is a description of gaming events where everything about gaming happens',
    id: '1',
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
    category: 'Theatre Events',
    description:
      ' this is a description of Genre Events where everything about genre happens',
    id: '2',
    events: [
      {
        name: 'Stand-Up Comedy',
        cashPrize: '3500',
        rules:
          'Vulgarity and obscenity in/of any form is not allowed.Participants are requested to refrain from using controversial remarks. Repetition of the same scripts in different events will be disqualified. Individual event.The script should be submitted 10 minutes beforehand for verification.The time allowed is 5+2 minutes.',
        eventimage: 'https://picsum.photos/300/300?random=9',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Street Play',
        cashPrize: '15000',
        rules:
          'Vulgarity and obscenity in/of any form is not allowed.Participants are requested to refrain from using controversial remarks. Repetition of the same scripts in different events will be disqualified. Minimum 8 and maximum 15 participants per team.Props and musical instruments are allowed.The play should be for a social cause. Time limit: 12+3 minutes.',
        eventimage: 'https://picsum.photos/300/300?random=9',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Skit',
        cashPrize: '15000',
        rules:
          'Vulgarity and obscenity in/of any form is not allowed.Participants are requested to refrain from using controversial remarks. Repetition of the same scripts in different events will be disqualified. Minimum 6 and maximum 15 participants including narrator(if any).Props and costumes are allowed.The performance should not be a part of any movie or TV show.Time limit: 10+2 minutes',
        eventimage: 'https://picsum.photos/300/300?random=9',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Mime',
        cashPrize: '10000',
        rules: `Vulgarity and obscenity in/of any form is not allowed.Participants are requested to refrain from using controversial remarks. Repetition of the same scripts in different events will be disqualified. Maximum 7 participants per team.
          1 accompanist is allowed.
          No props should be used.
          Only background music without vocals is allowed.
          Time Limit: 4+2 minutes.`,
        eventimage: 'https://picsum.photos/300/300?random=9',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Indian Ethnic Show',
        cashPrize: '30000',
        rules: `Vulgarity and obscenity in/of any form is not allowed.Participants are requested to refrain from using controversial remarks. Repetition of the same scripts in different events will be disqualified. Maximum 7 participants per team.
          3 teams per college.
A team can include boys and girls.
Minimum 5 participants and maximum 20 participants.
Background music will be allowed.Time limit is 8+2 minutes.
Teams have to submit photos and videos of their performance as per the date announced on the official Instagram page.
Participants are requested to behave decently on stage.
Indecent acts of physical contact or vulgarity on stage will lead to disqualification.
Dress code of participants should strictly portray Indian ethnicity and should not involve any kind of vulgarity.
Traditional culture of different states has to be presented.
Decision of the judges is final and binding`,
        eventimage: 'https://picsum.photos/300/300?random=9',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
    ],
  },
  {
    category: 'Music Events',
    description:
      ' this consists of all the events where the participants have to perform music and dance.  ',
    id: '3',
    events: [
      {
        name: 'Indo-Western Vocal Solo',
        cashPrize: '3500',
        rules: `Maximum of 3 participants per college.
        Maximum of two accompanists allowed.
        Recorded music or karaoke is allowed.
        Time limit : 4+1 minutes.`,
        eventimage: 'https://picsum.photos/300/300?random=9',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Battle Of Bands',
        cashPrize: '10000',
        rules: `Maximum of two bands per college.
        Maximum of 10 participants per team.
        Only drums with double bass pedal will be provided.
        Time limit 20 minutes which includes both sound check and performance.
        Karaoke, programmed music and special effects are not allowed.`,
        eventimage: 'https://picsum.photos/300/300?random=9',
        eventDetails: {
          registrationFee: '1500',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Duet Singing',
        cashPrize: '5000',
        rules: `2 members per team.
        A maximum of 3 teams per college are allowed.
        No gender restrictions on team constitution
        Karaoke and a maximum of 2 accompanists are allowed.
        Time limit: 4+1 minutes.
        Judgement will be based solely on vocals.`,
        eventimage: 'https://picsum.photos/300/300?random=10',
        eventDetails: {
          registrationFee: '300',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Beatboxing Solo',
        cashPrize: '3500',
        rules: `Open solo event.
        Two-stage competitions (prelims and finals).Time limit (prelims): 2 minutes .
        The time limit for finals will be decided on the spot.
        In prelims,each participant has to show vocal percussion skills.
        In finals, qualified participants must battle face to face on stage.
        No instruments or special effects are allowed.
        Judges' decisions will be based on originality, techniques and crowd response.
        Halcyon music committee reserves the right to make any last-minute changes in the rules.`,
        eventimage: 'https://picsum.photos/300/300?random=10',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Classical Vocal Solo',
        cashPrize: '3500',
        rules: `Maximum of 3 participants per college.
        One classical piece to be chosen
        Participant has to mention raga and taala.
        No recorded music allowed.
        No accompanists are allowed.
        Shruthi boxes are allowed.
        Time limit: 10+1 minutes.`,
        eventimage: 'https://picsum.photos/300/300?random=10',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
    ],
  },
  {
    category: 'Fine Arts',
    description: 'Events related to Fine Arts.',
    id: '4',
    events: [
      {
        name: 'Face - Painting',
        cashPrize: '3000',
        rules: `Open event.
        Time limit: 1 hour.
        Topic will be given on spot.
        Paints and brushes will be provided (maximum 6 colors).
        Provisions - Waste cloth/paper, water, plastic cups.`,
        eventimage: 'https://picsum.photos/300/300?random=13',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Collage',
        cashPrize: '3500',
        rules: `Open event.
        2 participants per team.
        Time Limit: 1 hour 15 minutes.
        The topic will be given on the spot.
        Chart paper and glue will be provided.
        No other item will be provided.
        Scissors and burning of paper is prohibited.
        Participants will not be allowed to leave the hall during the event.`,
        eventimage: 'https://picsum.photos/300/300?random=14',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Creative Photography',
        cashPrize: '3000',
        rules: `Individual event.
        Submissions are taken throughout India.
        Downloading images from the internet is not allowed, plagiarism and metadata will be checked before considering.
        Participants can produce only one photograph (metadata should be valid) at the time of submission.
        The topic will be announced on the website 48 hours prior to the event.
        Students from other colleges will be mailed a video conference link in which they will have to briefly explain their photograph, students present at the fest will exhibit their photograph offline.
        Submission link will be provided on the website.`,
        eventimage: 'https://picsum.photos/300/300?random=15',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Short Film',
        cashPrize: '3000',
        rules: `3 participants per team.
        Video should portray a social message.
        Capturing of video should be done within college premises.
        Video should be captured using only mobile phones.
        The theme remains as
        Halcyon-2023.
        Last date for submission is 1pm on the second day of Halcyon i.e. July 1.
        The format should be in mp4.
        Time limit:4+1 minutes.`,
        eventimage: 'https://picsum.photos/300/300?random=16',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Sketching',
        cashPrize: '3000',
        rules: `Open and individual event.
        Time Limit: 45 minutes.
        The topic will be given on spot.
        Only chart paper and stationaries will be provided.
        No other item will be provided.
        Participants will not be allowed to leave the hall during the event`,
        eventimage: 'https://picsum.photos/300/300?random=16',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Shravan S': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
    ],
  },
  {
    category: 'Dance',
    description: 'Dance is the art of expression through the arts.',
    id: '5',
    events: [
      {
        name: 'Duet Dance',
        cashPrize: '8000',
        rules: `General Rules: All events allow a maximum of 3 participants or teams per college. Audio for dance should be made available to the concerned co-ordinator 3 hours prior to the event in a ready to play condition. Poor audio quality is not the responsibility of the organizers. Any costumes, gestures and actions should not be obscene. The decision of the JUDGES is final and binding on all the participants.
        Time Limit : 4+1 Minutes on stage.
Duo can consist of a pair of boys/girls or both, combination is allowed.
Live band is not allowed.
        `,
        eventimage: 'https://picsum.photos/300/300?random=16',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Eshwar T N': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Western Solo Dance',
        cashPrize: '5000',
        rules: `General Rules: All events allow a maximum of 3 participants or teams per college. Audio for dance should be made available to the concerned co-ordinator 3 hours prior to the event in a ready to play condition. Poor audio quality is not the responsibility of the organizers. Any costumes, gestures and actions should not be obscene. The decision of the JUDGES is final and binding on all the participants.
        Time limit : 3 + 2 minutes on stage.
Live band or group song accompanied by dancing is not allowed.
        `,
        eventimage: 'https://picsum.photos/300/300?random=16',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Eshwar T N': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Classical And Folk Dance',
        cashPrize: '5000',
        rules: `General Rules: All events allow a maximum of 3 participants or teams per college. Audio for dance should be made available to the concerned co-ordinator 3 hours prior to the event in a ready to play condition. Poor audio quality is not the responsibility of the organizers. Any costumes, gestures and actions should not be obscene. The decision of the JUDGES is final and binding on all the participants.
        Time limit : 3 + 2 minutes on stage.
Live band or group song accompanied by dancing is not allowed.
Respective dance form props are allowed.
Number of participants allowed is 1
        `,
        eventimage: 'https://picsum.photos/300/300?random=16',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Eshwar T N': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
      {
        name: 'Choreography',
        cashPrize: '30000',
        rules: `General Rules: All events allow a maximum of 3 participants or teams per college. Audio for dance should be made available to the concerned co-ordinator 3 hours prior to the event in a ready to play condition. Poor audio quality is not the responsibility of the organizers. Any costumes, gestures and actions should not be obscene. The decision of the JUDGES is final and binding on all the participants.
        Time limit : 6 + 2 minutes.
Pre-recorded music is allowed.
Points are awarded for costumes, interpretation, entry-exit, facial expression and co-ordination.
Maximum number of participants is 18 and minimum is 6.
Teams have to submit a video of their performance as per the date announced on the website.
        `,
        eventimage: 'https://picsum.photos/300/300?random=16',
        eventDetails: {
          registrationFee: '200',
          dateAndTime: '30 June 2023 12:00 PM',
          location: 'Chemical Seminar Hall',
        },
        coordinatorDetails: {
          'Eshwar T N': '9980228687',
          'Kusuma ': '9964195498',
        },
      },
    ],
  },

  // Add more categories and events here...
];

export default Events;
