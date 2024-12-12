import { Author } from "@prisma/client"

interface User {
    id:                 string
    fullName:           string 
    email:              string
    password:           string
    image:              string 
}



interface PoliciesType {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  published: boolean;
  authorId: string | null;
}


interface ActivitiesType {
    id:                  string     
    imageUrl:            string      
    title:               string
    content:             string
    published:           boolean
    author:              Author?     
}



interface NewsType {
    id:            string      
    imageUrl:      string      
    title:         string
    content:       string
    published:     boolean
    author:        Author     
    authorId:      string
  }



  interface AuthorType {
    id: string;
    name: string;
    designation: string;
  }



  interface GalleryType {
    id:            string      
    imageUrl:      string 
    title:         string
    description:   string
    published:     boolean
}



