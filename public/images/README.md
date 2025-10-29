# Images Directory

Place your portfolio images in this directory.

## Current Images

- `jordan-portrait.png` - Background portrait on landing page

## Recommended Images

### Project Images
Add images for your biotech projects:
- `lactasense.jpg` - LactaSense project image
- `bioimpedance.jpg` - Bioimpedance Sensor project image
- Resolution: 1200x800px or higher (16:9 aspect ratio)
- High quality, clear images that represent each project

## Usage

After adding your images here, update the references in `data/projects.ts`:

```typescript
// Example
{
  slug: "lactasense",
  title: "LactaSense",
  image: "/images/lactasense.jpg",  // Update this path
  // ...
}
```

## Image Optimization

Next.js automatically optimizes images when using the `Image` component. The site uses this for:
- Automatic format conversion (WebP)
- Responsive image sizes
- Lazy loading
- Blur placeholder generation
