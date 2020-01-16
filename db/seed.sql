CREATE TABLE "guild_members" (
  "id" serial PRIMARY KEY,
  "username" text UNIQUE,
  "date_joined" timestamp,
  "gender" varchar(2),
  "region" varchar(3),
  "rank" text,
  "class" text,
  "medals" text,
  "country" text,
  "admin_authorized" boolean,
  "is_pm" boolean,
  "hash_pass" text
);

CREATE TABLE "player_data" (
  "id" serial PRIMARY KEY,
  "username" text,
  "rank" text,
  "first_join" timestamp,
  "playtime" integer,
  "chests_found" integer,
  "steps_taken" integer,
  "mobs_killed" integer,
  "combined_level" integer,
  "combat_level" integer,
  "logins" integer,
  "deaths" integer
);

CREATE TABLE "applications" (
  "id" serial PRIMARY KEY,
  "ign" text,
  "country" text,
  "timezone" text,
  "gender" text,
  "age" integer,
  "time_daily" integer,
  "main_class" text,
  "main_level" text,
  "enjoy" text,
  "reason_to_join" text,
  "previous_guild" boolean,
  "previous_guild_name" text,
  "previous_guild_leave" text,
  "discord_user" text,
  "forum_user" text,
  "email" text,
  "consent_to_email" text
);

CREATE TABLE "anouncements" (
  "id" serial PRIMARY KEY,
  "poster" text,
  "post_body" text,
  "date_posted" timestamp
);

ALTER TABLE "player_data" ADD FOREIGN KEY ("username") REFERENCES "guild_members" ("username");

ALTER TABLE "anouncements" ADD FOREIGN KEY ("poster") REFERENCES "guild_members" ("username");