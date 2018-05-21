export interface Organism {
  name: string
  image: string
  url: string
}

export interface CodeSchoolProfile {
  username: string
  member_since: string
  total_score: number
  avatar: string
  organism: Organism
}
