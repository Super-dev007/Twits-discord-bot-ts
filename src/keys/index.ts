// CONFIG
import * as dotenv from 'dotenv';

dotenv.config();

// KEYS
export const isProd = process.env.NODE_ENV === 'production';
export const discordToken = isProd
  ? process.env.DISCORD_TOKEN!
  : process.env.DISCORD_TOKEN_DEV!;
export const discordClientId = isProd
  ? process.env.DISCORD_CLIENT_ID!
  : process.env.DISCORD_CLIENT_ID_DEV!;
export const discordGuildId = isProd
  ? process.env.DISCORD_GUILD_ID!
  : process.env.DISCORD_GUILD_ID_DEV!;
export const sentryDsn = isProd
  ? process.env.SENTRY_DSN!
  : process.env.SENTRY_DSN_DEV!;
