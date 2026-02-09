# Email API Server

Simple Express.js API server for handling contact form submissions and sending emails.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy the environment example file:
```bash
cp server/.env.example server/.env
```

3. Configure your email settings in `server/.env`:
   - `SMTP_USER`: Your email address (e.g., Gmail)
   - `SMTP_PASS`: Your email app password (for Gmail, generate an app password)
   - `ADMIN_EMAIL`: Email address where form submissions will be sent
   - `SMTP_HOST`: SMTP server (default: smtp.gmail.com)
   - `SMTP_PORT`: SMTP port (default: 587)

## Running the Server

```bash
npm run server
```

The server will run on `http://localhost:3001`

## API Endpoint

**POST** `/api/send-email`

Sends emails to both admin and user when a form is submitted.

### Request Body:
```json
{
  "fullName": "John Doe",
  "email": "user@example.com",
  "phone": "+1234567890",
  "company": "Company Name",
  "projectType": "Project Type",
  "tph": "100",
  "feedRockBulkDensity": "Details",
  "topFeedSize": "Size",
  "clayMoisture": "Content",
  "voltageFrequency": "220V/50Hz",
  "message": "Project message"
}
```

### Response:
```json
{
  "success": true,
  "message": "Emails sent successfully"
}
```

## Google Workspace Setup

For Google Workspace (Business Gmail) accounts:

1. **Enable 2-Step Verification:**
   - Go to your Google Workspace Admin Console or https://myaccount.google.com/security
   - Enable 2-Step Verification on your account

2. **Generate an App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Or navigate: Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)" 
   - Enter a name like "Maketronics API"
   - Click "Generate"
   - Copy the 16-character password (no spaces)

3. **Configure your `.env` file:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-workspace-email@yourdomain.com
   SMTP_PASS=your-16-character-app-password
   ADMIN_EMAIL=admin@yourdomain.com
   PORT=3001
   ```

**Important Notes:**
- Use your full Google Workspace email address (e.g., `admin@maketronics.com`)
- The app password is 16 characters without spaces
- SMTP settings are the same as regular Gmail: `smtp.gmail.com` port `587`
- If your admin email is the same as SMTP_USER, that's fine

## Regular Gmail Setup

If using a personal Gmail account:
1. Enable 2-Step Verification on your Google Account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated app password as `SMTP_PASS`

## Other Email Providers

For other email providers, update `SMTP_HOST` and `SMTP_PORT` accordingly:
- Outlook: smtp-mail.outlook.com, port 587
- Yahoo: smtp.mail.yahoo.com, port 587
- Custom SMTP: Check with your email provider
