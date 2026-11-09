# Updating the CIE Partners website

This guide is for Jenny. It covers the one-off setup, then how to make a change and get it live on ciepartners.com.

The website is a single page. Its files live in a GitHub repository, and a service called Vercel publishes whatever is in that repository. You do not edit files by hand. You tell an AI agent (Claude Code) what you want, it makes the change, shows you a preview, and publishes when you say so.

## One-off setup (about 20 minutes)

1. **Accept the GitHub invite.** An invitation was sent to Jenny@ciepartners.com for the repository github.com/saltyandy/cie-partners. It is attached to the GitHub account that uses that email address (cie-fund-dashboard). Sign in to GitHub with that account and accept it at https://github.com/saltyandy/cie-partners/invitations.

2. **Install Claude Code.** Download the desktop app from https://claude.com/claude-code and sign in with a Claude account. A paid Claude plan is needed.

3. **Install the GitHub command line tool and sign in.** This is what lets the agent push changes under your name. Open the Terminal app and run:

   ```
   brew install gh
   gh auth login
   ```

   Choose GitHub.com, then HTTPS, then "Login with a web browser", and sign in as the account that accepted the invite. If you do not have Homebrew, Claude Code can walk you through installing it. Just ask.

4. **Get a copy of the website files.** In Terminal:

   ```
   cd ~/Documents
   git clone https://github.com/saltyandy/cie-partners.git
   ```

   This creates a folder called cie-partners in your Documents.

5. **Open that folder in Claude Code.** Use File, Open Folder (or type `claude` in Terminal from inside the folder). The agent reads the file called CLAUDE.md in the folder, which tells it how this site is set up and the rules for publishing.

## Making a change

Open the cie-partners folder in Claude Code and describe what you want in plain English. Examples:

- "Change the email address on the site to hello@ciepartners.com."
- "Update the address to our new office at ..."
- "Add a line under the logo that says ..."
- "Make the logo a bit smaller on phones."

The agent will then, without you needing to ask:

1. Make the change on a separate working copy, not the live site.
2. Open the page in your browser so you can see it locally.
3. Upload the change and give you a preview link ending in vercel.app. Open it on your phone or send it to anyone who needs to check it. The live site is untouched at this point.
4. Wait for you to approve.

When you are happy, say "publish" or "go live". The agent merges the change and ciepartners.com updates within a minute or two. Hard refresh the page if it looks stale.

If you want changes, just say so and the agent will update the preview. If you want to abandon the change, say "drop this, don't publish".

## Rules the agent follows

These are written into the folder, so you do not have to repeat them. It is worth knowing they exist.

- It never publishes straight to the live site. Every change goes through a preview first.
- It never publishes without you explicitly saying so.
- It keeps the site plain. No new tools, frameworks or dependencies.
- It checks the page works on a phone.

## Starting a new session later

Each time, open the cie-partners folder in Claude Code and start with "pull the latest changes", so you are working from whatever is currently live. Then describe what you want.

## If something goes wrong

- Nothing is ever lost. Every version of the site is kept in GitHub's history, and any change can be undone. Tell the agent "undo the last published change" and it will do that through the same preview-then-publish flow.
- If the preview link never appears, or publishing fails, tell the agent to explain what happened. If it cannot fix it, send Andy the message it gives you.
- If you are ever unsure, do not say "publish". A preview sitting there costs nothing.
