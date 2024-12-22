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
  author:         AuthorType
  authorId:       string | null;
}


interface ActivitiesType {
  id:            string      
  imageUrl:      string      
  date:          Date
  location:      string
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



