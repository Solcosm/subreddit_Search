# Overview
subreddit Search is a Google Chrome extension designed to search specific keywords within subreddits. It serves as a shortcut to using the built-in reddit search.

Since I can't post the extension on the Chrome Web Store due to not wanting to pay the 5 USD initial charge at the time of creation, I am just uploading it here instead.

# Installation
1. Download/clone the ZIP of this repo (optional: delete everything but the **Extension Source** folder).
2. Navigate to chrome://extensions in your omnibox
3. Enable **Developer mode**, which will allow you to install third party extensions not hosted on the Chrome Web Store.
4. Click Load unpacked extension and navigate to where you downloaded the folder, select it.
5. Enable the extension and begin using it!

Uninstallation is as simple as clicking on the trashcan icon and confirming your deletion.

# Syntax
The extension has an example query underneath the search bar:

> [subreddit] [query]

Of course, you can replace these with any subreddit and query combination you desire.

The **FIRST** word will always represent the subreddit name, so make sure you type it exactly how it is written in the URL. Every word afterwards serves as your search keywords.

> games Super Mario Odyssey

This will search r/Games for the query "Super Mario Odyssey".