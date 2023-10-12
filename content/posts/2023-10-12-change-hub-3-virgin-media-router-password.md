---
title: "How to set any password to your Virgin Media Hub 3.0 router"
description: "Check out these instructions to set any password you like on your Virgin Media Hub 3.0 router. There are various limitations VM enforces on passwords: if you want to change broadband provider but not set up WiFi access to all your devices again, this will be useful for you."
date: 2023-10-12
featured: false
---

# How to set any password to your Virgin Media Hub 3.0 router

1. Log in to your router admin panel by reaching `http://192.168.0.1/`.
2. Open your browser devTools (F12).
3. Go to the Sources tab.
4. Look for the file `skins/lgi/js/base.js`.
5. On line 2065 (at the time of writing, this can be different for you) find the following variable declaration `var ret = validator();`.
6. Edit the code to be `var ret = true;` and save. Note: if you change page in the admin panel, you will have to do this again.
7. Set any password you want via the UI and apply.
