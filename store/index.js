const siteURL = "http://gatsbywordpressforms.local"

export const state = () => ({
  posts: [],
  pages: []
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updatepages: (state, pages) => {
    state.pages = pages
  }
}

export const actions = {
  async getPosts({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, excerpt, date, pages, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          pages,
          content
        }))

      commit("updatePosts", posts)
    } catch (err) {
      console.log(err)
    }
  },
  async getPages({ state, commit }) {
    if (state.pages.length) return

    let allpages = state.posts.reduce((acc, item) => {
      return acc.concat(item.pages)
    }, [])
    allpages = allpages.join()

    try {
      let pages = await fetch(
        `${siteURL}/wp-json/wp/v2/pages`
      ).then(res => res.json())

      pages = pages.map(({ id, name, slug, title, content }) => ({
        id,
        slug,
        title,
        content
      }))

      commit("updatepages", pages)
    } catch (err) {
      console.log(err)
    }
  }
}