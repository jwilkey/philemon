export default (study) => {
  const score = {
    observe: {},
    interpret: {},
    application: {}
  }
  Object.keys(template.observe).forEach(e => {
    score.observe[e] = { complete: judge(study.observe[e]) }
  })
  Object.keys(template.interpret).forEach(e => {
    score.interpret[e] = { complete: judge(study.interpret[e]) }
  })
  Object.keys(template.application).forEach(e => {
    score.application[e] = { complete: judge(study.application[e]) }
  })
  score.observe.meta = () => ({
    complete: Object.values(score.observe).filter(s => s.complete).length,
    total: Object.values(score.observe).filter(s => typeof (s) !== 'function').length
  })
  score.interpret.meta = () => ({
    complete: Object.values(score.interpret).filter(s => s.complete).length,
    total: Object.values(score.interpret).filter(s => typeof (s) !== 'function').length
  })
  score.application.meta = () => ({
    complete: Object.values(score.application).filter(s => s.complete).length,
    total: Object.values(score.application).filter(s => typeof (s) !== 'function').length
  })

  return score
}

const judge = value => {
  return !!value &&
    ((Array.isArray(value) ? value.length > 0 && value.every(judge) : false) ||
      (value instanceof Object ? Object.keys(value).length > 0 && Object.values(value).every(judge) : false) ||
      (typeof (value) === 'string' ? value.length > 0 : false))
}

const template = {
  observe: {
    people: ['array of strings'],
    nouns: ['array of strings'],
    adjectives: ['array of strings'],
    actions: ['array of strings'],
    persons: {
      PersonName: ['array of strings'],
      PersonName2: ['array of strings']
    },
    definitions: {
      Word: 'definition'
    }
  },
  interpret: {
    mainPoint: `string`,
    keywords: ['array of strings'],
    points: ['array of strings'],
    titles: ['array of strings'],
    unwisdom: [
      {
        passage: 'REFERENCE.1.1-5',
        saying: 'unwise saying',
        comment: `comment on unwise saying`,
        chapter: 'string'
      }
    ],
    expound: [
      {
        one: `simple statement from text`,
        two: `add emotive value`,
        three: `add intrigue`,
        four: `add complexity`
      }
    ]
  },
  application: {
    convo: [
      { question: `conversation question accessible to any audience` }
    ]
  }
}
