export const state = () => ({
  menuList: [
    { title: 'Home', path: '/' },
    { title: 'Shop', path: '/shop' },
    { title: '#MustHave Blog', path: '/blog' },
    { title: 'Contact', path: 'contact' }
  ],
  activeIndex: '0'
})

export const mutations = {
  setActiveIndex(state, activeIndex) {
    state.activeIndex = activeIndex
  }
}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    console.log(context.route.path)
    switch (context.route.path) {
      case '/':
        commit('setActiveIndex', '0')
        break
      case '/shop':
        commit('setActiveIndex', '1')
        break
      default:
        commit('setActiveIndex', '0')
        break
    }
  }
}
