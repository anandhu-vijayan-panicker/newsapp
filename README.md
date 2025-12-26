# Project name : NewsPlus 

#Tech stack & version
- React 19.2.3
- TypeScript ^4.9.5

## Features

- Dark/Light Theme - Theme selection using Redux & localStorage
- English/Arabic Language - English/Arabic with full RTL layout for Arabic
- Real News API - Fetches posts from JSONPlaceholder API
- Responsive Design - responsive layout for mobile and web
- Skeleton Loading - Shimmer effects during data fetch
- Image - used external image URLs from Picsum
- Pagination - Load more news with pagination
- News Banner - Auto-sliding featured posts (2 second delay)
  Clickable banner redirecting to detail page
- Social Sharing - Share to all platforms
- MVC Architecture - i used Model-View-Controller Architecture design

## Project Structure (MVC)
SRC
|   App.css
|   App.test.tsx
|   App.tsx
|   index.css
|   index.tsx
|   logo.svg
|   react-app-env.d.ts
|   reportWebVitals.ts
|   setupTests.ts
|
+---components
|       ThemeInitializer.tsx
|
+---controllers
|       BlogController.ts
|       LanguageController.ts
|       ThemeController.ts
|
+---models
|       BlogModel.ts
|       NewsModel.ts
|
+---store
|   |   languageSlice.ts
|   |   store.ts
|   |   themeSlice.ts
|   |
|   \---api
|           newsApi.ts
|
+---styles
|       banner.css
|       blog.css
|       detail.css
|       layout.css
|       navbar.css
|       news.css
|       skeleton.css
|       theme.css
|
+---utils
|       imageFallback.ts
|       translations.ts
|
\---views
    +---components
    |   +---common
    |   |       LanguageToggle.tsx
    |   |       NavbarView.tsx
    |   |       SkeletonLoader.tsx
    |   |       ThemeToggle.tsx
    |   |
    |   \---news
    |           NewsCardView.tsx
    |
    \---pages
            HomePage.tsx
            PostDetailPage.tsx

