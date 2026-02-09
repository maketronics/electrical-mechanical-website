# Email Authentication Troubleshooting

## Error: "Username and Password not accepted" (535-5.7.8)

This error means Google is rejecting your credentials. Follow these steps:

### Step 1: Verify App Password Generation

1. **Go to App Passwords page:**
   - Visit: https://myaccount.google.com/apppasswords
   - Make sure you're signed in with `rohit@maket-ronics.com`

2. **Check if 2-Step Verification is enabled:**
   - If you see "App passwords aren't available" → Enable 2-Step Verification first
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

3. **Generate a NEW app password:**
   - Select "Mail" 
   - Select "Other (Custom name)"
   - Enter name: "Maketronics Server"
   - Click "Generate"
   - **Copy the 16-character password immediately** (you can't see it again)
   - Paste it into `server/.env` as `SMTP_PASS` (remove any spaces)

### Step 2: Check Google Workspace Admin Settings

If you're using Google Workspace (business account), your admin might have restrictions:

1. **Check if app passwords are allowed:**
   - Ask your Google Workspace admin to check:
   - Admin Console → Security → Access and data control → API controls
   - Ensure "Less secure app access" or "App passwords" are enabled

2. **Alternative: Use OAuth2** (if app passwords are blocked)
   - More complex setup required
   - Contact admin for OAuth2 credentials

### Step 3: Verify Email Format

Make sure in `server/.env`:
- `SMTP_USER` matches your exact Google Workspace email: `rohit@maket-ronics.com`
- No extra spaces or quotes
- `SMTP_PASS` is exactly 16 characters (no spaces)

### Step 4: Test the Connection

Restart your server and check the startup messages:
```bash
node server/index.js
```

You should see:
- `✓ SMTP Server is ready to send emails` (success)
- OR error message with troubleshooting tips

You can also test via browser:
```
http://localhost:3001/api/test-email
```

### Step 5: Common Issues

**Issue:** App password has spaces
- **Fix:** Remove all spaces from the app password

**Issue:** Wrong email address
- **Fix:** Use the exact email that has 2-Step Verification enabled

**Issue:** App password expired or deleted
- **Fix:** Generate a new app password

**Issue:** Google Workspace admin blocked app passwords
- **Fix:** Contact admin to enable app passwords or use OAuth2

### Step 6: Alternative - Use OAuth2 (Advanced)

If app passwords don't work, you can use OAuth2. This requires:
1. Creating a Google Cloud Project
2. Enabling Gmail API
3. Creating OAuth2 credentials
4. More complex code setup

Let me know if you need help with OAuth2 setup.
