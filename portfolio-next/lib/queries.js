export const homeQuery = `
*[_type == "page" && slug.current == "home"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[],
}
`;

export const aboutQuery = `
*[_type == "page" && slug.current == "about"] [0]{
  ...,
  ogImage{
  asset->
  },
}
`;

export const blogQuery = `
*[_type == "page" && slug.current == "blog"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[],
}
`;

export const contactQuery = `
*[_type == "page" && slug.current == "contact"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[]
}
`;

export const projectsQuery = `
*[_type == "page" && slug.current == "projects"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[],
}
`;


export const siteSettingsQuery = `
*[_type == "siteSettings"][0]{
  ...,
  ogImage {
  asset->
  }
}
`;

export const navQuery = `
*[_type == "navMenu"][0]{
  items[]{
    _key,
    link,
    title,
    "path": path->slug.current
  }
}
`;

export const socialsQuery = `
*[_type == "socials"][0]{
  discord,
  soundcloud,
  snapchat,
  tiktok,
  instagram,
  spotify,
  twitter,
  facebook,
  youtube,
}
`;
