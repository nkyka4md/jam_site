export { default as Article } from '../../components/Article.vue'
export { default as GymCategoriesFilter } from '../../components/GymCategoriesFilter.vue'
export { default as GymLocationsFilter } from '../../components/GymLocationsFilter.vue'
export { default as GymsDataList } from '../../components/GymsDataList.vue'
export { default as LikesButton } from '../../components/LikesButton.vue'
export { default as MyFooter } from '../../components/MyFooter.vue'
export { default as MyHeader } from '../../components/MyHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
