export function getThumbnailUrl(thumbnail) {
  const path = thumbnail.path.replace(
    "http://i.annihil.us",
    "https://cdn.marvel.com"
  );
  return `${path}/portrait_uncanny.jpg`;
}
