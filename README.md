# ST Tech Website

Welcome to the ST Tech website repository!

## 🚀 Quick Start

To run this website locally:

1. Open a terminal in this folder
2. Run: `npx http-server -p 8000`
3. Open your browser to: `http://localhost:8000`

## ✏️ How to Edit Website Content

**All website information is stored in `company-data.json`** - this is the ONLY file you need to edit!

### What you can customize:

#### 1. Company Information
```json
"company": {
  "name": "ST Tech",
  "tagline": "Innovative IT Solutions",
  "founded": 2025,
  "description": "Your company description here",
  "mission": "Your mission statement",
  "vision": "Your vision statement"
}
```

#### 2. Statistics (shown on homepage)
```json
"stats": {
  "projectsCompleted": 5,      // Update as you complete projects
  "clientSatisfaction": 100,    // Your satisfaction percentage
  "yearsInBusiness": 1,         // Years since founding
  "teamMembers": 3              // Current team size
}
```

#### 3. Team Members
Add or edit team members:
```json
{
  "name": "Your Name",
  "role": "Your Role",
  "image": "path/to/image.jpg",
  "skills": ["Skill 1", "Skill 2"],
  "social": {
    "instagram": "https://instagram.com/yourhandle",
    "facebook": "https://facebook.com/yourprofile",
    "linkedin": "https://linkedin.com/in/yourprofile"
  }
}
```

#### 4. Contact Information
```json
"contact": {
  "email": "hello@sttech.io",
  "careersEmail": "careers@sttech.io",
  "phone": "+1 (555) 123-4567",
  "address": "Your Address",
  "city": "Your City, State ZIP",
  "hours": "Mon-Fri, 9am-6pm"
}
```

#### 5. Social Media Links
```json
"social": {
  "twitter": "https://twitter.com/youraccount",
  "github": "https://github.com/youraccount",
  "linkedin": "https://linkedin.com/company/youraccount",
  "instagram": "https://instagram.com/youraccount"
}
```

#### 6. Client Testimonials
```json
{
  "name": "Client Name",
  "role": "Their Title, Company",
  "image": "path/to/image.jpg",
  "rating": 5,
  "text": "What they said about you"
}
```

## 📁 File Structure

```
ST/
├── index.html           # Main website structure (don't edit unless changing layout)
├── style.css           # Website styles (don't edit unless changing design)
├── script.js           # Website functionality (don't edit unless adding features)
├── company-data.json   # ✏️ EDIT THIS FILE to update website content
├── company-info.md     # Documentation only
└── README.md           # This file
```

## 🎨 Making Changes

1. **To update content:** Edit `company-data.json`
2. **Save the file**
3. **Refresh your browser** - changes appear instantly!

## 💡 Tips

- Use valid JSON format (check with a JSON validator if needed)
- Keep image URLs working (use full URLs or relative paths)
- For social media, use full URLs including `https://`
- Test your changes by refreshing the browser

## 🐛 Troubleshooting

**Changes not appearing?**
- Make sure `company-data.json` has valid JSON syntax
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)

**Website not loading?**
- Make sure you're running a local server (can't just open index.html)
- Check that all files are in the same folder

## 📝 Example: Adding a New Team Member

1. Open `company-data.json`
2. Find the `"team"` array
3. Add a new object:

```json
{
  "name": "New Member Name",
  "role": "Their Position",
  "image": "http://static.photos/people/320x240/4",
  "skills": ["Skill 1", "Skill 2", "Skill 3"],
  "social": {
    "instagram": "https://instagram.com/handle",
    "facebook": "https://facebook.com/profile",
    "linkedin": "https://linkedin.com/in/profile"
  }
}
```

4. Save and refresh!

## 🚀 Deploying Your Website

You can host this website on:
- **Netlify** (drag and drop the folder)
- **Vercel** (connect your GitHub repo)
- **GitHub Pages** (free hosting for public repos)
- Any web hosting service

## 📧 Support

Need help? Contact the team or refer to the documentation files.

---

**Last Updated:** June 2026  
**Version:** 2.0 (Dynamic JSON version)
