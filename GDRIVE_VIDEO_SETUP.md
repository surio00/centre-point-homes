# 🎥 Google Drive Video Setup Guide

## How to Add Your Property Videos

### Step 1: Upload Videos to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Upload your property videos
3. Make sure videos are in a supported format (MP4, MOV, AVI, etc.)

### Step 2: Get the File ID
1. **Right-click** on your video in Google Drive
2. Click **"Get link"**
3. Copy the shareable link - it looks like:
   ```
   https://drive.google.com/file/d/1abc123XYZ789_example_file_id/view?usp=sharing
   ```
4. **Extract the File ID** - it's the part between `/d/` and `/view`:
   ```
   1abc123XYZ789_example_file_id
   ```

### Step 3: Make Videos Public
1. In Google Drive, right-click your video
2. Click **"Share"**
3. Change permissions to **"Anyone with the link can view"**
4. Click **"Done"**

### Step 4: Update Your Code
1. Open `client/src/components/featured-properties.tsx`
2. Replace the placeholder video IDs:

```javascript
const properties = [
  {
    id: 1,
    title: "Luxury Family Home",
    // ... other properties
    videoId: "1abc123XYZ789_your_actual_file_id" // Replace this
  },
  // ... other properties
];
```

## Example:
If your Google Drive link is:
```
https://drive.google.com/file/d/1BxLc2aB3dE4fG5hI6jK7lM8nO9pQ0rS/view?usp=sharing
```

Your file ID is: `1BxLc2aB3dE4fG5hI6jK7lM8nO9pQ0rS`

## What Happens:
- ✅ Property cards show play button overlay on hover
- ✅ Clicking property opens video in full-screen dialog
- ✅ Videos play directly from Google Drive
- ✅ Professional video player interface

## Troubleshooting:
- **Video not loading?** Check if the file is public
- **Access denied?** Make sure sharing is set to "Anyone with the link"
- **Wrong file ID?** Double-check the ID between `/d/` and `/view`

## Alternative: YouTube Integration
If you prefer YouTube:
1. Upload videos to YouTube
2. Get YouTube video ID from URL
3. Modify the `getGoogleDriveEmbedUrl` function to use YouTube embed URLs