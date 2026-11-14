CODEY LEGAL PAGES  (Terms of Service + Privacy Policy)
=====================================================

1. EDIT ONE LINE
   Open site.js in Notepad and change the line that starts  window.CODEY_CONTACT =
   to your contact: an email address (you@example.com) or a link to your support server
   (https://discord.gg/...). It updates both pages.
   Discord expects a way to reach you, so do not leave the default.

2. PUT THEM ON GITHUB PAGES (like your other pages)
   - On github.com create a new PUBLIC repository, e.g.  codey-legal
   - Click "uploading an existing file", drag in ALL the files from this folder, commit.
   - Repo Settings -> Pages -> Source: "Deploy from a branch" -> main / (root) -> Save.
   - After a minute your links are:
        Terms of Service:  https://<your-github-name>.github.io/codey-legal/terms.html
        Privacy Policy:    https://<your-github-name>.github.io/codey-legal/privacy.html

3. TELL DISCORD
   Developer Portal -> your app (Codey) -> General Information:
     - "Terms of Service URL"  -> the terms link
     - "Privacy Policy URL"    -> the privacy link
   -> Save Changes. Both warnings on the App Verification page should turn green.

4. THE LAST ITEM: IDENTITY VERIFICATION
   Only the team owner can do it, through Discord's ID check (App Verification page -> "Team owner
   must complete Identity Verification"). Then tick the two boxes and press Verify App.
   Verification is for apps nearing 100 servers; Discord may not let you submit before then.

IMPORTANT: these pages are a good starting point, not legal advice. Read them and make sure they match
what you really do with data (for example, if you stop using a service, remove it from section 3).
