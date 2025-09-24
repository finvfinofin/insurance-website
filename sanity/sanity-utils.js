import { createClient, groq } from "next-sanity";
import { LRUCache } from "lru-cache";

// Initialize the Sanity client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "nj1kut2q",
  dataset: "production",
  apiVersion: "2024-04-24",
  useCdn: true,
});

// Initialize cache
const cache = new LRUCache({ max: 100, ttl: 1000 * 60 });

async function fetchWithCache(query, params = {}) {
  const cacheKey = JSON.stringify({ query, params });

  if (cache.has(cacheKey)) return cache.get(cacheKey);

  const data = await sanityClient.fetch(query, params, { cache: "no-store" });
  cache.set(cacheKey, data);
  return data;
}

// Fetch header
export async function getHeader() {
  const query = groq`*[_type == 'navBar'] {
    'title': coalesce(title, ''),
    'cta': coalesce(cta, {}),
    "logo": logo.asset->url,
    "dark_logo": dark_logo.asset->url,
    'items': items[] {
      'label': coalesce(label, ''),
      'link': coalesce(link, ''),
      'icon': icon.asset->url,
      'position': coalesce(position, 0)
    }
  } | order(items.position asc)[0]`;

  return fetchWithCache(query);
}

// Fetch page
export async function getPage(name) {
  const query = groq`
    *[_type == "page" && title == $name][0] {
      title,
      list[]{
        title,
        description,
        "bgImgUrl": bgimgfile.asset->url,
        data[]{
          title,
          description,
          "icon": image.asset->url
        }
      },
      section[] | order(section asc) {
        align,
        isSlide,
        isParallax,
        header,
        name,
        name_mobile,
        flipText,
        description,
        description2,
        htmlContent,
        button,
        cssClass,
        "bgvidfileUrl": bgvidfile.asset->url,
        "bgimgfileUrl": bgimgfile.asset->url,
        "rightanimationfileUrl": rightanimationfile.asset->url,
        "headingImageFile": headingimgfile.asset->url,
        "slideImage": mobileSlideImage.asset->url,
        bulletedList[]{
          title,
          "bullet": bullet.asset->url
        },
        subheading{
          heading,
          heading2,
          "image": bullet.asset->url
        },
        data[]{
          title,
          description,
          "icon": image.asset->url
        }
      }
    }`;

  return fetchWithCache(query, { name });
}

// Fetch footer
export async function getFooter() {
  const query = groq`*[_type== "footer"][0] {
    content,
    list,
    partners_certifications[]{
      "imageUrl": imageLink.asset->url,
      "fileUrl": fileLink.asset->url,
    }
  }`;

  return fetchWithCache(query);
}
