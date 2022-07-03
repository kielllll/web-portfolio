import axios from 'axios'

const getAllOwnedRepo = async () => {
  const USER = process.env.NEXT_PUBLIC_GITHUB_USERNAME
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_API_PA_TOKEN

  try {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${USER}+sort:updated+archived:false`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    )

    return await res.data.items.map((repo) => ({
      id: repo.id,
      created: repo.created_at,
      url: repo.html_url,
      language: repo.language,
      website: repo.homepage,
      name: repo.name,
      description: repo.description,
      isPrivate: repo.private,
    }))
  } catch (err) {
    console.error(err)
  }

  return []
}

export default getAllOwnedRepo
