module.exports = {
  plugins: ['node'],
  extends: [
    'eslint:recommended',
    'plugin:security/recommended',
    'plugin:node/recommended'
  ],
  // "extends": "airbnb",
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-trailing-spaces': 1,
    'space-before-blocks': 1,
    'arrow-parens': ['error', 'always'],
    curly: ['error', 'all'],
    'dot-location': ['error', 'property'],
    eqeqeq: ['error', 'always'],
    'no-floating-decimal': 1,
    yoda: ['error', 'never'],
    'no-undef-init': 1,
    // "no-use-before-define":  ["error", "nofunc"],
    'block-spacing': ['error', 'always'],
    'comma-spacing': 1,
    'func-call-spacing': 1,
    'key-spacing': 1,
    'keyword-spacing': 1,
    'no-whitespace-before-property': 1,
    'nonblock-statement-body-position': 1,
    'object-curly-spacing': ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'space-infix-ops': ['error', { int32Hint: false }],
    'space-unary-ops': 1,
    'switch-colon-spacing': 1,
    'linebreak-style': ['error', 'unix'],
    'security/detect-object-injection': 0,
    'object-shorthand': 1,
    'require-atomic-updates': 1,
    'no-prototype-builtins': 1
  },
  globals: {
    library: false,
    statistiker: false,
    document: false,
    window: false,
    '-Promise': false,
    Pace: false,
    moment: false,
    require: false,
    sails: false,
    module: false,
    Assessment: false,
    Controlset: false,
    Report: false,
    Glossaryitem: false,
    Risk: false,
    Assessmentresponse: false,
    Standard: false,
    Comment: false,
    Org: false,
    Team: false,
    User: false,
    Control: false,
    Variable: false,
    Orglog: false,
    Voucher: false,
    OulContext: false,
    Ember: false,
    blacklist: false,
    incidents: false,
    orglog: false,
    resObj: false,
    userManager: false,
    auth: false,
    errObj: false,
    messenger: false,
    slacker: false,
    q: false,
    errTracker: false,
    Funnel: false,
    Funnelinstance: false,
    funnel: false,
    Obj: false,
    Objtype: false,
    objService: false,
    objMigrationService: false,
    objtypeService: false,
    objtypeMigrationService: false,
    objIOService: false,
    objExternalService: false,
    utilsService: false,
    Dataextension: false,
    newsFeeder: false,
    aws: false,
    currency: false,
    db: false,
    Contract: false,
    Task: false,
    Incident: false,
    HistoryEvent: false,
    Managedrisk: false,
    Managedrisktag: false,
    managedrisks: false,
    crm: false,
    process: false,
    pusher: false,
    Pdftemplate: false,
    reports: false,
    describe: false,
    it: false,
    before: false,
    after: false,
    beforeEach: false,
    afterEach: false,
    done: false,
    dagger: false,
    controlsets: false,
    Campaign: false,
    changelog: false,
    campaignManager: false,
    Reaction: false,
    reactions: false,
    Reactionsummary: false,
    Reactioncontrolsetsummary: false,
    tasksmanager: false,
    Dwidget: false,
    constants: false,
    Userassessment: false,
    schemaService: false,
    Jobs: false,
    teamManager: false,
    Radar: false,
    radarsManager: false,
    probe: false,
    changelogColl: false,
    tokens: false
  }
};
