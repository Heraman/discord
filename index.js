require("dotenv").config();
const express = require("express");
const { Client, SpotifyRPC, RichPresence } = require("discord.js-selfbot-v13");

const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client();

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  const assetRoblox = await RichPresence.getExternal(
    client,
    "216749007226642432", 
    "https://i.pinimg.com/736x/e4/ae/61/e4ae61a9804eeda0dda506c0b43a552a.jpg" 
  );

  const assetVSCode = await RichPresence.getExternal(
    client,
    "383226322780266496",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png", // [0]
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
  );

  const vscode = new RichPresence(client)
    .setApplicationId("383226322780266496")
    .setType("PLAYING")
    .setName("Visual Studio Code")
    .setDetails("Editing You.js")
    .setState("Workspace: MyHeart")
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(assetVSCode[1].external_asset_path) 
    .setAssetsLargeText("Visual Studio Code")
    .setAssetsSmallImage(assetVSCode[0].external_asset_path) 
    .setAssetsSmallText("JavaScript")
    .addButton('View Repository', 'https://github.com/Heraman');

  let ppek = Date.now();
  const spotify = new SpotifyRPC(client)
    .setAssetsLargeImage("spotify:ab67706c0000d72c347f5d97c447451abd6a04af")
    .setAssetsSmallImage("spotify:ab67706c0000d72c347f5d97c447451abd6a04af")
    .setAssetsLargeText("Zilfasyh")
    .setState('💔')
    .setDetails("404 Sleep Not Found, still thinking of u")
    .setStartTimestamp(ppek)
    .setEndTimestamp(ppek + 1_000 * (999 * 3600 + 56))
    .setSongId("0UV5zxRMz6AO4ZwUOZNIKI")
    .setAlbumId("16XswZ18xhMs8qUTN51mRl")
    .setArtistIds("4mLJ3XfOM5FPjSAWdQ2Jk7");

  client.user.setPresence({ activities: [vscode, spotify] });
});

app.get("/", (req, res) => {
  res.send("Selfbot Rich Presence is running... 💜");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

client.login(process.env.TOKEN);
