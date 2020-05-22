export enum Constants {
  GATEWAY = "wss://gateway.discord.gg/?v=6&encoding=json",
  API = "https://discord.com/api/v6",
}

export enum Versions { 
  GATEWAY = 6,
  REST = 6 
};

export enum Permissions {
  CREATE_INSTANT_INVITE = 1<<0,
  KICK_MEMBERS = 1<<1,
  BAN_MEMBERS = 1<<2,
  ADMINISTRATOR = 1<<3,
  MANAGE_CHANNELS = 1<<4,
  MANAGE_GUILD = 1<<5,
  ADD_REACTIONS = 1<<6,
  VIEW_AUDIT_LOG = 1<<7,
  PRIORITY_SPEAKER = 1<<8,
  STREAM = 1<<9,
  VIEW_CHANNEL = 1<<10,
  SEND_MESSAGES = 1<<11,
  SEND_TTS_MESSAGES = 1<<12,
  MANAGE_MESSAGES = 1<<13,
  EMBED_LINKS = 1<<14,
  ATTACH_FILES = 1<<15,
  READ_MESSAGE_HISTORY = 1<<16,
  MENTION_EVERYONE = 1<<17,
  USE_EXTERNAL_EMOJIS = 1<<18,
  VIEW_GUILD_INSIGHTS = 1<<19,
  CONNECT = 1<<20,
  SPEAK = 1<<21,
  MUTE_MEMBERS = 1<<22,
  MOVE_MEMBERS = 1<<23,
  USE_VAD = 1<<25,
  CHANGE_NICKNAME = 1<<26,
  MANAGE_NICKNAMES = 1<<27,
  MANAGE_ROLES = 1<<28,
  MANAGE_WEBHOOKS = 1<<29,
  MANAGE_EMOJIS = 1<<30
}

export enum UserFlags {
  DISCORD_EMPLOYEE = 1<<0,
  DISCORD_PARTNER = 1<<1,
  HYPESQUAD_EVENTS = 1<<2,
  BUG_HUNTER_LEVEL_ONE = 1<<3,
  HOUSE_BRAVERY = 1<<6,
  HOUSE_BRILLIANCE = 1<<7,
  HOUSE_BALANCE = 1<<8,
  EARLY_SUPPORTER = 1<<9,
  TEAM_USER = 1<<10,
  SYSTEM = 1<<12,
  BUG_HUNTER_LEVEL_TWO = 1<<14,
  VERIFIED_BOT = 1<<16,
  VERIFIED_BOT_DEVELOPER = 1<<17
}

export enum OPCODE {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
  TEN = 10,
  ELEVEN = 11,
  TWELVE = 12,
}

export enum ENDPOINTS {
<<<<<<< HEAD
  USERS = "users",
  USER_GUILDS = "users/@me/guilds",
  GUILDS = "guilds",
  CHANNELS = "channels",
  MESSAGES = "messages",
  MEMBERS = "members",
=======
  USERS = 'users',
  USER_GUILDS = 'users/@me/guilds',
  GUILDS = 'guilds',
  CHANNELS = 'channels',
  MESSAGES = 'messages',
  MEMBERS = 'members',
  REACTIONS = 'reactions',
>>>>>>> master
}

export enum StatusCode {
  OK = 200,
  NO_CONTENT = 204,
  CREATED = 201,
  BAD = 400,
  NOT_FOUND = 404,
}