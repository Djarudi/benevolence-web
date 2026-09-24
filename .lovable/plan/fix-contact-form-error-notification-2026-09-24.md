# Fix contact form error notification

## Changes
- Make success and error notifications close automatically after a few seconds.
- Keep a visible close button on mobile so users can dismiss them immediately.
- Improve contact form error handling so a database-save issue does not incorrectly report that an email failed after it was sent.
- Show a clearer message when email delivery itself fails.

## Verification
- Confirm the site builds successfully.
- Submit the contact form and verify the notification disappears automatically.
