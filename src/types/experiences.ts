export interface ArticleDetail {
  img: string
  title: string
  description: string
}

export interface ExperienceDetail {
  title: string
  image: string
  description: string
  learned: ArticleDetail[]
  locatedCompany: ArticleDetail[]
}