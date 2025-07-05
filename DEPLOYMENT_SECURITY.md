# 🔒 Secure Deployment Guide

## Security Best Practices

### ✅ What's Safe:
- App passwords (not your main Gmail password)
- Environment variables set in hosting platform
- .env files that are gitignored

### ❌ What's NOT Safe:
- Committing .env files to GitHub
- Using your main Gmail password
- Hardcoding passwords in source code

## Vercel Deployment Steps

### 1. Environment Variables Setup
In Vercel Dashboard → Settings → Environment Variables:
```
EMAIL_USER = your-gmail@gmail.com
EMAIL_PASS = your-16-character-app-password
CONTACT_EMAIL = your-gmail@gmail.com
```

### 2. Verify .gitignore
Ensure .env files are ignored:
```
.env
.env.local
.env.production
```

### 3. Alternative: Use Vercel Forms
For maximum security, consider using Vercel's built-in form handling instead of email.

## Gmail App Password Security
- ✅ App passwords are safer than main passwords
- ✅ Can be revoked anytime from Google Account
- ✅ Limited to specific app access
- ❌ Still sensitive - never commit to code

## If Credentials Are Compromised
1. Revoke app password in Google Account
2. Generate new app password
3. Update environment variables on hosting platform