# How to Add a New Blog Post

Adding a new blog post is super easy! Just follow these steps:

## 1. Create a New MDX File

Create a new `.mdx` file in `src/content/blogs/` with your desired slug as the filename.

Example: `src/content/blogs/my-new-post.mdx`

## 2. Add Frontmatter

At the top of your MDX file, add frontmatter with metadata:

```mdx
---
title: "Your Blog Post Title"
excerpt: "A brief description of your blog post (shown in the card preview)"
date: "2024-12-24"
author: "Your Name"
readTime: "5 menit"
category: "Edukasi"
---

# Your Blog Post Title

Your content goes here...
```

## 3. Write Your Content

Write your blog post content using Markdown/MDX syntax. You can use:

- **Headings**: `#`, `##`, `###`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Lists**: `-` or `1.`
- **Links**: `[text](url)`
- **Blockquotes**: `> quote`
- **Code**: `` `code` `` or ` ```language `

## 4. That's It!

The blog post will automatically:

- ✅ Appear in the blog listing page (`/blogs`)
- ✅ Be accessible at `/blogs/your-slug`
- ✅ Use the proper layout with navbar, hero, content card, and CTA
- ✅ Be styled with the LLMForAutism design system

## Example Blog Post

```mdx
---
title: "10 Tips for Parents of Children with Autism"
excerpt: "Practical advice and strategies to support your child's development and well-being."
date: "2024-12-24"
author: "Dr. Sarah Johnson"
readTime: "7 menit"
category: "Tips"
---

# 10 Tips for Parents of Children with Autism

Raising a child with autism comes with unique challenges and rewards. Here are 10 practical tips to help you on this journey.

## 1. Establish Routines

Children with autism often thrive on predictability...

## 2. Celebrate Small Wins

Every milestone, no matter how small, is worth celebrating...

[Continue with your content...]
```

## Frontmatter Fields

| Field      | Required | Description                                  |
| ---------- | -------- | -------------------------------------------- |
| `title`    | Yes      | The title of your blog post                  |
| `excerpt`  | Yes      | Brief description (shown in cards)           |
| `date`     | Yes      | Publication date (YYYY-MM-DD)                |
| `author`   | No       | Author name (defaults to "Tim LLMForAutism") |
| `readTime` | No       | Estimated read time (defaults to "5 menit")  |
| `category` | No       | Category tag (defaults to "Artikel")         |

## No Need to:

- ❌ Copy layout files
- ❌ Update routing configuration
- ❌ Modify any code files
- ❌ Restart the dev server

Just create the MDX file and start writing! 🎉
