import { Author } from "@prisma/client"

interface User {
    id:                 string
    fullName:           string 
    email:              string
    password:           string
    image:              string 
}


interface AuthorType {
  id:                 string;
  name:               string;
  designation:        string;
}



interface PoliciesType {
  id:             string;
  fileUrl:        any | undefined;
  title:          string;
  description:    string;
  published:      boolean;
  slug:           string;
  author?:        Author | null;
  authorId:       string | null;
}


interface ActivitiesType {
  id:            string      
  imageUrl:      string      
  title:         string
  content:       string
  slug:          string
  published:     boolean
  author:        Author     
  authorId:      string   
}



interface NewsType {
    id:            string      
    imageUrl:      string      
    title:         string
    slug:          string
    content:       string
    published:     boolean
    author:        Author     
    authorId:      string
  }





  interface GalleryType {
    id:            string      
    imageUrl:      string 
    title:         string
    description:   string
    published:     boolean
}




interface SiteSectionType {
  id: string
  key: string
  eyebrow?: string | null
  title: string
  subtitle?: string | null
  body?: string | null
  ctaLabel?: string | null
  ctaUrl?: string | null
  imageUrl?: string | null
  sectionType: string
  sortOrder: number
  published: boolean
}

interface TeamMemberType {
  id: string
  name: string
  role: string
  category: string
  bio?: string | null
  imageUrl?: string | null
  profileUrl?: string | null
  facebookUrl?: string | null
  twitterUrl?: string | null
  linkedinUrl?: string | null
  sortOrder: number
  published: boolean
}
