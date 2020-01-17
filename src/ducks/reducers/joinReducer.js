let initialState = {
  ign: "",
  country: "",
  timezone: "",
  gender: "",
  age: "",
  inGameTime: "",
  mainClass: "",
  mainClassLevel: "",
  enjoy: "",
  reason: "",
  previousGuilds: "",
  whyLeave: "",
  discord: "",
  forumUser: "",
  mailConsent: false,
  email: ""
};

const UPDATE_GEN_INFO = "UPDATE_GEN_INFO";
const UPDATE_GAME_INFO = "UPDATE_GAME_INFO";
const UPDATE_CONTACT_INFO = "UPDATE_CONTACT_INFO";

export const updateGenInfo = (ign, country, timezone, gender, age) => {
  // console.log(ign, country, timezone, gender, age)
  return {
    type: UPDATE_GEN_INFO,
    payload: { ign, country, timezone, gender, age }
  };
};

export const updateGameInfo = (
  inGameTime,
  mainClass,
  mainClassLevel,
  enjoy,
  reason,
  previousGuilds,
  whyLeave
) => {
  return {
    type: UPDATE_GAME_INFO,
    payload: {
      inGameTime,
      mainClass,
      mainClassLevel,
      enjoy,
      reason,
      previousGuilds,
      whyLeave
    }
  };
};

export const updateContactInfo = (discord, forumUser, mailConsent, email) => {
  return {
    type: UPDATE_CONTACT_INFO,
    payload: { discord, forumUser, mailConsent, email }
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GEN_INFO:
      return {
        ...state,
        ign: action.payload.ign,
        country: action.payload.country,
        timezone: action.payload.timezone,
        gender: action.payload.gender,
        age: action.payload.age
      };
    case UPDATE_GAME_INFO:
      return {
        ...state,
        inGameTime: action.payload.inGameTime,
        mainClass: action.payload.mainClass,
        mainClassLevel: action.payload.mainClassLevel,
        enjoy: action.payload.enjoy,
        reason: action.payload.reason,
        previousGuilds: action.payload.previousGuilds,
        whyLeave: action.payload.whyLeave
      };
    case UPDATE_CONTACT_INFO:
      return {
        ...state,
        discord: action.payload.discord,
        forumUser: action.payload.forumUser,
        mailConsent: action.payload.mailConsent,
        email: action.payload.email
      };
    default:
      return state;
  }
};

export default reducer;
