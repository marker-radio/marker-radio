1.  Re-read the whole conversation for every fix that landed — fallbacks, rules, helpers, field names.

2.  Merge them into one file. No fresh drafts. The new file must contain everything the old one had, plus the change.

3.  Diff it against the last known-good version line by line. If anything disappeared, it goes back in.

After every commit 4. Open the live file on GitHub and confirm it matches what you pasted. Not the editor preview — the committed file. 5. Confirm Netlify finished deploying. Check the deploy status, not just the commit.

Before any drive test 6. Close the Safari tab completely. Reopen the Netlify link. No Home Screen icon. 7. Tap Start. Confirm the gray line shows numbers and a story count, not “asking” stuck forever. 8. If it says “asking” for more than thirty seconds, stop. Do not drive. Fix first.

After a drive 9. Note what fired, what didn’t, and the exact GPS line you saw. That line is the bug report.

The one that would have saved tonight: step four. We committed, assumed it deployed, and drove on a file that never matched.

