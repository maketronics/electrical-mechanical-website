# Deploying to Render

This guide will help you deploy the Maketronics email server to Render.

## Prerequisites

1. A Render account (sign up at https://render.com)
2. Your email credentials ready (SMTP settings)

## Step-by-Step Deployment

### Option 1: Using render.yaml (Recommended)

1. **Push your code to GitHub**
   - Make sure your code is in a GitHub repository
   - Ensure `render.yaml` is in the root directory

2. **Connect Repository to Render**
   - Log in to Render Dashboard
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml` and create the service

3. **Set Environment Variables**
   - In the Render dashboard, go to your service
   - Navigate to "Environment" tab
   - Add the following environment variables:
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-workspace-email@yourdomain.com
     SMTP_PASS=your-app-password-here
     FROM_EMAIL=noreply@yourdomain.com
     FROM_NAME=Maketronics
     ADMIN_EMAIL=admin@yourdomain.com
     ```
   - **Important**: Keep `SMTP_PASS` secure - never commit it to git

4. **Deploy**
   - Render will automatically deploy when you push changes
   - Or click "Manual Deploy" → "Deploy latest commit"

### Option 2: Manual Setup

1. **Create a New Web Service**
   - Log in to Render Dashboard
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service Settings**
   - **Name**: `maketronics-server` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm run server`
   - **Instance Type**: Free tier is fine for testing

3. **Set Environment Variables**
   - Go to "Environment" tab
   - Add all variables from `.env.example`:
     - `SMTP_HOST`
     - `SMTP_PORT`
     - `SMTP_USER`
     - `SMTP_PASS`
     - `FROM_EMAIL`
     - `FROM_NAME`
     - `ADMIN_EMAIL`
   - **Note**: Render automatically sets `PORT`, so you don't need to set it manually

4. **Deploy**
   - Click "Create Web Service"
   - Render will build and deploy your service

## Post-Deployment

1. **Get Your Server URL**
   - After deployment, Render provides a URL like: `https://maketronics-server.onrender.com`
   - This is your server's public URL

2. **Update Frontend API URL**
   - Update your frontend code to use the Render URL instead of `localhost:3001`
   - Example: `https://maketronics-server.onrender.com/api/send-email`

3. **Test the Deployment**
   - Visit: `https://your-service-url.onrender.com/api/test-email`
   - Should return a JSON response confirming email configuration

## Important Notes

- **Free Tier Limitations**: 
  - Services on free tier spin down after 15 minutes of inactivity
  - First request after spin-down may take 30-60 seconds
  - Consider upgrading to paid tier for production

- **Environment Variables**:
  - Never commit `.env` file to git
  - Always set sensitive values in Render dashboard
  - Use Render's environment variable sync feature for team collaboration

- **Port Configuration**:
  - Render automatically sets `PORT` environment variable
  - Your server code already uses `process.env.PORT || 3001`, so it will work automatically

- **Health Checks**:
  - Render automatically checks if your service is running
  - Make sure your server starts successfully (check logs)

## Troubleshooting

### Service Won't Start
- Check build logs in Render dashboard
- Verify all dependencies are in `package.json`
- Ensure `startCommand` is correct: `npm run server`

### Email Not Sending
- Verify SMTP credentials in environment variables
- Check service logs for SMTP connection errors
- Test with `/api/test-email` endpoint

### CORS Issues
- Your server already has CORS enabled
- If frontend is on different domain, verify CORS settings
- Check browser console for CORS errors

## Updating Your Deployment

1. Push changes to GitHub
2. Render automatically detects changes and redeploys
3. Or manually trigger deployment from Render dashboard

## Monitoring

- View logs in real-time from Render dashboard
- Set up alerts for service downtime
- Monitor email sending success rates
