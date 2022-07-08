export const homeQuery = `
*[_type == "page" && slug.current == "home"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[]{
    ...,
    video {
      asset->
    },
    posts[]->,
    events[]->,
    internal->{
      "slug": slug.current
    }
  }
}
`;

export const aboutQuery = `
*[_type == "page" && slug.current == "about"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[]{
    ...,
    video {
      asset->
    },
    posts[]->,
    events[]->,
    internal->{
      "slug": slug.current
    }
  }
}
`;

export const blogQuery = `
*[_type == "page" && slug.current == "blog"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[]{
    ...,
    video {
      asset->
    },
    posts[]->,
    events[]->,
    internal->{
      "slug": slug.current
    }
  }
}
`;

export const contactQuery = `
*[_type == "page" && slug.current == "contact"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[]{
    ...,
    video {
      asset->
    },
    posts[]->,
    events[]->,
    internal->{
      "slug": slug.current
    }
  }
}
`;

export const projectsQuery = `
*[_type == "page" && slug.current == "projects"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[]{
    ...,
    video {
      asset->
    },
    posts[]->,
    events[]->,
    internal->{
      "slug": slug.current
    }
  }
}
`;

export const eventsQuery = `
*[_type == "page" && slug.current == "events"] [0]{
  ...,
  ogImage{
  asset->
  },
  pageBuilder[]{
    ...,
    video {
      asset->
    },
    posts[]->,
    events[]->,
    internal->{
      "slug": slug.current
    }
  }
}
`;

export const siteSettingsQuery = `
*[_type == "siteSettings"][0]{
  frontpage->,
  siteLogo[0],
  twitterHandle,
  websiteTitle,
  copyright,
  url
}
`;

export const mainNavQuery = `
*[_type == "navMenu" && title == "Main"][0] {
  _id,
  title,
  items[]{
    _key,
    _type,
    heading,
    external,
    internal->{
    slug{
      current
      }
    }
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

export const eventsListQuery = `
*[pageBuilder[0]._type == "eventsList"]{
  ... {
   "eventsList": pageBuilder[]{
     _key,
     _type,
     heading,
     subtitle,   
     events[]->{
       _id,
       title,
       subtitle,
       ageLimit,
       "slug": slug.current,
       location,
       startDate,
       endDate,
       "image": image.asset,
       "alt": image.alt
       },
   }
 }
}
`;
